import React, { useEffect, useState } from 'react'
import { useAdminStore } from '../../store/useAdminStore'
import { Loader } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Orders(){
  const { orders, fetchAll, loading } = useAdminStore()
  const [query, setQuery] = useState('')
  useEffect(()=>{ fetchAll() }, [])

const filtered = orders.filter(o=>
    o.status.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestion des commandes</h2>
      <div className="mb-4 flex gap-2 flex-col sm:flex-row">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Recherche par statut..." className="p-2 border rounded w-full sm:w-1/2 text-slate-900" />
      </div>
      {loading && <div><Loader color='var(--color-accent)' size={18}/>Chargement...</div>}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="text-left bg-gray-50">
            <tr>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Numéro</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Date</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Montant</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Statut</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Expédiée</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Livrée</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(o=>(
              <motion.tr key={o.order_id} className="border-t" whileHover={{ backgroundColor: 'lightblue' }}>
                <td className="p-3 text-slate-900">{o.order_number}</td>
                <td className="p-3 text-slate-900">{o.created_at ? new Date(o.created_at).toLocaleDateString() : '-'}</td>
                <td className="p-3 text-slate-900">€{o.total_amount.toFixed(2)}</td>
                <td className="p-3 text-slate-900">{o.status}</td>
                <td className="p-3 text-slate-900">{o.shipped_at ? new Date(o.shipped_at).toLocaleDateString() : '-'}</td>
                <td className="p-3 text-slate-900">{o.delivered_at ? new Date(o.delivered_at).toLocaleDateString() : '-'}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
