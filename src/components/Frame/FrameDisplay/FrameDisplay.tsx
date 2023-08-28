import s from './FrameDisplay.module.css'
import { Input } from '../../Input/Input'
import { ValuesType } from '../../../App'

export type FrameDisplayPropsType = {
  frameID: string
  values: ValuesType
  setCounterValue: (value: number) => void
  setMinValue: (value: number) => void
  setMaxValue: (value: number) => void
  setStartValue: (value: number) => void
  isActiveSet: boolean
  setIsActiveSet: (isActiveSet: boolean) => void
}

export const FrameDisplay = (
  {
    frameID, values, isActiveSet, setIsActiveSet,
    setMinValue, setMaxValue, setStartValue, setCounterValue,
  }: FrameDisplayPropsType) => {
  const counterDisplayStyle =
    `${s.counterDisplay}
     ${values.counterValue <= values.minValue || values.counterValue >= values.maxValue ?
      s.counterDisplayStopNumber
      : ''} `

  const incorrectStartValueStyle = `
  ${values.startValue < values.minValue || values.startValue > values.maxValue ?
    s.counterDisplayStopNumber
    : ''}
  `

  const inputs = [
    { inputID: 'min', title: 'min value' },
    { inputID: 'max', title: 'max value' },
    { inputID: 'start', title: 'start value' },
  ]

  return (
    <div className={counterDisplayStyle}>
      {
        frameID === 'settings' ? (
          <>
            {
              inputs.map(i => {
                return (
                  <Input key={i.inputID}
                         inputID={i.inputID}
                         title={i.title}
                         frameID={frameID}
                         values={values}
                         setMinValue={setMinValue}
                         setMaxValue={setMaxValue}
                         setStartValue={setStartValue}
                         setCounterValue={setCounterValue}
                         isActiveSet={isActiveSet}
                         setIsActiveSet={setIsActiveSet}
                  />
                )
              })
            }
          </>
        ) : (
          <>
            {
              isActiveSet ? <div>{values.counterValue}</div> :
                !isActiveSet && (values.startValue < values.minValue || values.startValue > values.maxValue) ?
                  <div className={`${s.setStyle} ${incorrectStartValueStyle}`}>Incorrect 'start value'</div> :
                  <div className={`${s.setStyle}`}>Enter values and press 'SET'</div>
            }
          </>)
      }
    </div>
  )
}