export type User = {
  user_id: number
  email: string
  profile_picture?: string
  role: 'admin'|'seller'|'customer'|'buyer'
  is_active: boolean
  is_email_verified: boolean
  last_login?: string
  created_at?: string
  updated_at?: string
}

export type Product = {
  product_id: number
  seller_id: number
  category_id?: number
  title: string
  description?: string
  brand?: string
  price: number
  stock_quantity?: number
  weight_kg?: number
  dimensions_cm?: string
  is_active: boolean
  is_featured?: boolean
  created_at?: string
  updated_at?: string
}

export type Order = {
  order_id: number
  order_number: string
  customer_id: number
  seller_id: number
  total_amount: number
  tax_amount?: number
  shipping_cost?: number
  status: string
  created_at?: string
  shipped_at?: string | null
  delivered_at?: string | null
}

export type Payment = {
  payment_id: number
  order_id: number
  amount: number
  payment_method: string
  payment_status: string
  transaction_id?: string
  created_at?: string
}
