import s from '../Button/Button.module.css'


export const Button = ({
                         title, isActiveSetBtn, onClickHandler,
                         onClickSetBtnHandler, disabled,
                       }: ButtonPT) => {

  const buttonStyles = `
    ${s.button}
    ${disabled ? s.disabled : ''}
    `

  return (
    title === 'SET' ? (
      <button className={buttonStyles}
              onClick={() => onClickSetBtnHandler?.(!isActiveSetBtn)}
              disabled={disabled}
      >
        {title}
      </button>
    ) : (
      <button className={buttonStyles}
              onClick={onClickHandler}
              disabled={disabled}
      >
        {title}
      </button>
    )
  )
}

// Types
export type ButtonPT = {
  title: string
  isActiveSetBtn?: boolean
  onClickHandler?: () => void
  onClickSetBtnHandler?: (value: boolean) => void
  disabled: boolean
}