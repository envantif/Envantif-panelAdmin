import React from 'react'
import { Sun, Moon } from 'lucide-react'

export default function NavBar(){
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white/60 backdrop-blur sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold" style={{color:'var(--color-primary)'}}>VAMAYO Admin</h1>
        <span className="text-sm" style={{color:'var(--color-primary)'}} >Tableau de bord</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded hover:bg-gray-100"><Sun size={18} /></button>
        <button className="p-2 rounded hover:bg-gray-100"><Moon size={18} /></button>
        <div className="px-3 py-1 rounded bg-gray-100 text-sm" style={{color:'var(--color-primary)'}}>Admin</div>
      </div>
    </header>
  )
}
