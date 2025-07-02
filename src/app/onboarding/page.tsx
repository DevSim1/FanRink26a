'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import StepLeague from '@/components/onboarding/StepLeague'
import StepTeam from '@/components/onboarding/StepTeam'
import StepVibe from '@/components/onboarding/StepVibe'
import StepExperience from '@/components/onboarding/StepExperience'
import { supabase } from '@/lib/supabase'

export default function Onboarding() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [leagueId, setLeagueId] = useState('')
  const [teamId, setTeamId] = useState('')
  const [vibes, setVibes] = useState<string[]>([])
  const [experience, setExperience] = useState('')

  const steps = [
    <StepLeague key="league" onSelect={(id) => { setLeagueId(id); setStep(1) }} />,
    <StepTeam key="team" leagueId={leagueId} onSelect={(id) => { setTeamId(id); setStep(2) }} />,
    <StepVibe key="vibe" onSelect={(v) => setVibes(v)} onNext={() => setStep(3)} />,
    <StepExperience key="experience" onSelect={(level) => setExperience(level)} onFinish={handleSubmit} />
  ]

  async function handleSubmit() {
    const { data: user } = await supabase.auth.getUser()
    if (!user?.user?.id) return

    await supabase.from('profiles').update({
      league_id: leagueId,
      team_id: teamId,
      fan_vibe: vibes,
      experience_level: experience,
      xp: 100,
      onboarding_complete: true
    }).eq('id', user.user.id)

    await supabase.from('fan_badges').insert({
      profile_id: user.user.id,
      badge_type: 'starter',
      awarded_at: new Date()
    })

    router.push('/fanzone')
  }

  return <main className="p-6 text-white">{steps[step]}</main>
}
