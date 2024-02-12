import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import classes from './ProductCard.module.scss'
import { FavoriteIcon } from './Icons/FavoriteIcon'

export interface ProductProps {
  name: string
  shortDescription: string
  price: number
  image: string
  discount: number
  id: string
  isFavorite: boolean
  toggleFavorite?: (_id: string) => void
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  shortDescription,
  discount,
  image,
  price,
  id,
  isFavorite,
  toggleFavorite
}: ProductProps) => {
  const onToggle = useCallback(() => {
    if (toggleFavorite) {
      toggleFavorite(id)
    }
  }, [id, toggleFavorite])

  return (
    <li className={classes['product-card']}>
      <div className={classes['product-card-content']}>
        {discount > 0 && <span className={classes.discount}>{discount}%</span>}
        <img src={image} alt="product" />
        <div className={classes['product-card-description']}>
          <Link to={`/product-view/${id}`}>
            <h3 className={classes.productTitle}>{name}</h3>
          </Link>

          <div className={classes['description-like-container']}>
            <span>{shortDescription}</span>
            <button className={classes['favorite-button']} onClick={onToggle}>
              <FavoriteIcon isAddedToFavorite={isFavorite} />
            </button>
          </div>
          <div className={classes['price-container']}>
            <span className={classes.price}>$ {price * (1 - discount / 100)}</span>
            {discount > 0 && (
              <span className={classes['price-with-discount']}>$ {price}</span>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProductCard
