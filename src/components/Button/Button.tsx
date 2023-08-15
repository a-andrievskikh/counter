import React, { FC } from 'react'
import s from '../Button/Button.module.css'

export type ButtonPropsType = {
  title: string
  count: number
  onClick: () => void
  disabled: boolean
  minCount: number
  maxCount: number
  resetCount: number
  isActiveSet?: boolean
}
export const Button: FC<ButtonPropsType> = (props) => {

  const buttonStyle = `
    ${s.button}
    ${props.title === 'DEC' && props.count <= props.minCount ? s.disabled
    : props.title === 'RESET' && props.count === props.resetCount ? s.disabled
      : props.title === 'INC' && props.count >= props.maxCount ? s.disabled
        : props.title === 'SET' && props.isActiveSet ? s.disabled
          : ''}
    `

  return (
    <button className={buttonStyle}
            onClick={props.onClick}
            disabled={props.disabled}
    >
      {props.title}
    </button>
  )
}