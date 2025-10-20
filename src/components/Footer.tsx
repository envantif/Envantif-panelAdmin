import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white/70 border-t mt-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-800">
        <div className="mb-2 sm:mb-0 text-center sm:text-left">
          © 2025 <span style={{ color: 'var(--color-primary)' }}>ZAYITI</span> — Administration
        </div>
        <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
          <a className="hover:text-amber-400 transition cursor-pointer">Aide</a>
          <a className="hover:text-amber-400 transition cursor-pointer">Confidentialité</a>
          <a className="hover:text-amber-400 transition cursor-pointer">Conditions</a>
        </div>
      </div>
    </footer>
  )
}
