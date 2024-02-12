import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './FavoriteProductCard.module.scss'

export interface FavoriteProductProps {
  name: string
  price: number
  image: string
  discount: number
  id: string
  removeFromFavorites: (id: string) => void
}

const ProductCard: React.FC<FavoriteProductProps> = ({
  name,
  image,
  price,
  discount,
  id,
  removeFromFavorites
}: FavoriteProductProps) => {
  const [hover, setHover] = useState(false)

  const removeItem = useCallback(() => removeFromFavorites(id), [id, removeFromFavorites])

  return (
    <li
      className={classes['product-card']}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <button className={classes['remove-button']} onClick={removeItem}>
          x
        </button>
      )}
      <div className={classes['product-card-content']}>
        <img src={image} alt="product" />
        <p className={classes.productTitle}>{name}</p>
        <span>$ {price * (1 - discount / 100)}</span>
        <Link to={`/product-view/${id}`}>See the product</Link>
      </div>
    </li>
  )
}

export default ProductCard
