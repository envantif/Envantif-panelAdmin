import React from 'react'

export default function Stats(){
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Statistiques avancées</h2>
      <div className="bg-white p-4 rounded shadow">
        <p style={{color:'var(--color-primary)'}}>Graphiques interactifs et options d'export (CSV/Excel) à implémenter</p>
        <ul className="list-disc ml-6 mt-2">
          <li style={{color:'var(--color-primary)'}}>Export CSV : utilitaire dans <code>src/utils</code></li>
          <li style={{color:'var(--color-primary)'}}>Graphiques : utiliser Recharts (déjà en dépendances)</li>
        </ul>
      </div>
    </div>
  )
}
