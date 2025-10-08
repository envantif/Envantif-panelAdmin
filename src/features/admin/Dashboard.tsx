import React, { useEffect } from 'react'
import { useAdminStore } from '../../store/useAdminStore'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function Dashboard(){
  const { users, orders, fetchAll, loading } = useAdminStore()
  useEffect(()=>{ fetchAll() }, [])
  const totalUsers = users.length
  const totalOrders = orders.length
  const revenue = orders.reduce((s,o)=>s+(o.total||0),0)

  const data = [
    { month: 'Jan', sales: 400 },
    { month: 'Feb', sales: 300 },
    { month: 'Mar', sales: 500 },
    { month: 'Apr', sales: 200 },
    { month: 'May', sales: 278 },
    { month: 'Jun', sales: 189 },
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Tableau de bord</h2>
      {loading && <div>Chargement...</div>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Utilisateurs</div>
          <div className="text-xl font-bold" style={{color:'var(--color-primary)'}}>{totalUsers}</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Commandes</div>
          <div className="text-xl font-bold" style={{color:'var(--color-primary)'}}>{totalOrders}</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Chiffre d'affaires</div>
          <div className="text-xl font-bold" style={{color:'var(--color-primary)'}}>€{revenue.toFixed(2)}</div>
        </div>
      </div>

      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-semibold mb-2" style={{color:'var(--color-primary)'}}>Ventes par mois</h3>
        <div style={{width:'100%', height:250}}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
