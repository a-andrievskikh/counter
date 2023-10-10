import s from './Frame.module.css'
import { FrameDisplay } from './FrameDisplay/FrameDisplay'
import { FrameMenu } from './FrameMenu/FrameMenu'
import { StateT, ViewsT } from '../../App'


export const Frame = ({ view, state, isActiveSetBtn, setIsActiveSetBtn }: FramePT) => {
  const { values, controls } = state

  const onClickSetBtnHandler = (value: boolean) => {
    controls.setCounterValue(values.startValue)
    setIsActiveSetBtn(value)
  }

  const incorrectStartValue =
    values.startValue <= values.minValue || values.startValue >= values.maxValue

  return (
    <div className={s.main}>
      <FrameDisplay view={view}
                    state={state}
                    isActiveSetBtn={isActiveSetBtn}
                    setIsActiveSetBtn={setIsActiveSetBtn}
                    onClickSetBtnHandler={onClickSetBtnHandler}
                    incorrectStartValue={incorrectStartValue}
      />
      <FrameMenu view={view}
                 state={state}
                 isActiveSetBtn={isActiveSetBtn}
                 onClickSetBtnHandler={onClickSetBtnHandler}
                 incorrectStartValue={incorrectStartValue}
      />
    </div>
  )
}

// Types
export type FramePT = {
  view: ViewsT
  state: StateT
  isActiveSetBtn: boolean
  setIsActiveSetBtn: (value: boolean) => void
}



