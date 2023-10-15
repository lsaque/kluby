import React, { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button, TextField, Typography } from '../../../components'
import { useAuth } from '../../../hooks'
import { ROUTES } from '../../../router'

import * as S from './SignIn.page.styles'

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type SignInSchemaTypes = z.infer<typeof SignInSchema>

export function SignInPage() {
  const { signIn } = useAuth()

  const [globalError, setGlobalError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaTypes>({
    mode: 'onTouched',
    criteriaMode: 'all',
    resolver: zodResolver(SignInSchema),
  })

  const onSubmit: SubmitHandler<SignInSchemaTypes> = (data) => {
    try {
      signIn(data)
    } catch (error) {
      if (error instanceof Error) setGlobalError(error.message)
    }
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Header>
          <Typography as='h1' $variant='h4' $fontWeight='fontWeightBold'>
            Sign In
          </Typography>
          <Typography
            $variant='body1'
            $color='text.secondary'
            $textAlign='center'
          >
            Let&apos;s get started with your 30 days free trial
          </Typography>
        </S.Header>
        <S.Fields>
          <TextField
            label='Email'
            required
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{ ...register('email') }}
          />
          <TextField
            label='Password'
            required
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{ ...register('password'), type: 'password' }}
          />
          <Typography
            as={Link}
            to={'#'}
            $variant='body2'
            $color='text.secondary'
            $textAlign='right'
          >
            Forgotten Password?
          </Typography>
        </S.Fields>

        {globalError && (
          <S.ErrorContainer>
            <Typography $color='error'>{globalError}</Typography>
          </S.ErrorContainer>
        )}

        <Button type='submit' $fullWidth $variant='contained' $color='primary'>
          Sign In
        </Button>
      </S.Form>
      <Typography
        as={Link}
        to={ROUTES.AUTH.SIGN_UP}
        $color='text.secondary'
        $variant='body1'
      >
        Don&apos;t have an account?
        <Typography
          as='span'
          $color='primary'
          $fontWeight='fontWeightSemiBold'
          $variant='body1'
        >
          &nbsp;Sign Up
        </Typography>
      </Typography>
    </S.Container>
  )
}
