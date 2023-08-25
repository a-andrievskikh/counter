import { useState } from 'react'
import s from './Frame.module.css'
import { FrameDisplay } from './FrameDisplay/FrameDisplay'
import { FrameMenu } from './FrameMenu/FrameMenu'
import { ValuesType } from '../../App'

export type FramePropsType = {
  frameID: string
  values: ValuesType
  setValues: (values: ValuesType) => void
}

export const Frame = (
  { frameID, values, setValues }: FramePropsType) => {

  const [isActiveSet, setIsActiveSet] = useState<boolean>(false)

  return (
    <div className={s.main}>
      <FrameDisplay frameID={frameID}
                    values={values}
                    setValues={() => setValues(values)}
                    isActiveSet={isActiveSet}
                    setIsActiveSet={setIsActiveSet}
      />
      <FrameMenu frameID={frameID}
                 values={values}
                 setValues={() => setValues(values)}
                 isActiveSet={isActiveSet}
                 setIsActiveSet={setIsActiveSet}
      />
    </div>
  )
}

