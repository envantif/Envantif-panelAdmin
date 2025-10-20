import React, { useEffect, useState } from 'react'
import { useAdminStore } from '../../store/useAdminStore'
import { motion } from 'framer-motion'
import { Loader } from 'lucide-react'

export default function Users(){
  const { users, fetchAll, toggleUserActive, loading } = useAdminStore()
  const [query, setQuery] = useState('')
  useEffect(()=>{ fetchAll() }, [])

  const filtered = users.filter(u=>
    u.email.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestion des utilisateurs</h2>
      <div className="mb-4 flex gap-2 flex-col sm:flex-row">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Recherche par email..." className="p-2 border rounded w-full sm:w-1/2" />
      </div>
      {loading && <div><Loader color='var(--color-accent)' size={18}/>Chargement...</div>}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="text-left bg-gray-50">
            <tr>
              <th className="p-3" style={{color:'var(--color-primary)'}} >ID</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Email</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Rôle</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Actif</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Vérifié</th>
              <th className="p-3 hidden sm:table-cell" style={{color:'var(--color-primary)'}} >Dernière connexion</th>
              <th className="p-3" style={{color:'var(--color-primary)'}} >Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u=>(
              <motion.tr key={u.user_id} className="border-t" whileHover={{ backgroundColor: 'lightblue' }}>
                <td className="p-3 text-slate-900">{u.user_id}</td>
                <td className="p-3 text-slate-900">{u.email}</td>
                <td className="p-3 text-slate-900">{u.role}</td>
                <td className="p-3 text-slate-900">{u.is_active ? 'Oui' : 'Non'}</td>
                <td className="p-3 text-slate-900">{u.is_email_verified ? 'Oui' : 'Non'}</td>
                <td className="p-3 text-slate-900 hidden sm:table-cell">{u.last_login ? new Date(u.last_login).toLocaleString() : '-'}</td>
                <td className="p-3 text-slate-900">
                  <button onClick={()=>toggleUserActive(u.user_id)} className="px-3 py-1 rounded bg-amber-400 text-slate-900">
                    {u.is_active ? 'Suspendre' : 'Activer'}
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
