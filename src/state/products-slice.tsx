import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { ProductType } from '../models/ProductType'

interface ProductsState {
  products: ProductType[]
}

const initialState: ProductsState = {
  products: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {}
})
