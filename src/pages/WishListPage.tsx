import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { ProductType } from '../models/ProductType'
import { useProducts } from '../state/ProductsContext'
import { FavoritesContext } from '../state/FavoritesContext'
import FavoriteProductCard from '../components/FavoriteProductCard'

import classes from './WishListPage.module.scss'
import BaseBanner from '../components/BaseBanner'

const WishListPage = () => {
  const navigate = useNavigate()
  const { products } = useProducts()
  const [favoriteProducts, setFavoriteProducts] = useState<ProductType[]>([])
  const { favoriteProductIds, removeItem } = useContext(FavoritesContext)

  useEffect(() => {
    const favorites = products.reduce(
      (acc: ProductType[], curr: ProductType): ProductType[] => {
        const favoriteItem = favoriteProductIds.includes(curr.id)
        if (favoriteItem) {
          acc.push(curr)
        }
        return acc
      },
      []
    )
    setFavoriteProducts(favorites)
  }, [favoriteProductIds, products])

  const handleGetInspired = () => {
    navigate('/shop')
  }
  return (
    <div className={classes['wishlist-page']}>
      <BaseBanner fromPage="Home" toPage="Favorite" title="Favorite" />
      {favoriteProductIds.length === 0 && (
        <div className={classes['empty-wishlist-container']}>
          <p>Lista ta de produse favorite este goală.</p>
          <p>
            Salvați articolele care vă plac cel mai mult pentru a nu le pierde din vedere.
          </p>
          <button onClick={handleGetInspired}>Insipiră-te</button>
        </div>
      )}
      {favoriteProductIds.length > 0 && (
        <div className={classes['wishlist-container']}>
          <p>Aceasta este selecția de produse care vă plac cel mai mult.</p>
          <ul>
            {favoriteProducts.map((item) => (
              <FavoriteProductCard
                key={item.id}
                name={item.name}
                discount={item.discount}
                id={item.id}
                price={item.price}
                image={item.image}
                removeFromFavorites={() => removeItem(item.id)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default WishListPage
