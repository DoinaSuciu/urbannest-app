import React, { PropsWithChildren, memo } from 'react'
import classes from './Button.module.scss'

interface ButtonProps extends PropsWithChildren {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  type: 'button' | 'submit' | 'reset'
  style: object
  primarColorButton: boolean
}

const Button: React.FC<ButtonProps> = memo(function Button({
  onClick,
  type,
  style,
  children,
  primarColorButton = true
}: ButtonProps) {
  return (
    <button
      style={style}
      onClick={onClick}
      type={type}
      className={primarColorButton ? classes.button : classes.secondaryButton}
    >
      {children}
    </button>
  )
})

export default Button
