import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { products as importedProducts } from './products'
import { ProductType } from '../models/ProductType'

type ProductsContextType = {
  products: ProductType[]
  getProduct: (id: string) => ProductType | undefined
  getRelatedProducts: (type: string) => ProductType[] | []
}

interface ProductsProviderProps {
  children: React.ReactNode
}

const ProductsContext = React.createContext<ProductsContextType>({
  products: [],
  getProduct: (_id) => undefined,
  getRelatedProducts: (_type) => []
})

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    setProducts(importedProducts)
  }, [])

  const getProduct = useCallback(
    (id: string): ProductType | undefined => {
      return products.find((product) => product.id === id)
    },
    [products]
  )

  const getRelatedProducts = useCallback(
    (type: string): ProductType[] | [] => {
      return products.filter((product) => product.type === type)
    },
    [products]
  )
  const value = useMemo(
    () => ({ products, getProduct, getRelatedProducts }),
    [products, getProduct, getRelatedProducts]
  )

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

const useProducts = () => React.useContext(ProductsContext)

export { useProducts, ProductsProvider }
