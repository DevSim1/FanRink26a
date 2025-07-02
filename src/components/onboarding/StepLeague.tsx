'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function StepLeague({ onSelect }: { onSelect: (id: string) => void }) {
  const [leagues, setLeagues] = useState<any[]>([])

  useEffect(() => {
    const fetchLeagues = async () => {
      const { data } = await supabase.from('leagues').select('*')
      setLeagues(data || [])
    }
    fetchLeagues()
  }, [])

  return (
    <div className="space-y-2">
      {leagues.map((league) => (
        <button
          key={league.id}
          onClick={() => onSelect(league.id)}
          className="w-full p-3 rounded bg-white/10"
        >
          {league.name}
        </button>
      ))}
    </div>
  )
}
