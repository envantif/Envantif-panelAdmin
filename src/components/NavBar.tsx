import React from 'react'
import { Sun, Moon, LogOut } from 'lucide-react'

export default function NavBar(){
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white/60 backdrop-blur sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold" style={{color:'var(--color-primary)'}}>ZAYITI Admin</h1>
        <span className="text-sm" style={{color:'var(--color-primary)'}} >Tableau de bord</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded hover:bg-amber-400" style={{color:'var(--color-primary)'}}><Sun size={18} /></button>
        <button className="p-2 rounded hover:bg-amber-400" style={{color:'var(--color-primary)'}}><Moon size={18} /></button>
        <div className="px-3 py-1 rounded bg-amber-400 text-sm" style={{color:'var(--color-primary)'}}><LogOut size={18} /></div>
      </div>
    </header>
  )
}
