import s from './Frame.module.css'
import { FrameDisplay } from './FrameDisplay/FrameDisplay'
import { FrameMenu } from './FrameMenu/FrameMenu'
import { StateT, ViewsT } from '../../App'

export type FramePT = {
  view: ViewsT
  state: StateT
  isActiveSet: boolean
  setIsActiveSet: (isActiveSet: boolean) => void
}

export const Frame = ({ view, state, isActiveSet, setIsActiveSet }: FramePT) => {
  const onClickSetButtonHandler = (value: boolean) => {
    state.controls.setStartValue(state.values.startValue)
    state.controls.setMinValue(state.values.minValue)
    state.controls.setMaxValue(state.values.maxValue)
    state.controls.setValue(state.values.startValue)
    setIsActiveSet(value)
  }
  return (
    <div className={s.main}>
      <FrameDisplay view={view}
                    state={state}
                    isActiveSet={isActiveSet}
                    onClickSetButtonHandler={onClickSetButtonHandler}
      />
      <FrameMenu view={view}
                 state={state}
                 isActiveSet={isActiveSet}
                 onClickSetButtonHandler={onClickSetButtonHandler}
      />
    </div>
  )
}



