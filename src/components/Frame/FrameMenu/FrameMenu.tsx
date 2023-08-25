import s from './FrameMenu.module.css'
import { Button } from '../../Button/Button'
import { ValuesType } from '../../../App'

export type FrameMenuPropsType = {
  frameID: string
  values: ValuesType
  setValues: (values: ValuesType) => void
  isActiveSet: boolean
  setIsActiveSet: (isActiveSet: boolean) => void
}

export const FrameMenu = ({ frameID, values, setValues, isActiveSet, setIsActiveSet }: FrameMenuPropsType) => {

  const incButtonDisabledStatus = values.counterValue >= values.maxValue
  const resButtonDisabledStatus = values.counterValue === values.minValue
  const decButtonDisabledStatus = values.counterValue <= values.minValue
  const setButtonDisabledStatus = isActiveSet

  const onChangeSetStatusHandler = (value: boolean) => {
    setIsActiveSet(value)
    setValues({ ...values, startValue: 0 })
  }

  return (
    <div className={s.counterMenu}>
      {
        frameID === 'settings' ?
          <Button title={'SET'}
                  values={values}
                  isActiveSet={isActiveSet}
                  onClickHandler={() => onChangeSetStatusHandler(true)}
                  disabled={setButtonDisabledStatus}
          />
          :
          <>
            <Button title={'DEC'} values={values} onClickHandler={frameValueHandlers.decreaseValue}
                    disabled={decButtonDisabledStatus} />
            <Button title={'RESET'} values={values} onClickHandler={frameValueHandlers.resetValue}
                    disabled={resButtonDisabledStatus} />
            <Button title={'INC'} values={values} onClickHandler={frameValueHandlers.increaseValue}
                    disabled={incButtonDisabledStatus} />
          </>
      }
    </div>
  )
}