import React, { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, TextField, Typography } from '../../../components'
import { isPrimeNumber } from '../../../utils'

import * as S from './PrimeNumberVerification.page.styles'

const PrimeNumberVerification = z.object({
  primeNumber: z
    .number()
    .min(0)
    .refine((val) => val >= 0),
})

export type PrimeNumberVerificationTypes = z.infer<
  typeof PrimeNumberVerification
>

export function PrimeNumberVerificationPage() {
  const [result, setResult] = useState({
    value: 0,
    isPrime: false,
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<PrimeNumberVerificationTypes>({
    resolver: zodResolver(PrimeNumberVerification),
  })

  const onSubmit: SubmitHandler<PrimeNumberVerificationTypes> = (data) => {
    try {
      setResult({
        isPrime: isPrimeNumber(data.primeNumber),
        value: data.primeNumber,
      })
    } catch (error) {
      console.error('PrimeNumberVerificationPage:: ', error)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label='This number is a prime number?'
        required
        fullWidth
        error={!!errors.primeNumber}
        helperText={errors.primeNumber?.message}
        InputProps={{
          ...register('primeNumber', {
            valueAsNumber: true,
          }),
          type: 'number',
        }}
      />
      {isSubmitSuccessful && (
        <Typography $variant='body1'>
          <Typography $fontWeight='fontWeightBold' $color='primary' as='b'>
            {result.value}&nbsp;
          </Typography>
          is {result.isPrime ? 'a' : 'not a'} prime number
        </Typography>
      )}
      <Button type='submit' $variant='contained' $color='primary' $fullWidth>
        Verify
      </Button>
    </S.Form>
  )
}
