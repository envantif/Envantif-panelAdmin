import React, { useEffect, useState } from 'react'
import { Home, Users, Box, ShoppingCart, CreditCard, BarChart2, Bell, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: <Home size={16}/> },
  { to: '/users', label: 'Utilisateurs', icon: <Users size={16}/> },
  { to: '/products', label: 'Produits', icon: <Box size={16}/> },
  { to: '/orders', label: 'Commandes', icon: <ShoppingCart size={16}/> },
  { to: '/payments', label: 'Paiements', icon: <CreditCard size={16}/> },
  { to: '/stats', label: 'Statistiques', icon: <BarChart2 size={16}/> },
  { to: '/notifications', label: 'Notifications', icon: <Bell size={16}/> },
]

export default function Sidebar() {
  const loc = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const btn = document.querySelector('[data-menu-button]')
    const handler = () => setOpen(true)
    btn?.addEventListener('click', handler)
    return () => btn?.removeEventListener('click', handler)
  }, [])

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col w-60 lg:w-64 min-h-screen border-r bg-white p-4">
        <div className="mb-6">
          <div className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>ZAYITI</div>
          <div className="text-xs text-slate-900">Administration</div>
        </div>
        <nav className="flex-1 space-y-1">
          {items.map(i => {
            const active = loc.pathname === i.to
            return (
              <Link
                key={i.to}
                to={i.to}
                className={`flex items-center gap-3 p-3 rounded-lg transition ${
                  active ? 'bg-amber-400 font-semibold' : 'hover:bg-amber-300/50'
                }`}
                style={{ color: active ? '#234C6A' : '#1e293b' }}
              >
                <motion.span whileHover={{ x: 6 }} className="flex-shrink-0">{i.icon}</motion.span>
                <span>{i.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="fixed top-0 left-0 z-50 h-full w-72 bg-white p-4 shadow-lg md:hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>ZAYITI</div>
              <button onClick={() => setOpen(false)} className="p-2 rounded hover:bg-amber-300/40" style={{ color: 'var(--color-primary)' }}>
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {items.map(i => {
                const active = loc.pathname === i.to
                return (
                  <Link
                    key={i.to}
                    to={i.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      active ? 'bg-amber-400 font-semibold' : 'hover:bg-amber-300/50'
                    }`}
                    style={{ color: active ? '#234C6A' : '#1e293b' }}
                  >
                    {i.icon}
                    <span>{i.label}</span>
                  </Link>
                )
              })}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
