'use client'

import { useState } from 'react'

export default function StepVibe({ onSelect, onNext }: { onSelect: (v: string[]) => void; onNext: () => void }) {
  const vibes = ['Chill', 'Hype', 'Analytical', 'Casual']
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (v: string) => {
    setSelected(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v])
  }

  return (
    <div className="space-y-2">
      {vibes.map(v => (
        <button
          key={v}
          onClick={() => toggle(v)}
          className={`w-full p-3 rounded ${selected.includes(v) ? 'bg-blue-600' : 'bg-white/10'}`}
        >
          {v}
        </button>
      ))}
      <button onClick={() => { onSelect(selected); onNext() }} className="mt-4 bg-blue-600 px-4 py-2 rounded">
        Next
      </button>
    </div>
  )
}
