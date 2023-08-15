import { FC, useState } from 'react'
import s from './Counter.module.css'
import { CounterDisplay } from './CounterDisplay/CounterDisplay'
import { CounterMenu } from './CounterMenu/CounterMenu'

export type CounterPropsType = {
  id: string
  count: number
  minCount: number
  maxCount: number
  resetCount: number
  setCount: (counter: number) => void
  setMinCount: (counter: number) => void
  setMaxCount: (counter: number) => void
  increaseHandler: () => void
  decreaseHandler: () => void
  resetHandler: () => void
}

export const Counter: FC<CounterPropsType> = (props) => {
  const [isActiveSet, setIsActiveSet] = useState<boolean>(false)

  return (
    <div className={s.main}>
      <CounterDisplay id={props.id}
                      count={props.count}
                      minCount={props.minCount}
                      maxCount={props.maxCount}
                      resetCount={props.resetCount}
                      setCount={props.setCount}
                      setMinCount={props.setMinCount}
                      setMaxCount={props.setMaxCount}
                      isActiveSet={isActiveSet}
                      setIsActiveSet={(isActiveSet) => setIsActiveSet(isActiveSet)}
      />
      <CounterMenu id={props.id}
                   count={props.count}
                   minCount={props.minCount}
                   maxCount={props.maxCount}
                   resetCount={props.resetCount}
                   increaseHandler={props.increaseHandler}
                   decreaseHandler={props.decreaseHandler}
                   resetHandler={props.resetHandler}
                   isActiveSet={isActiveSet}
                   setIsActiveSet={(isActiveSet) => setIsActiveSet(isActiveSet)}
      />
    </div>
  )
}

