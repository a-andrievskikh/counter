import s from './Input.module.css'
import { ValuesType } from '../../App'
import { ChangeEvent } from 'react'

export type InputPropsType = {
  inputID: string
  title: string
  frameID: string
  values: ValuesType
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setStartValue: (value: number) => void
  setCounterValue: (value: number) => void
  isActiveSet: boolean
  setIsActiveSet: (isActiveSet: boolean) => void
}

export const Input = (
  {
    inputID, title, frameID, values,
    isActiveSet, setIsActiveSet,
    setMinValue, setMaxValue, setStartValue, setCounterValue,
  }: InputPropsType) => {

  const inputStyle = `
  ${s.input}
  ${values.minValue >= values.maxValue ? s.wrongValue
    : values.maxValue <= values.minValue ? s.wrongValue
      : values.startValue < values.minValue ? s.wrongValue
        : values.startValue > values.maxValue ? s.wrongValue
          : ''
  }
  `

  const onFocusHandler = (value: boolean) => setIsActiveSet(value)
  const inputValue = inputID === 'max' ? values.maxValue
    : inputID === 'min' ? values.minValue
      : values.startValue
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputID === 'min') {
      console.log('min changed')
      setMinValue(Number(e.currentTarget.value))

    }
    if (inputID === 'max') {
      console.log('max changed')
      setMaxValue(Number(e.currentTarget.value))
    }
    if (inputID === 'start') {
      console.log('start changed')
      setStartValue(Number(e.currentTarget.value))
    }
  }
  return (
    <div className={s.inputWrapper}>
      <div className={s.value}>{title}</div>
      <input className={inputStyle}
             value={inputValue}
             type="number"
             onChange={onChangeHandler}
             onFocus={() => {
               isActiveSet = false
               onFocusHandler(isActiveSet)
               console.log(isActiveSet)
             }}
      />
    </div>
  )
}

