import React, { ComponentPropsWithoutRef, ElementType, Ref, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './buttonIcon.module.scss'

import { IconProps } from '../Icon/IconWrapper'

type IconType = React.ReactElement<IconProps>

export type IconButtonProps<T extends ElementType = 'button'> = {
  as?: T
  backgroundEffect?: boolean
  children?: IconType
  className?: string
  icon?: string
  variant?: 'dark' | 'gray' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

const ButtonIconBase = <T extends ElementType>(
  props: IconButtonProps<T>,
  ref: Ref<HTMLButtonElement>
) => {
  const {
    as: Component = 'button',
    backgroundEffect = true,
    children,
    className,
    variant = 'secondary',
    ...rest
  } = props

  const iconButtonClasses = {
    button: clsx(
      s.button,
      variant && s[variant],
      backgroundEffect && s.backgroundEffect,
      !backgroundEffect && s.notBackgroundEffect,
      className && className
    ),
  }

  return (
    <Component className={iconButtonClasses.button} ref={ref} {...rest}>
      {children}
    </Component>
  )
}

export const ButtonIcon = forwardRef(ButtonIconBase)
