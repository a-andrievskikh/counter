import s from '../Button/Button.module.css'
import { ValuesType } from '../../App'

export type ButtonPropsType = {
  title: string
  values: ValuesType
  isActiveSet?: boolean
  onClickHandler?: () => void
  onClickSetButtonHandler?: (value: boolean) => void
  disabled: boolean
}
export const Button = (
  { title, values, isActiveSet, onClickHandler, onClickSetButtonHandler, disabled }: ButtonPropsType) => {

  const buttonStyle = `
    ${s.button}
    ${title === 'DEC' && (values.counterValue <= values.minValue || values.minValue >= values.maxValue) ? s.disabled
    : title === 'RESET' && values.counterValue === values.resetValue ? s.disabled
      : title === 'INC' && (values.counterValue >= values.maxValue || values.maxValue <= values.minValue) ? s.disabled
        : title === 'SET' && (isActiveSet || isActiveSet || values.startValue < values.minValue || values.startValue > values.maxValue) ? s.disabled
          : ''}
    `

  return (
    title === 'SET' ? (
      <button className={buttonStyle}
              onClick={() => {
                isActiveSet = true
                onClickSetButtonHandler?.(isActiveSet)
              }}
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