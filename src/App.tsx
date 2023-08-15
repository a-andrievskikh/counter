import { useState } from 'react'
import s from './App.module.css'
import { Counter } from './components/Counter/Counter'

export const App = () => {

  const [count, setCount] = useState<number>(0)
  const [minCount, setMinCount] = useState<number>(0)
  const [maxCount, setMaxCount] = useState<number>(0)
  const resetCount = 0

  const displays = [
    { id: 'set' },
    { id: 'count' },
  ]

  const increaseHandler = () => {
    if (count < maxCount) {
      setCount(count + 1)
    }
  }
  const decreaseHandler = () => {
    if (count > minCount) {
      setCount(count - 1)
    }
  }
  const resetHandler = () => setCount(resetCount)

  return (
    <div className={s.App}>
      {
        displays.map(d => {
          return (
            <Counter key={d.id}
                     id={d.id}
                     count={count}
                     minCount={minCount}
                     maxCount={maxCount}
                     resetCount={resetCount}
                     setCount={setCount}
                     setMinCount={setMinCount}
                     setMaxCount={setMaxCount}
                     increaseHandler={increaseHandler}
                     decreaseHandler={decreaseHandler}
                     resetHandler={resetHandler}
            />
          )
        })
      }
    </div>
  )
}
