import { FC } from 'react'
import s from './Input.module.css'

export type InputPropsType = {
  title: string
  count: number
  minCount: number
  maxCount: number
  setCount: (counter: number) => void
  setMinCount: (counter: number) => void
  setMaxCount: (counter: number) => void
  isActiveSet: boolean
  setIsActiveSet: (isActiveSet: boolean) => void
}

export const Input: FC<InputPropsType> = (props) => {

  const onFocusHandler = (value: boolean) => props.setIsActiveSet(value)

  return (
    <div className={s.inputWrapper}>
      <div className={s.value}>{props.title}</div>
      <input value={props.title === 'max value' ? props.maxCount
        : props.title === 'min value' ? props.minCount
          : props.count
      }
             type="number"
             className={s.input}
             min={props.minCount} max={props.maxCount}
             onChange={e => props.setCount(Number(e.currentTarget.value))}
             onFocus={() => onFocusHandler(false)}
             onBlur={e => {
               if (props.title === 'max value') {
                 props.setMaxCount(Number(e.currentTarget.value))
               }
               if (props.title === 'min value') {
                 props.setMinCount(Number(e.currentTarget.value))
               }
               if (props.title === 'start value') {
                 props.setCount(Number(e.currentTarget.value))
               }
               onFocusHandler(true)
             }
             }
      />
    </div>
  )
}

