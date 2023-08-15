import { FC, useState } from 'react'
import s from './CounterMenu.module.css'
import { Button } from '../../Button/Button'

export type CounterDisplayPropsType = {
  id: string
  count: number
  minCount: number
  maxCount: number
  resetCount: number
  increaseHandler: () => void
  decreaseHandler: () => void
  resetHandler: () => void
  isActiveSet: boolean
  setIsActiveSet: (isActiveSet: boolean) => void
}

export const CounterMenu: FC<CounterDisplayPropsType> = (props) => {

  const [setting, setSetting] = useState<boolean>(false)

  const incButtonDisabledStatus = props.count >= props.maxCount
  const resButtonDisabledStatus = props.count === props.resetCount
  const decButtonDisabledStatus = props.count <= props.minCount
  const setButtonDisabledStatus = props.isActiveSet

  const onChangeSetStatusHandler = (value: boolean) => props.setIsActiveSet(value)

  return (
    <div className={s.counterMenu}>
      {
        props.id === 'set' ?
          <Button title={'SET'}
                  count={props.count}
                  minCount={props.minCount}
                  maxCount={props.maxCount}
                  resetCount={props.resetCount}
                  isActiveSet={props.isActiveSet}
                  onClick={() => onChangeSetStatusHandler(true)}
                  disabled={setButtonDisabledStatus}
          />
          :
          <>
            <Button title={'DEC'} count={props.count} minCount={props.minCount} maxCount={props.maxCount}
                    resetCount={props.resetCount} onClick={props.decreaseHandler} disabled={decButtonDisabledStatus} />
            <Button title={'RESET'} count={props.count} minCount={props.minCount} maxCount={props.maxCount}
                    resetCount={props.resetCount} onClick={props.resetHandler} disabled={resButtonDisabledStatus} />
            <Button title={'INC'} count={props.count} minCount={props.minCount} maxCount={props.maxCount}
                    resetCount={props.resetCount} onClick={props.increaseHandler} disabled={incButtonDisabledStatus} />

          </>
      }
    </div>
  )
}