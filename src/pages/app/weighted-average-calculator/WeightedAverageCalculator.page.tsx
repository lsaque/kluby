import React, { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg'
import { ReactComponent as TrashIcon } from '../../../assets/icons/trash.svg'
import { Button, TextField, Typography } from '../../../components'
import { getWeightedAverage } from '../../../utils'

import * as S from './WeightedAverageCalculator.page.styles'

const GradeSchema = z.object({
  value: z
    .number()
    .min(0)
    .refine((val) => val >= 0),
  weight: z
    .number()
    .min(0)
    .max(1)
    .refine((val) => val >= 0),
})

const WeightedAverageCalculator = z.object({
  grades: z.array(GradeSchema),
})

export type WeightedAverageCalculatorTypes = z.infer<
  typeof WeightedAverageCalculator
>

export function WeightedAverageCalculatorPage() {
  const [result, setResult] = useState(0)

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<WeightedAverageCalculatorTypes>({
    defaultValues: {
      grades: [
        {
          value: 0,
          weight: 0,
        },
      ],
    },
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(WeightedAverageCalculator),
  })

  const { fields, remove, append } = useFieldArray({
    name: 'grades',
    control,
  })

  const onSubmit: SubmitHandler<WeightedAverageCalculatorTypes> = (data) => {
    try {
      const weightedAverage = getWeightedAverage(data.grades)
      setResult(weightedAverage)
    } catch (error) {
      console.error('WeightedAverageCalculatorPage:: ', error)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Heading>
        <Typography $variant='h4' $fontWeight='fontWeightBold' as='p'>
          Grades
        </Typography>
        <Button
          type='button'
          $variant='outlined'
          $color='info'
          onClick={() => append({ value: 0, weight: 0 })}
        >
          <AddIcon />
          Add grade
        </Button>
      </S.Heading>
      <S.Fields>
        {fields.map((field, index) => (
          <S.FieldsRow key={field.id}>
            <TextField
              label={`Value ${index + 1}`}
              required
              fullWidth
              error={!!errors.grades?.[index]?.value}
              helperText={errors.grades?.[index]?.value?.message}
              InputProps={{
                ...register(`grades.${index}.value`, {
                  valueAsNumber: true,
                }),
                type: 'number',
                min: 0,
              }}
            />
            <TextField
              label={`Weight ${index + 1}`}
              required
              fullWidth
              error={!!errors.grades?.[index]?.weight}
              helperText={errors.grades?.[index]?.weight?.message}
              InputProps={{
                ...register(`grades.${index}.weight`, {
                  valueAsNumber: true,
                }),
                type: 'number',
                min: 0,
                step: 'any',
              }}
            />
            <Button
              type='button'
              onClick={() => remove(index)}
              $color='error'
              $variant='outlined'
              style={{ padding: '1rem' }}
            >
              <TrashIcon />
            </Button>
          </S.FieldsRow>
        ))}
      </S.Fields>

      {isSubmitSuccessful && (
        <Typography $variant='body1'>
          <Typography $fontWeight='fontWeightBold' $color='primary' as='b'>
            {Number.isNaN(result) ? 0 : result}&nbsp;
          </Typography>
          is the weighted average
        </Typography>
      )}

      <Button type='submit' $variant='contained' $color='primary' $fullWidth>
        Calculate
      </Button>
    </S.Form>
  )
}
