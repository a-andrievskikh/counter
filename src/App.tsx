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

  const [values, setValues] = useState<ValuesType>({
    counterValue: 0,
    startValue: 0,
    minValue: 0,
    maxValue: 0,
    resetValue: 0,
  })


  console.log('App rendered')
  return (
    <div className={s.App}>
      {
        frames.map(f => {
          return (
            <Frame key={f.frameID}
                   frameID={f.frameID}
                   values={values}
                   setValues={() => setValues(values)}
            />
          )
        })
      }
    </div>
  )
}
