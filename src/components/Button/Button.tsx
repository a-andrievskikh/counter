import s from '../Button/Button.module.css'
import { ValuesType } from '../../App'

export type ButtonPropsType = {
  title: string
  values: ValuesType
  isActiveSet?: boolean
  onClickHandler?: () => void
  disabled: boolean
}
export const Button = (
  { title, values, isActiveSet, onClickHandler, disabled }: ButtonPropsType) => {

  const buttonStyle = `
    ${s.button}
    ${title === 'DEC' && values.startValue <= values.minValue ? s.disabled
    : title === 'RESET' && values.startValue === values.resetValue ? s.disabled
      : title === 'INC' && values.startValue >= values.maxValue ? s.disabled
        : title === 'SET' && isActiveSet ? s.disabled
          : ''}
    `

  return (
    title === 'SET' ? (
      <button className={buttonStyle}
              onClick={onClickHandler}
              disabled={disabled}
      >
        {title}
      </button>
    ) : (
      <button className={buttonStyle}
              onClick={onClickHandler}
              disabled={disabled}
      >
        {title}
      </button>
    )


  )
}