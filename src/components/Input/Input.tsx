import s from './Input.module.css'
import { StateT, ViewsT } from '../../App'
import { ChangeEvent } from 'react'
import { InputT } from '../Frame/FrameDisplay/FrameDisplay'


export const Input = ({
                        input, state, onClickSetBtnHandler, incorrectStartValue,
                      }: InputPT) => {

  const wrongValues = (input.type === 'min' && state.values.minValue > state.values.maxValue)
    || (input.type === 'max' && state.values.maxValue < state.values.minValue) || incorrectStartValue

  const inputStyles = `${s.input}  ${wrongValues ? s.wrongValue : ''}`

  const inputValue =
    input.type === 'max' ? state.values.maxValue
      : input.type === 'min' ? state.values.minValue
        : state.values.startValue

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    input.type === 'min' && state.controls.setMinValue(Number(e.currentTarget.value))
    input.type === 'max' && state.controls.setMaxValue(Number(e.currentTarget.value))
    input.type === 'start' && state.controls.setStartValue(Number(e.currentTarget.value))
  }

  return (
    <div className={s.inputWrapper}>
      <div className={s.value}>{`${input.title}:`}</div>
      <input className={inputStyles}
             value={inputValue}
             type="number"
             onChange={onChangeHandler}
             onFocus={() => onClickSetBtnHandler(false)}
      />
    </div>
  )
}

// Types
export type InputPT = {
  input: InputT
  view: ViewsT
  state: StateT
  isActiveSet: boolean
  onClickSetBtnHandler: (value: boolean) => void
  incorrectStartValue: boolean
}

