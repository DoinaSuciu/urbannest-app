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
    value: string
    stock: number
  }[]
  sizes: string[]
  colors: string[]
  rating: number
  discount: number
  timeStamp: string
  quantitySold: number
  additionalInformation: string
  reviews: {
    id: string
    name: string
    rating: number
    comment: string
    timeStamp: string
  }[]
}
