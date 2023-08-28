import s from './FrameMenu.module.css'
import { Button } from '../../Button/Button'
import { ValuesType } from '../../../App'

export type FrameMenuPropsType = {
  frameID: string
  values: ValuesType
  isActiveSet: boolean
  setIsActiveSet: (isActiveSet: boolean) => void
  increaseCounterValue: () => void
  decreaseCounterValue: () => void
  resetCounterValue: () => void
  setStartValue: (value: number) => void
  setCounterValue: (value: number) => void
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
}

export const FrameMenu = (
  {
    frameID, values, setStartValue, isActiveSet, setIsActiveSet,
    increaseCounterValue, decreaseCounterValue, resetCounterValue, setCounterValue, setMinValue, setMaxValue,
  }: FrameMenuPropsType) => {

  const incButtonDisabledStatus = values.counterValue >= values.maxValue || values.maxValue <= values.minValue
  const resButtonDisabledStatus = values.counterValue === values.resetValue
  const decButtonDisabledStatus = values.counterValue <= values.minValue || values.minValue >= values.maxValue
  const setButtonDisabledStatus = isActiveSet || values.startValue < values.minValue || values.startValue > values.maxValue

  const onClickSetButtonHandler = (value: boolean) => {
    setStartValue(values.startValue)
    setMinValue(values.minValue)
    setMaxValue(values.maxValue)
    setCounterValue(values.startValue)
    setIsActiveSet(value)
  }

  return (
    <div className={s.counterMenu}>
      {
        frameID === 'settings' ?
          <Button title={'SET'}
                  values={values}
                  isActiveSet={isActiveSet}
                  onClickSetButtonHandler={onClickSetButtonHandler}
                  disabled={setButtonDisabledStatus}
          />
          :
          <>
            <Button title={'DEC'} values={values} onClickHandler={decreaseCounterValue}
                    disabled={decButtonDisabledStatus} />
            <Button title={'RESET'} values={values} onClickHandler={resetCounterValue}
                    disabled={resButtonDisabledStatus} />
            <Button title={'INC'} values={values} onClickHandler={increaseCounterValue}
                    disabled={incButtonDisabledStatus} />
          </>
      }
    </div>
  )
}