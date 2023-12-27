import { Link } from 'react-router-dom'
import { useState } from 'react'
import classes from './ProductCard.module.scss'
import shareIcon from '../assets/product-icons/share-icon.svg'
import compareIcon from '../assets/product-icons/compare-icon.svg'
import likeIcon from '../assets/product-icons/like-icon.svg'

export interface ProductProps {
  name: string
  shortDescription: string
  price: number
  image: string
  discount: number
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  shortDescription,
  discount,
  image,
  price
}) => {
  const [hover, setHover] = useState(false)

  return (
    <li
      className={classes['product-card']}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={classes['product-card-content']}>
        {discount > 0 && <span className={classes.discount}>{discount}%</span>}
        <img src={image} alt="product" />
        <div className={classes['product-card-description']}>
          <h3 className={classes.productTitle}>{name}</h3>
          <span>{shortDescription}</span>
          <div className={classes['price-container']}>
            <span className={classes.price}>$ {price}</span>
            {discount > 0 && (
              <span className={classes['price-with-discount']}>
                $ {price * (1 - discount)}
              </span>
            )}
          </div>
        </div>
      </div>
      {hover && (
        <div className={classes['product-card-onHover']}>
          <button>Add to cart</button>
          <div className={classes.links}>
            <Link to="">
              <div>
                <img src={shareIcon} alt="share" />
                <span>Share</span>
              </div>
            </Link>
            <Link to="">
              <div>
                <img src={compareIcon} alt="share" />
                <span>Compare</span>
              </div>
            </Link>
            <Link to="">
              <div>
                <img src={likeIcon} alt="share" />
                <span>Like</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </li>
  )
}

export default ProductCard
