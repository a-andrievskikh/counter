import { FC } from 'react'
import s from './CounterDisplay.module.css'
import { Input } from '../../Input/Input'

export type CounterDisplayPropsType = {
  id: string
  count: number
  maxCount: number
  minCount: number
  resetCount: number
  setCount: (counter: number) => void
  setMinCount: (counter: number) => void
  setMaxCount: (counter: number) => void
  isActiveSet: boolean
  setIsActiveSet: (isActiveSet: boolean) => void
}

export const CounterDisplay: FC<CounterDisplayPropsType> = (props) => {
  const counterDisplayStyle =
    `${s.counterDisplay}
     ${props.count >= props.maxCount || props.count <= props.minCount ?
      s.counterDisplayStopNumber
      : ''} `

  const inputs = [
    { id: 1, title: 'max value' },
    { id: 2, title: 'min value' },
    { id: 3, title: 'start value' },
  ]

  return (
    <div className={counterDisplayStyle}>
      {props.isActiveSet ? (
          props.id === 'set' ?
            <>
              {
                inputs.map(i => {
                  return (
                    <Input key={i.id}
                           title={i.title}
                           count={props.count}
                           minCount={props.minCount}
                           maxCount={props.maxCount}
                           setCount={props.setCount}
                           setMinCount={props.setMinCount}
                           setMaxCount={props.setMaxCount}
                           isActiveSet={props.isActiveSet}
                           setIsActiveSet={(isActiveSet) => props.setIsActiveSet(isActiveSet)}
                    />
                  )
                })
              }
            </>
            : <div className={props.isActiveSet ? s.setStyle : ''}>Enter values and press 'SET'</div>
        )
        :
        (
          props.id === 'set' ?
            <>
              {
                inputs.map(i => {
                  return (
                    <Input key={i.id}
                           title={i.title}
                           count={props.count}
                           minCount={props.minCount}
                           maxCount={props.maxCount}
                           setCount={props.setCount}
                           setMinCount={props.setMinCount}
                           setMaxCount={props.setMaxCount}
                           isActiveSet={props.isActiveSet}
                           setIsActiveSet={(isActiveSet) => props.setIsActiveSet(isActiveSet)}
                    />
                  )
                })
              }
            </>
            : <div>{props.count}</div>
        )
      }
    </div>
  )
}