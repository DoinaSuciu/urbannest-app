import React, { useEffect, useState } from 'react'
import { products as importedProducts } from './products'
import { ProductType } from '../models/ProductType'

type ProductsContextType = {
  products: ProductType[]
}

const ProductsContext = React.createContext<ProductsContextType>({
  products: []
})

const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState<ProductType[]>(importedProducts)

  useEffect(() => {
    setProducts(products)
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
  )
}

const useProducts = () => React.useContext(ProductsContext)

export { useProducts, ProductsProvider }
