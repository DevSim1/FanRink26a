'use client'

import { useState } from 'react'

export default function StepExperience({ onSelect, onFinish }: { onSelect: (level: string) => void; onFinish: () => void }) {
  const levels = ['Beginner', 'Intermediate', 'Expert']
  const [selected, setSelected] = useState('')

  return (
    <div className="space-y-2">
      {levels.map(level => (
        <button
          key={level}
          onClick={() => setSelected(level)}
          className={`w-full p-3 rounded ${selected === level ? 'bg-blue-600' : 'bg-white/10'}`}
        >
          {level}
        </button>
      ))}
      <button disabled={!selected} onClick={() => { onSelect(selected); onFinish() }} className="mt-4 bg-blue-600 px-4 py-2 rounded disabled:opacity-50">
        Finish
      </button>
    </div>
  )
}
