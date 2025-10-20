import React, { useEffect, useState } from 'react'
import { useAdminStore } from '../../store/useAdminStore'
import { motion } from 'framer-motion'
import { Loader } from 'lucide-react'

export default function Products(){
  const { products, fetchAll, toggleProductActive, loading } = useAdminStore()
  const [query, setQuery] = useState('')
  useEffect(()=>{ fetchAll() }, [])

  const filtered = products.filter(p=> p.title.toLowerCase().includes(query.toLowerCase()) || (p.brand||'').toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestion des produits/services</h2>
      <div className="mb-4 flex gap-2 flex-col sm:flex-row">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Recherche par titre ou marque..." className="p-2 border rounded w-full sm:w-1/2 text-slate-900" />
      </div>
      {loading && <div><Loader color='var(--color-accent)' size={18}/>Chargement...</div>}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="text-left bg-gray-50">
            <tr>
              <th className="p-3" style={{color:'var(--color-primary)'}} >ID</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Titre</th>
              <th className="p-3 hidden sm:table-cell" style={{color:'var(--color-primary)'}} >Marque</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Prix</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Stock</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Actif</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p=>(
              <motion.tr key={p.product_id} className="border-t" whileHover={{ backgroundColor: 'lightblue' }}>
                <td className="p-3 text-slate-900 ">{p.product_id}</td>
                <td className="p-3 text-slate-900 ">{p.title}</td>
                <td className="p-3 text-slate-900  hidden sm:table-cell">{p.brand}</td>
                <td className="p-3 text-slate-900 ">€{p.price.toFixed(2)}</td>
                <td className="p-3 text-slate-900 ">{p.stock_quantity ?? 0}</td>
                <td className="p-3 text-slate-900 ">{p.is_active ? 'Oui' : 'Non'}</td>
                <td className="p-3 text-slate-900 ">
                  <button onClick={()=>toggleProductActive(p.product_id)} className="px-3 py-1 rounded bg-amber-400 text-slate-900">
                    {p.is_active ? 'Désactiver' : 'Activer'}
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
