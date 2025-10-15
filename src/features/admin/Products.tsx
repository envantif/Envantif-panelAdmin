import React, { useEffect, useState } from 'react'
import { useAdminStore } from '../../store/useAdminStore'
import { Search, Loader } from 'lucide-react'

export default function Products(){
  const { products, fetchAll, toggleProductActive, loading } = useAdminStore()
  const [query, setQuery] = useState('')
  useEffect(()=>{ fetchAll() }, [])

  const filtered = products.filter(p=> p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestion des produits/services</h2>
      <div className="mb-4 flex gap-2">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Recherche..." {...<Search color='var(--color-accent)' size={18}/>} className="p-2 border rounded w-full" /> 
      </div>
      {loading && <div> <Loader color='var(--color-accent)' size={18}/>Chargement...</div>}
      <div className="bg-white rounded shadow overflow-x-auto" style={{color:'var(--color-primary)'}}>
        <table className="min-w-full">
          <thead className="text-left">
            <tr>
              <th className="p-3">Titre</th>
              <th className="p-3">Prix</th>
              <th className="p-3">Catégorie</th>
              <th className="p-3">Statut</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p=>(
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.title}</td>
                <td className="p-3">€{p.price.toFixed(2)}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">{p.active ? 'Actif' : 'Désactivé'}</td>
                <td className="p-3">
                  <button onClick={()=>toggleProductActive(p.id)} className="px-3 py-1 rounded bg-amber-400 text-white">
                    {p.active ? 'Désactiver' : 'Activer'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
