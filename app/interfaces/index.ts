export interface IReview {
  id: number
  text: string
}

export interface IProduct {
  id: number
  image_url: string
  title: string
  description: string
  price: number
}

export interface IGetProducts {
  amount: number
  page: number
  products: IProduct[]
  total: number
}

export interface ICartItem {
  product: IProduct
  quantity: number
}

export interface IOrder {
  id: number
  quantity: number
}
