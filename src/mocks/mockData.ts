export const users = [
  {
    user_id: 1,
    email: 'alice@example.com',
    password_hash: '***',
    profile_picture: '',
    role: 'customer',
    is_active: true,
    is_email_verified: true,
    last_login: '2025-10-01T10:20:00Z',
    created_at: '2024-02-01T09:00:00Z',
    updated_at: '2025-09-01T08:00:00Z'
  },
  {
    user_id: 2,
    email: 'bob@example.com',
    password_hash: '***',
    profile_picture: '',
    role: 'seller',
    is_active: true,
    is_email_verified: false,
    last_login: '2025-09-25T12:45:00Z',
    created_at: '2023-11-10T09:00:00Z',
    updated_at: '2025-09-16T08:00:00Z'
  },
  {
    user_id: 3,
    email: 'carla@example.com',
    password_hash: '***',
    profile_picture: '',
    role: 'customer',
    is_active: false,
    is_email_verified: false,
    last_login: '2025-09-10T11:00:00Z',
    created_at: '2024-05-20T09:00:00Z',
    updated_at: '2025-09-15T08:00:00Z'
  }
]

export const products = [
  {
    product_id: 101,
    seller_id: 2,
    category_id: 10,
    title: 'T-shirt ZAYITI',
    description: 'T-shirt en coton 100%',
    brand: 'ZAYITI',
    price: 19.99,
    stock_quantity: 120,
    weight_kg: 0.2,
    dimensions_cm: '30x20x2',
    is_active: true,
    is_featured: true,
    created_at: '2025-01-15T09:00:00Z',
    updated_at: '2025-09-01T08:00:00Z'
  },
  {
    product_id: 102,
    seller_id: 2,
    category_id: 20,
    title: 'Design Logo',
    description: 'Service de création de logo',
    brand: 'ZAYITI Studio',
    price: 120.0,
    stock_quantity: 1,
    weight_kg: 0,
    dimensions_cm: '',
    is_active: true,
    is_featured: false,
    created_at: '2025-03-20T09:00:00Z',
    updated_at: '2025-09-10T08:00:00Z'
  }
]

export const orders = [
  {
    order_id: 1001,
    order_number: 'ORD-20250901-0001',
    customer_id: 1,
    seller_id: 2,
    total_amount: 19.99,
    tax_amount: 0,
    shipping_cost: 0,
    status: 'delivered',
    created_at: '2025-09-01T10:00:00Z',
    shipped_at: '2025-09-02T08:00:00Z',
    delivered_at: '2025-09-05T09:00:00Z'
  },
  {
    order_id: 1002,
    order_number: 'ORD-20250915-0002',
    customer_id: 3,
    seller_id: 2,
    total_amount: 120.0,
    tax_amount: 0,
    shipping_cost: 0,
    status: 'pending',
    created_at: '2025-09-15T11:00:00Z',
    shipped_at: null,
    delivered_at: null
  }
]

export const payments = [
  {
    payment_id: 5001,
    order_id: 1001,
    amount: 19.99,
    payment_method: 'card',
    payment_status: 'success',
    transaction_id: 'txn_abc123',
    created_at: '2025-09-02T10:00:00Z'
  },
  {
    payment_id: 5002,
    order_id: 1002,
    amount: 120.0,
    payment_method: 'paypal',
    payment_status: 'pending',
    transaction_id: 'txn_xyz789',
    created_at: '2025-09-16T12:00:00Z'
  }
]
