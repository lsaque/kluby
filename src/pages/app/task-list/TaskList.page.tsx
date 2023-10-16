import React, { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useTheme } from 'styled-components'
import { z } from 'zod'

import { Button, TaskCard, TextField, Typography } from '../../../components'
import { useMyAccount, useTasksFromDatabase } from '../../../hooks'
import { Task } from '../../../models'

import * as S from './TaskList.page.styles'

const TaskListSchema = z.object({
  name: z.string().min(1),
})

export type TaskListSchemaTypes = z.infer<typeof TaskListSchema>

export function TaskListPage() {
  const theme = useTheme()
  const me = useMyAccount()
  const { myTasks, addTask, updateTask, deleteTask } = useTasksFromDatabase()

  const [globalError, setGlobalError] = useState<string | null>(null)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskListSchemaTypes>({ resolver: zodResolver(TaskListSchema) })

  const onSubmit: SubmitHandler<TaskListSchemaTypes> = (data) => {
    try {
      const task = new Task(me.id, {
        name: data.name,
      })
      addTask(task)
      reset()
    } catch (error) {
      if (error instanceof Error) setGlobalError(error.message)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      {globalError && <Typography $color='error'>{globalError}</Typography>}
      <S.Heading>
        <TextField
          label='Task title'
          required
          fullWidth
          error={!!errors.name}
          helperText={errors.name?.message}
          InputProps={{ ...register('name') }}
        />

        <Button
          type='submit'
          $fullWidth
          $variant='contained'
          $color='primary'
          style={{ maxHeight: '3.5rem' }}
        >
          Add task
        </Button>
      </S.Heading>

      <ResponsiveMasonry
        columnsCountBreakPoints={{
          [theme.breakpoints.xs]: 1,
          [theme.breakpoints.sm]: 2,
        }}
      >
        <Masonry gutter='1.6rem'>
          {myTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onTrashClick={() => deleteTask(task.id)}
              onSwitchChange={(isCompleted) => {
                updateTask(task.id, { isCompleted })
              }}
              onNameChange={(name) => {
                updateTask(task.id, { name })
              }}
              onDescriptionChange={(description) => {
                updateTask(task.id, { description })
              }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </S.Form>
  )
}
