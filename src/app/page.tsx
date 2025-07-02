'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [teams, setTeams] = useState<any[]>([])

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from('teams').select('*').limit(5)
      setTeams(data ?? [])
    }
    load()
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">🏒 FanRink Teams</h1>
      <ul className="space-y-2">
        {teams.map(team => (
          <li key={team.id} className="text-white">
            {team.name}
          </li>
        ))}
      </ul>
    </main>
  )
}
