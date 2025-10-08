import React from 'react'
import { Home, Users, Box, ShoppingCart, CreditCard, BarChart2, Bell } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: <Home size={16}/> },
  { to: '/users', label: 'Utilisateurs', icon: <Users size={16}/> },
  { to: '/products', label: 'Produits', icon: <Box size={16}/> },
  { to: '/orders', label: 'Commandes', icon: <ShoppingCart size={16}/> },
  { to: '/payments', label: 'Paiements', icon: <CreditCard size={16}/> },
  { to: '/stats', label: 'Statistiques', icon: <BarChart2 size={16}/> },
  { to: '/notifications', label: 'Notifications', icon: <Bell size={16}/> },
]

export default function Sidebar(){
  const loc = useLocation()
  return (
    <aside className="w-64 min-h-screen border-r bg-white">
      <div className="p-4">
        <div className="text-xl font-bold" style={{color:'var(--color-primary)'}}>VAMAYO</div>
        <div className="text-xs text-gray-500">Administration</div>
      </div>
      <nav className="p-2">
        {items.map(i=>(
          <Link key={i.to} to={i.to} className={
            `flex items-center gap-3 p-3 rounded hover:bg-gray-100 ${loc.pathname===i.to ? 'bg-gray-100 font-semibold' : 'text-gray-700'}`
          }>
            {i.icon}
            <span>{i.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
