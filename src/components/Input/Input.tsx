import s from './Input.module.css'
import { SetterType, ValueType } from '../../App'

export type InputPropsType = {
  inputID: string
  title: string
  frameID: string
  frameValues: ValueType
  frameSetters: SetterType
  isActiveSet: boolean
  setIsActiveSet: (isActiveSet: boolean) => void
}

export const Input = (
  {
    inputID, title, frameID, frameValues,
    frameSetters, isActiveSet, setIsActiveSet,
  }: InputPropsType) => {

  const onFocusHandler = (value: boolean) => setIsActiveSet(value)
  const inputValue = inputID === 'max' ? frameValues.maxValue
    : inputID === 'min value' ? frameValues.minValue
      : frameValues.startValue
  return (
    <div className={s.inputWrapper}>
      <div className={s.value}>{title}</div>
      <input value={inputValue}
             type="number"
             className={s.input}
             onChange={e => {
               if (inputID === 'max') {
                 frameSetters.setMaxValue(Number(e.currentTarget.value))
               }
               if (inputID === 'min') {
                 frameSetters.setMinValue(Number(e.currentTarget.value))
               }
               if (inputID === 'start') {
                 console.log(Number(e.currentTarget.value))
                 frameSetters.setStartValue(Number(e.currentTarget.value))
               }
             }
             }
             onFocus={() => {
               onFocusHandler(false)
               console.log(isActiveSet)
             }}
             onBlur={e => {
               if (inputID === 'max') {
                 onFocusHandler(true)
                 frameSetters.setMaxValue(Number(e.currentTarget.value))
               }
               if (inputID === 'min') {
                 onFocusHandler(true)
                 frameSetters.setMinValue(Number(e.currentTarget.value))
               }
               if (inputID === 'start') {
                 onFocusHandler(true)
                 frameSetters.setStartValue(Number(e.currentTarget.value))
               }
             }
             }
      />
    </div>
  )
}

