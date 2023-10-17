/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'

import styled, { css } from 'styled-components'

import { ReactComponent as TaskCompletedIcon } from '../assets/icons/task-completed.svg'
import { ReactComponent as TaskIcon } from '../assets/icons/task.svg'
import { ReactComponent as TrashIcon } from '../assets/icons/trash.svg'
import { useDebounce } from '../hooks'
import { Task } from '../models'
import { deselectAllTextContent, selectAllTextContent } from '../utils'

import { Button } from './Button'
import { Switch } from './Switch'

type CustomPropTypes = {
  $isCompleted?: boolean
  $value?: string
}

const Container = styled.div<CustomPropTypes>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;

  height: max-content;

  padding: 1.6rem 2.4rem;
  border-radius: 0.8rem;

  border: 0.1rem solid ${({ theme }) => theme.palette.divider};

  transition: all 0.3s;

  ${({ $isCompleted }) =>
    $isCompleted &&
    css`
      background: ${({ theme }) => theme.palette.primary.main}10;
    `}

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 0.8rem 2.4rem ${({ theme }) => theme.palette.common.black}10;

    .delete-button {
      opacity: 1;
    }
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;

  margin: 0 -0.4rem;
`

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .delete-button {
    transition: all 0.8 ease-out;
    opacity: 0;

    &:focus {
      opacity: 1;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`

const BaseInput = styled.div.attrs<CustomPropTypes>({
  role: 'textbox',
  contentEditable: true,
  'aria-multiline': true,
  spellCheck: false,
  suppressContentEditableWarning: true,
  autoFocus: false,
  onFocus: selectAllTextContent,
  onBlur: deselectAllTextContent,
})`
  word-break: break-word;
  padding: 0.8rem;
  margin: 0 -0.8rem;

  border: 0.1rem solid transparent;
  outline: 0.1rem solid transparent;

  border-radius: 0.8rem;

  transition: all 0.3s;

  cursor: text;

  ${({ $isCompleted }) =>
    $isCompleted &&
    css`
      text-decoration: line-through;
    `}

  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.main};
    outline-color: ${({ theme }) => theme.palette.primary.main};
  }
`

const TitleInput = styled(BaseInput)`
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};

  &:hover {
    border-style: dashed;
    border-color: ${({ theme }) => theme.palette.primary.main};
    background-color: ${({ theme }) => theme.palette.primary.main}10;
  }
`

const DescriptionInput = styled(BaseInput)`
  color: ${({ theme }) => theme.palette.text.secondary}80;
  background-color: ${({ theme }) => theme.palette.common.black}09;

  resize: none;
  overflow: auto;

  margin-top: -0.4rem;

  &:hover {
    border-style: dashed;
    border-color: ${({ theme }) => theme.palette.primary.main};
    background-color: ${({ theme }) => theme.palette.primary.main}10;
  }
`

interface TaskCardProps {
  task: Task
  onSwitchChange?: (isCompleted: boolean) => void
  onNameChange?: (name: string) => void
  onDescriptionChange?: (description: string) => void
  onTrashClick?: () => void
}

const DEBOUNCE_TIME = 1700

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onSwitchChange,
  onNameChange,
  onDescriptionChange,
  onTrashClick,
}) => {
  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputDescriptionRef = useRef<HTMLInputElement>(null)

  const [name, setName] = useState(task.name)
  const [description, setDescription] = useState(task.description)

  const debouncedName = useDebounce(name, DEBOUNCE_TIME)
  const debouncedDescription = useDebounce(description, DEBOUNCE_TIME)

  const handleOnInput =
    <T extends (value: string) => void>(setStateAction: T) =>
    (e: React.FormEvent<HTMLDivElement>) => {
      setStateAction(e.currentTarget.innerText)
    }

  const handleOnKeyDown =
    <T extends React.RefObject<HTMLInputElement>>(inputRef: T) =>
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Escape') {
        deselectAllTextContent()
        inputRef.current?.blur()
      }
    }

  useEffect(() => {
    if (name) onNameChange?.(name)
    inputNameRef.current?.blur()
  }, [debouncedName])

  useEffect(() => {
    if (description) onDescriptionChange?.(description)
    inputDescriptionRef.current?.blur()
  }, [debouncedDescription])

  return (
    <Container $isCompleted={task?.isCompleted}>
      <Header>
        {task.isCompleted ? <TaskCompletedIcon /> : <TaskIcon />}
        <ActionContainer>
          <Button
            type='button'
            $variant='outlined'
            $color='error'
            className='delete-button'
            onClick={onTrashClick}
            style={{
              width: '3.5rem',
              padding: 0,
              height: '3.2rem',
              margin: '-0.4rem 0',
            }}
          >
            <TrashIcon />
          </Button>
          <Switch
            type='button'
            checked={task?.isCompleted}
            onChange={(e) => onSwitchChange?.(e.target.checked)}
          />
        </ActionContainer>
      </Header>
      <TitleInput
        ref={inputNameRef}
        $isCompleted={task?.isCompleted}
        aria-readonly={task?.isCompleted}
        onKeyDown={handleOnKeyDown(inputNameRef)}
        onInput={handleOnInput(setName)}
      >
        {task.name}
      </TitleInput>
      {!(task.isCompleted && !task.description) && (
        <DescriptionInput
          ref={inputDescriptionRef}
          $value={task?.description}
          $isCompleted={task?.isCompleted}
          aria-readonly={task?.isCompleted}
          onKeyDown={handleOnKeyDown(inputDescriptionRef)}
          onInput={handleOnInput(setDescription)}
        >
          {task.description || 'Add a description'}
        </DescriptionInput>
      )}
    </Container>
  )
}
