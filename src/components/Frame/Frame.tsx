import { useState } from 'react'
import s from './Frame.module.css'
import { FrameDisplay } from './FrameDisplay/FrameDisplay'
import { FrameMenu } from './FrameMenu/FrameMenu'
import { ValuesType } from '../../App'

export type FramePropsType = {
  frameID: string
  values: ValuesType
  increaseCounterValue: () => void
  decreaseCounterValue: () => void
  resetCounterValue: () => void
  setCounterValue: (value: number) => void
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setStartValue: (value: number) => void
  isActiveSet: boolean
  setIsActiveSet: (isActiveSet: boolean) => void
}

export const Frame = (
  {
    frameID, values, increaseCounterValue, decreaseCounterValue, resetCounterValue,
    setMinValue, setMaxValue, setStartValue, setCounterValue, isActiveSet, setIsActiveSet,
  }: FramePropsType) => {


  return (
    <div className={s.main}>
      <FrameDisplay frameID={frameID}
                    values={values}
                    setCounterValue={setCounterValue}
                    setMinValue={(value) => setMinValue(value)}
                    setMaxValue={(value) => setMaxValue(value)}
                    setStartValue={(value) => setStartValue(value)}
                    isActiveSet={isActiveSet}
                    setIsActiveSet={setIsActiveSet}
      />
      <FrameMenu frameID={frameID}
                 values={values}
                 isActiveSet={isActiveSet}
                 setIsActiveSet={setIsActiveSet}
                 setCounterValue={setCounterValue}
                 setStartValue={setStartValue}
                 increaseCounterValue={increaseCounterValue}
                 decreaseCounterValue={decreaseCounterValue}
                 resetCounterValue={resetCounterValue}
                 setMinValue={(value) => setMinValue(value)}
                 setMaxValue={(value) => setMaxValue(value)}
      />
    </div>
  )
}

