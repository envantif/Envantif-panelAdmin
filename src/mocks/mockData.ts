import { User, Product, Order, Transaction } from '../types'

export const users: User[] = [
  { id: 'u1', name: 'Alice Martin', email: 'alice@example.com', role: 'buyer', active: true, orders: ['o1'] },
  { id: 'u2', name: 'Bob Duval', email: 'bob@example.com', role: 'seller', active: true, orders: [] },
  { id: 'u3', name: 'Carla Roche', email: 'carla@example.com', role: 'buyer', active: false, orders: ['o2'] },
]

export const products: Product[] = [
  { id: 'p1', title: 'T-shirt VAMAYO', price: 19.99, category: 'Clothing', active: true, sellerId: 'u2' },
  { id: 'p2', title: 'Design Logo', price: 120.0, category: 'Services', active: true, sellerId: 'u2' },
]

export const orders: Order[] = [
  { id: 'o1', buyerId: 'u1', sellerId: 'u2', items: [{productId:'p1', qty:1}], total:19.99, status:'delivered', date:'2025-09-01' },
  { id: 'o2', buyerId: 'u3', sellerId: 'u2', items: [{productId:'p2', qty:1}], total:120.0, status:'pending', date:'2025-09-15' },
]

export const transactions: Transaction[] = [
  { id: 't1', orderId: 'o1', amount: 19.99, method: 'card', status: 'success', date:'2025-09-02' },
  { id: 't2', orderId: 'o2', amount: 120.0, method: 'paypal', status: 'pending', date:'2025-09-16' },
]
