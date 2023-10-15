import React from 'react'

import { ProgramCard } from '../../components'

import { useAppLayoutContext } from './App.layout'
import * as S from './App.styles'

export function AppPage() {
  const programs = useAppLayoutContext()

  return (
    <S.AppPageLayout>
      <S.Grid>
        {programs.list.map((program) => (
          <ProgramCard
            to={program.getPath()}
            key={program.id}
            icon={program.icon}
            title={program.title}
          />
        ))}
      </S.Grid>
    </S.AppPageLayout>
  )
}
