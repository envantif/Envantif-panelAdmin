import React, { useEffect, useState } from 'react'
import { useAdminStore } from '../../store/useAdminStore'
import { Loader } from 'lucide-react'
import { currency } from './Dashboard'
import { motion } from 'framer-motion'

export default function Payments(){
  const { payments, fetchAll, loading } = useAdminStore()
  const [query, setQuery] = useState('')
  useEffect(()=>{ fetchAll() }, [])
  
    const filtered = payments.filter(t=> t.payment_status.toLowerCase().includes(query.toLowerCase()) || (t.payment_method||'').toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestion des paiements</h2>
      <div className="mb-4 flex gap-2 flex-col sm:flex-row">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Recherche par statut ou par methode de paiement..." className="p-2 border rounded w-full sm:w-1/2 text-slate-900" />
      </div>
      {loading && <div><Loader color='var(--color-accent)' size={18}/>Chargement...</div>}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="text-left bg-gray-50">
            <tr>
              <th className="p-3" style={{color:'var(--color-primary)'}} >ID</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Commande</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Montant</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Moyen</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Statut</th>
              <th className="p-3 hidden sm:table-cell" style={{color:'var(--color-primary)'}} >ID_Transaction</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(t=>(
              <motion.tr key={t.payment_id} className="border-t" whileHover={{ backgroundColor: 'lightblue' }}>
                <td className="p-3 text-slate-900">{t.payment_id}</td>
                <td className="p-3 text-slate-900">{t.order_id}</td>
                <td className="p-3 text-slate-900">{currency}{t.amount.toFixed(2)}</td>
                <td className="p-3 text-slate-900">{t.payment_method}</td>
                <td className="p-3 text-slate-900">{t.payment_status}</td>
                <td className="p-3 text-slate-900 hidden sm:table-cell">{t.transaction_id}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
