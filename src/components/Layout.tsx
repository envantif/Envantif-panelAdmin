import React from 'react'
import Sidebar from './Sidebar'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <NavBar />
          <main className="p-4 sm:p-6 flex-1 overflow-x-hidden">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
