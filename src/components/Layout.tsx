import React from 'react'
import Sidebar from './Sidebar'
import NavBar from './NavBar'

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <NavBar />
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
