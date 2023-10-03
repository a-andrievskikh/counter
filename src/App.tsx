import { useEffect, useState } from 'react'
import s from './App.module.css'
import { Frame } from './components/Frame/Frame'
import { restoreState, saveState } from './utils/local-storage'

export const App = () => {
  const frames: FramesT[] = [
    { view: 'settings' },
    { view: 'counter' },
  ]

  const [isActiveSet, setIsActiveSet] = useState<boolean>(true)

  const [state, setState] = useState<StateT>({
    values: restoreState<ValuesT>(
      'values',
      {
        counterValue: 0,
        startValue: 0,
        minValue: 0,
        maxValue: 0,
        resetValue: 0,
      }),
    controls: {
      incValue() {
        setState(prevState => ({
          ...prevState,
          values: { ...prevState.values, counterValue: prevState.values.counterValue + 1 },
        }))
      },
      decValue() {
        setState(prevState => ({
          ...prevState,
          values: { ...prevState.values, counterValue: prevState.values.counterValue - 1 },
        }))
      },
      resValue() {
        setState(prevState => ({
          ...prevState,
          values: { ...prevState.values, counterValue: prevState.values.startValue },
        }))
      },
      setValue(value: number) {
        setState(prevState => ({ ...prevState, values: { ...prevState.values, counterValue: value } }))
      },
      setMinValue(value: number) {
        setState(prevState => ({ ...prevState, values: { ...prevState.values, minValue: value } }))
      },
      setMaxValue(value: number) {
        setState(prevState => ({ ...prevState, values: { ...prevState.values, maxValue: value } }))
      },
      setStartValue(value: number) {
        setState(prevState => ({ ...prevState, values: { ...prevState.values, startValue: value } }))
      },
    },
  })

  useEffect(() => {
    saveState('values', state.values)
  }, [state.values])

  /*const incValue = () => {
    setValues({ ...values, counterValue: values.counterValue + 1 })
  }
  const decValue = () => {
    setValues({ ...values, counterValue: values.counterValue - 1 })
  }
  const resValue = () => {
    setValues({ ...values, counterValue: values.counterValue = values.startValue })
  }
  const setValue = (value: number) => {
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
  }*/

  return (
    <div className={s.App}>
      {
        frames.map(f =>
          <Frame key={f.view}
                 view={f.view}
                 state={state}
                 isActiveSet={isActiveSet}
                 setIsActiveSet={setIsActiveSet}
          />
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
  setValue: (value: number) => void
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setStartValue: (value: number) => void
}
