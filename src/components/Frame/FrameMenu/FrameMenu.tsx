import s from './FrameMenu.module.css'
import { Button } from '../../Button/Button'
import { StateT, ViewsT } from '../../../App'

export type FrameMenuPT = {
  view: ViewsT
  state: StateT
  isActiveSet: boolean
  onClickSetButtonHandler: (value: boolean) => void
}

export const FrameMenu = ({ view, state, isActiveSet, onClickSetButtonHandler }: FrameMenuPT) => {
  const incButtonDisabledStatus =
    state.values.counterValue >= state.values.maxValue || state.values.maxValue <= state.values.minValue
  const resButtonDisabledStatus =
    state.values.counterValue === state.values.resetValue
  const decButtonDisabledStatus =
    state.values.counterValue <= state.values.minValue || state.values.minValue >= state.values.maxValue
  const setButtonDisabledStatus =
    isActiveSet || state.values.startValue < state.values.minValue || state.values.startValue > state.values.maxValue


  return (
    <div className={s.counterMenu}>
      {
        view === 'settings' ?
          <Button title={'SET'}
                  values={state.values}
                  isActiveSet={isActiveSet}
                  onClickSetButtonHandler={onClickSetButtonHandler}
                  disabled={setButtonDisabledStatus}
          />
          :
          <>
            <Button title={'DEC'} values={state.values} onClickHandler={state.controls.decValue}
                    disabled={decButtonDisabledStatus} />
            <Button title={'RESET'} values={state.values} onClickHandler={state.controls.resValue}
                    disabled={resButtonDisabledStatus} />
            <Button title={'INC'} values={state.values} onClickHandler={state.controls.incValue}
                    disabled={incButtonDisabledStatus} />
          </>
      }
    </div>
  )
}