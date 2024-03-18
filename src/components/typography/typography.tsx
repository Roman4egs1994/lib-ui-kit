import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

import s from './typography.module.scss'

export type VariantType =
  | 'Body1'
  | 'Body2'
  | 'Caption'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'Large'
  | 'Link1'
  | 'Link2'
  | 'Overline'
  | 'Subtitle1'
  | 'Subtitle2'

export type TypographyProps = {
  asChild?: boolean
  className?: string
  colorText?: 'colorDefault' | 'danger' | 'darkGray' | 'gray' | 'light100'
  variant?: VariantType
} & ComponentPropsWithoutRef<'p'>

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>((props, ref) => {
  const { asChild, className, colorText = 'colorDefault', variant = 'Body2', ...rest } = props

  const typographyClassName = clsx(s[variant], s[colorText], className && className)

  const Component: ElementType = asChild ? Slot : getComponent(variant)

  return <Component className={typographyClassName} {...rest} ref={ref} />
})

function getComponent(variant: VariantType) {
  switch (variant) {
    case 'Large':
      return 'span'

    case 'H1':
      return 'h1'

    case 'Body1':
    case 'Body2':
      return 'p'
    case 'Link1':
    case 'Link2':
      return 'a'
    default:
      return 'p'
  }
}
