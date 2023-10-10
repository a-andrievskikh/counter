import { useEffect, useState } from 'react'
import s from './App.module.css'
import { Frame } from './components/Frame/Frame'
import { restoreState, saveState } from './utils/local-storage'

const useControls = (initialValues: ValuesT) => {
  const [values, setValues] = useState<ValuesT>(initialValues)

  const incValue = () => {
    setValues((prevValues) => ({ ...prevValues, counterValue: prevValues.counterValue + 1 }))
  }
  const decValue = () => {
    setValues((prevValues) => ({ ...prevValues, counterValue: prevValues.counterValue - 1 }))
  }
  const resValue = () => {
    setValues((prevValues) => ({ ...prevValues, counterValue: prevValues.startValue }))
  }
  const setCounterValue = (value: number) => {
    setValues((prevValues) => ({ ...prevValues, counterValue: value }))
  }
  const setMinValue = (value: number) => {
    setValues((prevValues) => ({ ...prevValues, minValue: value }))
  }
  const setMaxValue = (value: number) => {
    setValues((prevValues) => ({ ...prevValues, maxValue: value }))
  }
  const setStartValue = (value: number) => {
    setValues((prevValues) => ({ ...prevValues, startValue: value }))
  }

  return {
    values,
    controls: {
      incValue,
      decValue,
      resValue,
      setCounterValue,
      setMinValue,
      setMaxValue,
      setStartValue,
    },
  }
}

export const App = () => {
  const frames: FramesT[] = [
    { view: 'settings' },
    { view: 'counter' },
  ]
  const { values, controls }: StateT = useControls(
    restoreState('values', {
      counterValue: 0,
      minValue: 0,
      maxValue: 0,
      startValue: 0,
      resetValue: 0,
    }),
  )
  const [isActiveSetBtn, setIsActiveSetBtn] = useState<boolean>(true)

  useEffect(() => {
    saveState('values', values)
  }, [values])

  return (
    <div className={s.App}>
      {
        frames.map(f =>
          <Frame key={f.view}
                 view={f.view}
                 state={{ values, controls }}
                 isActiveSetBtn={isActiveSetBtn}
                 setIsActiveSetBtn={setIsActiveSetBtn}
          />,
        )
      }
    </div>
  )
}

// Types
export type ViewsT = 'settings' | 'counter'
export type FramesT = { view: ViewsT }
export type StateT = {
  values: ValuesT
  controls: ControlsT
}
export type ValuesT = {
  counterValue: number,
  startValue: number,
  minValue: number,
  maxValue: number,
  resetValue: number,
}
export type ControlsT = {
  incValue: () => void
  decValue: () => void
  resValue: () => void
  setCounterValue: (value: number) => void
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setStartValue: (value: number) => void
}
