export interface ProductType {
  id: string
  type: string
  category: string
  name: string
  shortDescription: string
  description: string
  price: number
  image: string
  images: string[]
  list: {
    color: string
    quantity: number
  }[]
  sizes: string[]
  colors: string[]
  rating: number
  discount: number
  timeStamp: string
  quantitySold: number
}
