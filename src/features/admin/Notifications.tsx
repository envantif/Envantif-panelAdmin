import React from 'react'

export default function Notifications(){
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      <div className="bg-white p-4 rounded shadow">
        <p style={{color:'var(--color-primary)'}}>Système d'alerte (activités suspectes, commandes urgentes) : maquette prête. Exemple :</p>
        <ul className="mt-2">
          <li className="p-2 border rounded mb-2" style={{color:'var(--color-primary)'}}>[Urgent] Commande o2 en attente depuis 5 jours</li>
          <li className="p-2 border rounded" style={{color:'var(--color-primary)'}}>[Sécurité] Plusieurs tentatives de connexion suspectes pour bob@example.com</li>
        </ul>
      </div>
    </div>
  )
}
