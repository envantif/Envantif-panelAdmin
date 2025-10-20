import React from 'react'
import { Sun, Moon, Menu, LogOut } from 'lucide-react'

export default function NavBar() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-white/70 backdrop-blur sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded-lg hover:bg-amber-400/30 transition"
          style={{ color: 'var(--color-primary)' }}
          aria-label="Open menu"
          data-menu-button
        >
          <Menu size={22} />
        </button>
        <h1 className="text-lg sm:text-xl font-semibold truncate" style={{ color: 'var(--color-primary)' }}>
          ZAYITI Admin
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button className="p-2 rounded-lg hover:bg-amber-400/30 transition" style={{ color: 'var(--color-primary)' }}>
          <Sun size={18} />
        </button>
        <button className="p-2 rounded-lg hover:bg-amber-400/30 transition" style={{ color: 'var(--color-primary)' }}>
          <Moon size={18} />
        </button>
        <button
          className="px-3 py-1 rounded-lg bg-slate-200 hover:bg-amber-400/40 text-sm font-medium transition"
          style={{ color: 'var(--color-primary)' }}
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  )
}
