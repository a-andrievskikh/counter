import s from './Input.module.css'
import { StateT, ViewsT } from '../../App'
import { ChangeEvent } from 'react'
import { InputT } from '../Frame/FrameDisplay/FrameDisplay'


export const Input = ({
                        input,
                        state: {
                          values: { minValue, maxValue, startValue },
                          controls: { setMinValue, setMaxValue, setStartValue },
                        }, onClickSetBtnHandler, incorrectStartValue,
                      }: InputPT) => {

  const wrongValues =
    (input.type === 'min' && minValue > maxValue) ||
    (input.type === 'max' && maxValue < minValue) ||
    incorrectStartValue

  const inputStyles = `${s.input}  ${wrongValues ? s.wrongValue : ''}`

  const inputValue =
    input.type === 'max' ? maxValue :
      input.type === 'min' ? minValue :
        startValue

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    input.type === 'min' && setMinValue(Number(e.currentTarget.value))
    input.type === 'max' && setMaxValue(Number(e.currentTarget.value))
    input.type === 'start' && setStartValue(Number(e.currentTarget.value))
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

