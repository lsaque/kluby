import React, { forwardRef } from 'react'

import styled, { css } from 'styled-components'

import { Typography } from './Typography'

type FormControlTypes = {
  $error?: boolean
  $fullWidth?: boolean
}

const FormControl = styled.div<FormControlTypes>`
  --form-input-border-color: ${({ theme }) => theme.palette.divider};
  --form-input-outline-color: transparent;
  --form-label-color: ${({ theme }) => theme.palette.text.primary};
  --form-label-asterisk-color: ${({ theme }) => theme.palette.primary.main};
  --form-helper-text-color: ${({ theme }) => theme.palette.grey[400]};

  --accent-color: ${({ theme }) => theme.palette.primary.main};
  --error-color: ${({ theme }) => theme.palette.error.main};

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  &:focus-within {
    --form-input-border-color: var(--accent-color);
    --form-input-outline-color: var(--accent-color);
    --form-label-color: var(--accent-color);
  }

  ${({ $error }) =>
    $error &&
    css`
      --form-input-border-color: var(--error-color);
      --form-input-outline-color: var(--error-color);
      --form-label-color: var(--error-color);
      --form-label-asterisk-color: var(--error-color);
      --form-helper-text-color: var(--error-color);
    `}

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`

const FormHeader = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: space-between;
  align-items: center;
`

const FormLabel = styled(Typography).attrs({
  as: 'label',
})`
  display: flex;
  gap: 0.2rem;
  color: var(--form-label-color);

  span {
    color: var(--form-label-asterisk-color);
    font-size: 2rem;
  }
`

const FormHelperText = styled(Typography).attrs({
  as: 'span',
  $variant: 'body2',
})`
  color: var(--form-helper-text-color);
`

const FormInput = styled.input`
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.8rem;
  border: 0.1rem solid var(--form-input-border-color);
  outline: 0.1rem solid var(--form-input-outline-color);
  background-color: ${({ theme }) => theme.palette.background.paper};
  font-size: 1.4rem;

  color: ${({ theme }) => theme.palette.text.primary};

  ::placeholder,
  ::-webkit-input-placeholder,
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.palette.grey[300]};
  }
`

interface TextFieldProps {
  error?: FormControlTypes['$error']
  fullWidth?: FormControlTypes['$fullWidth']
  helperText?: string
  label?: string
  required?: boolean
  InputProps?: React.InputHTMLAttributes<HTMLInputElement>
  LabelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { LabelProps, helperText, label, required, error, fullWidth, InputProps },
    ref
  ) => {
    return (
      <FormControl $error={error} $fullWidth={fullWidth}>
        <FormHeader>
          {label && (
            <FormLabel {...LabelProps} htmlFor={InputProps?.name}>
              {label}
              {required && (
                <Typography $variant='body1' $color='primary' as='span'>
                  *
                </Typography>
              )}
            </FormLabel>
          )}
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormHeader>
        <FormInput
          ref={ref}
          id={InputProps?.name}
          aria-required={required}
          {...InputProps}
        />
      </FormControl>
    )
  }
)

TextField.displayName = 'TextField'
