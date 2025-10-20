import React from 'react'
import { Bell, Loader } from 'lucide-react'

const SoftAlert = ({children, tone='amber'})=>{
  const toneBg = tone === 'red' ? 'bg-red-50 border-red-200 text-red-800' : 'bg-amber-50 border-amber-200 text-amber-800'
  return (
    <div className={`${toneBg} border p-3 rounded-md flex items-start gap-3`}>
      <div className="pt-0.5"><Bell /></div>
      <div>{children}</div>
    </div>
  )
}

export default function Notifications(){
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      {/* {loading && <div><Loader color='var(--color-accent)' size={18}/>Chargement...</div>} */}
      <div className="grid grid-cols-1 gap-3">
        <SoftAlert> <strong>[Urgent]</strong> Commande ORD-20250915-0002 en attente depuis plusieurs jours.</SoftAlert>
        <SoftAlert tone="red"><strong>[Sécurité]</strong> Plusieurs tentatives de connexion suspectes pour bob@example.com</SoftAlert>
        <SoftAlert><strong>[Info]</strong> Nouvelle version de l'API disponible (v1.2)</SoftAlert>
      </div>
    </div>
  )
}
