import { useState } from 'react'
import s from './App.module.css'
import { Frame } from './components/Frame/Frame'

export type FramesType = {
  frameID: 'settings' | 'counter'
}
export type ValuesType = {
  counterValue: number,
  startValue: number,
  minValue: number,
  maxValue: number,
  resetValue: number,
}

export const App = () => {
  const frames: FramesType[] = [
    { frameID: 'settings' },
    { frameID: 'counter' },
  ]
  const [isActiveSet, setIsActiveSet] = useState<boolean>(true)
  const [values, setValues] = useState<ValuesType>({
    counterValue: 0,
    startValue: 0,
    minValue: 0,
    maxValue: 0,
    resetValue: 0,
  })
  const increaseCounterValue = () => {
    setValues({ ...values, counterValue: values.counterValue + 1 })
  }
  const decreaseCounterValue = () => {
    setValues({ ...values, counterValue: values.counterValue - 1 })
  }
  const resetCounterValue = () => {
    setValues({ ...values, counterValue: values.counterValue = values.resetValue })
  }
  const setCounterValue = (value: number) => {
    setValues({ ...values, counterValue: value })
  }
  const setMinValue = (value: number) => {
    setValues({ ...values, minValue: value })
  }
  const setMaxValue = (value: number) => {
    setValues({ ...values, maxValue: value })
  }
  const setStartValue = (value: number) => {
    setValues({ ...values, startValue: value })
  }

  console.log('App rendered')
  return (
    <div className={s.App}>
      {
        frames.map(f => {
          return (
            <Frame key={f.frameID}
                   frameID={f.frameID}
                   values={values}
                   increaseCounterValue={increaseCounterValue}
                   decreaseCounterValue={decreaseCounterValue}
                   resetCounterValue={resetCounterValue}
                   setCounterValue={setCounterValue}
                   setMinValue={setMinValue}
                   setMaxValue={setMaxValue}
                   setStartValue={setStartValue}
                   isActiveSet={isActiveSet}
                   setIsActiveSet={setIsActiveSet}
            />
          )
        })
      }
    </div>
  )
}
