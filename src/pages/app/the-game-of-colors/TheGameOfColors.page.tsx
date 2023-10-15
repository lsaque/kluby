import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, TextField, Typography } from '../../../components'
import { useColorGame } from '../../../hooks'
import { ColorTupleTypes, POSSIBLE_COLORS } from '../../../utils'

import * as S from './TheGameOfColors.page.styles'

const TheGameOdColorsSchema = z.object({
  guess: z
    .string()
    .length(4)
    .transform((value) => value.toUpperCase())
    .refine(
      (value) =>
        value.split('').every((letter) => POSSIBLE_COLORS.includes(letter)),
      {
        message: 'Invalid letter choice. Letters must be R, G, B, or Y',
      }
    )
    .transform((value) => value.split('') as ColorTupleTypes),
})

export type TheGameOdColorsTypes = z.infer<typeof TheGameOdColorsSchema>

export function TheGameOdColorsPage() {
  const {
    attempts,
    didYouLoose,
    didYouWin,
    handleGuess,
    hasGameFinished,
    handleGameReset,
    sequence,
    userGuess: oldUserGuess,
    tips,
  } = useColorGame()

  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TheGameOdColorsTypes>({
    defaultValues: {
      guess: [],
    },
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(TheGameOdColorsSchema),
  })

  const onSubmit: SubmitHandler<TheGameOdColorsTypes> = (data) => {
    try {
      handleGuess(data.guess)
    } catch (error) {
      console.error('TheGameOdColorsPage:: ', error)
    }
  }

  const watchGuess = `${watch('guess')}`.toUpperCase()
  const isGuessSameAsOldUserGuess = watchGuess === oldUserGuess.join('')

  const disableButton = hasGameFinished || isGuessSameAsOldUserGuess

  const handleReset = () => {
    reset()
    handleGameReset()
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.GameInfo>
        {isSubmitSuccessful && (
          <Typography $color='text.primary'>
            Tip:&nbsp;
            <Typography $fontWeight='fontWeightBold' as='span'>
              {tips}
            </Typography>
          </Typography>
        )}
        <Typography $color='text.secondary'>
          {isSubmitSuccessful ? 'Remaining attempts:' : 'Attempts:'}&nbsp;
          <Typography
            $fontWeight='fontWeightBold'
            as='span'
            $color={attempts <= 4 ? 'error' : 'text.secondary'}
          >
            {attempts}
          </Typography>
        </Typography>
      </S.GameInfo>
      <TextField
        label='Guess the color'
        required
        fullWidth
        error={!!errors.guess}
        helperText={errors.guess?.message}
        InputProps={{
          ...register('guess'),
          maxLength: 4,
          minLength: 4,
          disabled: hasGameFinished,
          style: {
            textTransform: 'uppercase',
          },
        }}
      />
      {hasGameFinished ? (
        <Button
          type='reset'
          $variant='outlined'
          $color='primary'
          onClick={handleReset}
          $fullWidth
        >
          Restart
        </Button>
      ) : (
        <Button
          disabled={disableButton}
          type='submit'
          $variant='contained'
          $color='primary'
          $fullWidth
        >
          Check
        </Button>
      )}
      {didYouWin && (
        <Typography $variant='h6' as='span'>
          You
          <Typography $fontWeight='fontWeightBold' as='span' $color='primary'>
            &nbsp;WON&nbsp;
          </Typography>
          the game! 🎉🎉
        </Typography>
      )}
      {didYouLoose && (
        <Typography $variant='h6' as='span'>
          Oh no, you
          <Typography $fontWeight='fontWeightBold' as='span'>
            &nbsp;LOST&nbsp;
          </Typography>
          the game! 😭😭 <br />
          The answer was
          <Typography $fontWeight='fontWeightBold' as='span' $color='primary'>
            &nbsp;{sequence}&nbsp;
          </Typography>
        </Typography>
      )}
    </S.Form>
  )
}
