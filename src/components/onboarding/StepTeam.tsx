'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function StepTeam({ leagueId, onSelect }: { leagueId: string; onSelect: (id: string) => void }) {
  const [teams, setTeams] = useState<any[]>([])

  useEffect(() => {
    const fetchTeams = async () => {
      const { data } = await supabase.from('teams').select('*').eq('league_id', leagueId)
      setTeams(data || [])
    }
    if (leagueId) fetchTeams()
  }, [leagueId])

  return (
    <div className="space-y-2">
      {teams.map((team) => (
        <button
          key={team.id}
          onClick={() => onSelect(team.id)}
          className="w-full p-3 rounded bg-white/10"
        >
          {team.name}
        </button>
      ))}
    </div>
  )
}
