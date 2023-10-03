import s from './Input.module.css'
import { StateT, ViewsT } from '../../App'
import { ChangeEvent } from 'react'

export type InputPT = {
  inputType: string
  title: string
  view: ViewsT
  state: StateT
  isActiveSet: boolean
  onClickSetButtonHandler: (value: boolean) => void
}

export const Input = ({ inputType, title, state, isActiveSet, onClickSetButtonHandler }: InputPT) => {

  const inputStyles = `
  ${s.input}
  ${state.values.minValue >= state.values.maxValue ? s.wrongValue
    : state.values.maxValue <= state.values.minValue ? s.wrongValue
      : state.values.startValue < state.values.minValue ? s.wrongValue
        : state.values.startValue > state.values.maxValue ? s.wrongValue
          : ''
  }`

  const inputValue =
    inputType === 'max' ? state.values.maxValue
      : inputType === 'min' ? state.values.minValue
        : state.values.startValue

  const onFocusHandler = (value: boolean) => onClickSetButtonHandler(value)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    inputType === 'min' && state.controls.setMinValue(Number(e.currentTarget.value))
    inputType === 'max' && state.controls.setMaxValue(Number(e.currentTarget.value))
    inputType === 'start' && state.controls.setStartValue(Number(e.currentTarget.value))
  }

  return (
    <div className={s.inputWrapper}>
      <div className={s.value}>{title}</div>
      <input className={inputStyles}
             value={inputValue}
             type="number"
             onChange={onChangeHandler}
             onFocus={() => {
               isActiveSet = false
               onFocusHandler(isActiveSet)
             }}
             onBlur={() => {
               isActiveSet = true
               onFocusHandler(isActiveSet)
             }}
      />
    </div>
  )
}

