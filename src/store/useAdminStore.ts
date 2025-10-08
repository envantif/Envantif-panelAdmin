import create from 'zustand'
import { users as mockUsers, products as mockProducts, orders as mockOrders, transactions as mockTransactions } from '../mocks/mockData'
import { User, Product, Order, Transaction } from '../types'

type State = {
  users: User[]
  products: Product[]
  orders: Order[]
  transactions: Transaction[]
  loading: boolean
  error?: string | null
  fetchAll: () => Promise<void>
  toggleUserActive: (id: string) => Promise<void>
  toggleProductActive: (id: string) => Promise<void>
}

export const useAdminStore = create<State>((set,get)=>({
  users: [],
  products: [],
  orders: [],
  transactions: [],
  loading: false,
  error: null,
  fetchAll: async ()=>{
    set({ loading: true })
    try {
      // simulate API delay
      await new Promise(r=>setTimeout(r,300))
      set({ users: mockUsers, products: mockProducts, orders: mockOrders, transactions: mockTransactions, loading:false })
    } catch (e:any){
      set({ error: e.message, loading:false })
    }
  },
  toggleUserActive: async (id)=>{
    set({ loading: true })
    await new Promise(r=>setTimeout(r,200))
    set(state=>({
      users: state.users.map(u=> u.id===id ? {...u, active: !u.active} : u),
      loading:false
    }))
  },
  toggleProductActive: async (id)=>{
    set({ loading: true })
    await new Promise(r=>setTimeout(r,200))
    set(state=>({
      products: state.products.map(p=> p.id===id ? {...p, active: !p.active} : p),
      loading:false
    }))
  }
}))
