import s from './FrameMenu.module.css'
import { Button } from '../../Button/Button'
import { StateT, ViewsT } from '../../../App'


export const FrameMenu = ({
                            view, state, isActiveSetBtn,
                            onClickSetBtnHandler, incorrectStartValue,
                          }: FrameMenuPT) => {

  const decButtonDisabled =
    !isActiveSetBtn || state.values.counterValue <= state.values.minValue || state.values.startValue <= state.values.minValue

  const incButtonDisabled =
    !isActiveSetBtn || state.values.counterValue >= state.values.maxValue || state.values.startValue >= state.values.maxValue

  const resButtonDisabled =
    !isActiveSetBtn || state.values.counterValue === state.values.resetValue

  const setButtonDisabled = isActiveSetBtn || incorrectStartValue

  return (
    <div className={s.counterMenu}>
      {
        view === 'settings' ?
          <Button title={'SET'}
                  isActiveSetBtn={isActiveSetBtn}
                  onClickSetBtnHandler={onClickSetBtnHandler}
                  disabled={setButtonDisabled}
          />
          :
          <>
            <Button title={'DEC'} onClickHandler={state.controls.decValue}
                    disabled={decButtonDisabled} />
            <Button title={'RESET'} onClickHandler={state.controls.resValue}
                    disabled={resButtonDisabled || incorrectStartValue} />
            <Button title={'INC'} onClickHandler={state.controls.incValue}
                    disabled={incButtonDisabled} />
          </>
      }
    </div>
  )
}

// Types
export type FrameMenuPT = {
  view: ViewsT
  state: StateT
  isActiveSetBtn: boolean
  onClickSetBtnHandler: (value: boolean) => void
  incorrectStartValue: boolean
}