import s from './FrameDisplay.module.css'
import { Input } from '../../Input/Input'
import { ValuesType } from '../../../App'

export type FrameDisplayPropsType = {
  frameID: string
  values: ValuesType
  setValues: () => void
  isActiveSet: boolean
  setIsActiveSet: (isActiveSet: boolean) => void
}

export const FrameDisplay = (
  { frameID, values, setValues, isActiveSet, setIsActiveSet }: FrameDisplayPropsType) => {
  const counterDisplayStyle =
    `${s.counterDisplay}
     ${values.startValue >= values.maxValue || values.startValue <= values.minValue ?
      s.counterDisplayStopNumber
      : ''} `

  const inputs = [
    { inputID: 'max', title: 'max value' },
    { inputID: 'min', title: 'min value' },
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
                         frameValues={frameValues}
                         frameSetters={frameSetters}
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
              !isActiveSet ? (<div>{frameValues.countValue}</div>) :
                (<div className={s.setStyle}>Enter values and press 'SET'</div>)
            }
          </>)
      }
    </div>
  )
}