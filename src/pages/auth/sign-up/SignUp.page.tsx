import React, { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button, TextField, Typography } from '../../../components'
import { useAuth, useUsersFromDatabase } from '../../../hooks'
import { User } from '../../../models'
import { ROUTES } from '../../../router'
import * as S from '../sign-in/SignIn.page.styles'

const SignUpSchema = z
  .object({
    fullName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    passwordConfirmation: z.string().min(6),
  })
  .refine((values) => values.password === values.passwordConfirmation, {
    message: 'The passwords did not match',
    path: ['passwordConfirmation'],
  })

export type SignUpSchemaTypes = z.infer<typeof SignUpSchema>

export function SignUpPage() {
  const { setToken } = useAuth()
  const { addUser } = useUsersFromDatabase()
  const [globalError, setGlobalError] = useState<string | null>(null)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaTypes>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(SignUpSchema),
  })

  const onSubmit: SubmitHandler<SignUpSchemaTypes> = (data) => {
    try {
      const user = new User({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      })
      addUser(user)
      setToken(user.token)
      reset()
    } catch (error) {
      if (error instanceof Error) setGlobalError(error.message)
    }
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Header>
          <Typography as='h1' $variant='h4' $fontWeight='fontWeightBold'>
            Sign Up
          </Typography>
          <Typography
            $variant='body1'
            $color='text.secondary'
            $textAlign='center'
          >
            Sign up today to start your journey towards exciting features
          </Typography>
        </S.Header>
        <S.Fields>
          <TextField
            label='Full name'
            required
            fullWidth
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            InputProps={{ ...register('fullName') }}
          />
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
            InputProps={{
              ...register('password'),
              type: 'password',
            }}
          />
          <TextField
            label='Password confirmation'
            required
            fullWidth
            error={!!errors.passwordConfirmation}
            helperText={errors.passwordConfirmation?.message}
            InputProps={{
              ...register('passwordConfirmation'),
              type: 'password',
            }}
          />
        </S.Fields>
        {globalError && (
          <S.ErrorContainer>
            <Typography $color='error'>{globalError}</Typography>
          </S.ErrorContainer>
        )}
        <Button type='submit' $fullWidth $variant='contained' $color='primary'>
          Sign Up
        </Button>
      </S.Form>

      <Typography
        as={Link}
        to={ROUTES.AUTH.SIGN_IN}
        $color='text.secondary'
        $variant='body1'
      >
        Already have an account?
        <Typography
          as='span'
          $color='primary'
          $fontWeight='fontWeightSemiBold'
          $variant='body1'
        >
          &nbsp;Sign In
        </Typography>
      </Typography>
    </S.Container>
  )
}
