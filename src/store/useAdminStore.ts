import create from 'zustand'
import { users as mockUsers, products as mockProducts, orders as mockOrders, payments as mockPayments } from '../mocks/mockData'
import { User, Product, Order, Payment } from '../types'

type State = {
  users: User[]
  products: Product[]
  orders: Order[]
  payments: Payment[]
  loading: boolean
  error?: string | null
  fetchAll: () => Promise<void>
  toggleUserActive: (user_id: number) => Promise<void>
  toggleProductActive: (product_id: number) => Promise<void>
}

export const useAdminStore = create<State>((set,get)=>({
  users: [],
  products: [],
  orders: [],
  payments: [],
  loading: false,
  error: null,
  fetchAll: async ()=>{
    set({ loading: true })
    try {
      await new Promise(r=>setTimeout(r,200))
      set({ users: mockUsers, products: mockProducts, orders: mockOrders, payments: mockPayments, loading:false })
    } catch (e:any){
      set({ error: e.message, loading:false })
    }
  },
  toggleUserActive: async (user_id)=>{
    set({ loading: true })
    await new Promise(r=>setTimeout(r,150))
    set(state=>({ users: state.users.map(u=> u.user_id===user_id ? {...u, is_active: !u.is_active} : u), loading:false }))
  },
  toggleProductActive: async (product_id)=>{
    set({ loading: true })
    await new Promise(r=>setTimeout(r,150))
    set(state=>({ products: state.products.map(p=> p.product_id===product_id ? {...p, is_active: !p.is_active} : p), loading:false }))
  }
}))
