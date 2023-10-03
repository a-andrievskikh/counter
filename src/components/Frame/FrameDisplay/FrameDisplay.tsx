import s from './FrameDisplay.module.css'
import { Input } from '../../Input/Input'
import { StateT, ViewsT } from '../../../App'

export type FrameDisplayPT = {
  view: ViewsT
  state: StateT
  isActiveSet: boolean
  onClickSetButtonHandler: (value: boolean) => void
}

export const FrameDisplay = ({ view, state, isActiveSet, onClickSetButtonHandler }: FrameDisplayPT) => {
  const counterDisplayStyle = `${s.counterDisplay}
     ${state.values.counterValue <= state.values.minValue || state.values.counterValue >= state.values.maxValue ?
    s.counterDisplayStopNumber
    : ''} `
  const incorrectStartValueStyle = `
  ${state.values.startValue < state.values.minValue || state.values.startValue > state.values.maxValue ?
    s.counterDisplayStopNumber
    : ''}
  `
  const inputs: InputT[] = [
    { inputType: 'min', inputTitle: 'min value' },
    { inputType: 'max', inputTitle: 'max value' },
    { inputType: 'start', inputTitle: 'start value' },
  ]

  return (
    <div className={counterDisplayStyle}>
      {
        view === 'settings' ? (
          <>
            {
              inputs.map(i =>
                <Input key={i.inputType}
                       inputType={i.inputType}
                       title={i.inputTitle}
                       view={view}
                       state={state}
                       isActiveSet={isActiveSet}
                       onClickSetButtonHandler={onClickSetButtonHandler}
                />,
              )
            }
          </>
        ) : (
          <>
            {
              isActiveSet ? <div>{state.values.counterValue}</div> :
                !isActiveSet && (state.values.startValue < state.values.minValue || state.values.startValue > state.values.maxValue) ?
                  <div className={`${s.setStyle} ${incorrectStartValueStyle}`}>Incorrect 'start value'</div> :
                  <div className={`${s.setStyle}`}>Enter values and press 'SET'</div>
            }
          </>)
      }
    </div>
  )
}

// Types
export type InputTypeValuesT = 'min' | 'max' | 'start'
export type InputTitlesT = 'min value' | 'max value' | 'start value'
export type InputT = {
  inputType: InputTypeValuesT
  inputTitle: InputTitlesT
}