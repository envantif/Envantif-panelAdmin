import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './features/admin/Dashboard'
import Users from './features/admin/Users'
import Products from './features/admin/Products'
import Orders from './features/admin/Orders'
import Payments from './features/admin/Payments'
import Stats from './features/admin/Stats'
import Notifications from './features/admin/Notifications'

export default function App() {
  
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' replace />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/notifications' element={<Notifications />} />
      </Routes>
    </Layout>
  )
}
