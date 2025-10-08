import React, { useEffect } from 'react'
import { useAdminStore } from '../../store/useAdminStore'

export default function Orders(){
  const { orders, fetchAll, loading } = useAdminStore()
  useEffect(()=>{ fetchAll() }, [])
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestion des commandes</h2>
      {loading && <div>Chargement...</div>}
      <div className="bg-white rounded shadow overflow-x-auto" style={{color:'var(--color-primary)'}}>
        <table className="min-w-full">
          <thead className="text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Date</th>
              <th className="p-3">Montant</th>
              <th className="p-3">Statut</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o=>(
              <tr key={o.id} className="border-t">
                <td className="p-3">{o.id}</td>
                <td className="p-3">{o.date}</td>
                <td className="p-3">€{o.total.toFixed(2)}</td>
                <td className="p-3">{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
