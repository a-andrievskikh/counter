import { useEffect, useState } from 'react'
import s from './App.module.css'
import { Frame } from './components/Frame/Frame'
import { restoreState, saveState } from './utils/local-storage'
import { useControls } from './hooks/useControls'


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
