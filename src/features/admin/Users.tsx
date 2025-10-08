import React, { useEffect, useState } from 'react'
import { useAdminStore } from '../../store/useAdminStore'

export default function Users(){
  const { users, fetchAll, toggleUserActive, loading } = useAdminStore()
  const [query, setQuery] = useState('')
  useEffect(()=>{ fetchAll() }, [])

  const filtered = users.filter(u=>
    u.name.toLowerCase().includes(query.toLowerCase()) ||
    u.email.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestion des utilisateurs</h2>
      <div className="mb-4 flex gap-2">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Recherche..." className="p-2 border rounded w-full" />
      </div>
      {loading && <div>Chargement...</div>}
      <div className="bg-white rounded shadow overflow-x-auto" style={{color:'var(--color-primary)'}}>
        <table className="min-w-full">
          <thead className="text-left">
            <tr>
              <th className="p-3">Nom</th>
              <th className="p-3">Email</th>
              <th className="p-3">Rôle</th>
              <th className="p-3">Statut</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u=>(
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.role}</td>
                <td className="p-3">{u.active ? 'Actif' : 'Suspendu'}</td>
                <td className="p-3">
                  <button onClick={()=>toggleUserActive(u.id)} className="px-3 py-1 rounded bg-amber-400 text-white">
                    {u.active ? 'Suspendre' : 'Activer'}
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
