export type User = {
  id: string
  name: string
  email: string
  role: 'buyer'|'seller'
  active: boolean
  orders: string[]
}

export type Product = {
  id: string
  title: string
  price: number
  category: string
  active: boolean
  sellerId: string
}

export type Order = {
  id: string
  buyerId: string
  sellerId: string
  items: { productId: string, qty: number }[]
  total: number
  status: 'pending'|'processing'|'shipped'|'delivered'|'cancelled'
  date: string
}

export type Transaction = {
  id: string
  orderId: string
  amount: number
  method: string
  status: 'success'|'pending'|'failed'
  date: string
}
