import React, { PropsWithChildren, memo } from 'react'
import classes from './TabButton.module.scss'

interface ButtonProps extends PropsWithChildren {
  onSelect: React.MouseEventHandler<HTMLButtonElement>
  isSelected: boolean
}

const TabButton = memo(function TabButton({
  children,
  onSelect,
  isSelected,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${classes.selectedButton} ${isSelected && classes.active}`}
      {...props}
      onClick={onSelect}
    >
      {children}
    </button>
  )
})

export default TabButton
