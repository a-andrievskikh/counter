import s from './FrameDisplay.module.css'
import { Input } from '../../Input/Input'
import { StateT, ViewsT } from '../../../App'


export const FrameDisplay = ({
                               view, state, isActiveSetBtn,
                               onClickSetBtnHandler, incorrectStartValue,
                             }: FrameDisplayPT) => {

  const displayValueStyles = `${s.counterDisplay} ${incorrectStartValue ? s.counterStopNumber : ''}`
  const incorrectStartValueStyles = `${incorrectStartValue ? s.incorrectStartValue : ''}`

  const inputs: InputT[] = [
    { type: 'min', title: 'min value' },
    { type: 'max', title: 'max value' },
    { type: 'start', title: 'start value' },
  ]

  console.log('Frame Display Rendered!')
  return (
    <div className={s.counterDisplay}>
      {
        view === 'settings' ? (
          <>
            {
              inputs.map(i =>
                <Input key={i.type}
                       input={i}
                       view={view}
                       state={state}
                       isActiveSet={isActiveSetBtn}
                       onClickSetBtnHandler={onClickSetBtnHandler}
                       incorrectStartValue={incorrectStartValue}
                />,
              )
            }
          </>
        ) : (
          <>
            {
              isActiveSetBtn
                ? <div className={displayValueStyles}>{state.values.counterValue}</div>
                : (!isActiveSetBtn && incorrectStartValue)
                  ? <div className={incorrectStartValueStyles}>Incorrect value'!</div>
                  : <div className={s.setBtnStyle}>Enter values and press 'SET'</div>
            }
          </>
        )
      }
    </div>
  )
}

// Types
export type FrameDisplayPT = {
  view: ViewsT
  state: StateT
  isActiveSetBtn: boolean
  onClickSetBtnHandler: (value: boolean) => void
  incorrectStartValue: boolean
}
export type InputTypeValuesT = 'min' | 'max' | 'start'
export type InputTitlesT = 'min value' | 'max value' | 'start value'
export type InputT = {
  type: InputTypeValuesT
  title: InputTitlesT
}