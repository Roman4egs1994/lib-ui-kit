import { ComponentPropsWithoutRef, ElementRef, ReactElement, ReactNode, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './selectItem.module.scss'

import { Typography } from '../../typography'

export type SelectItemProps = {
  children: ReactNode
  classNameItem?: string
} & Omit<ComponentPropsWithoutRef<typeof SelectRadix.Item>, 'asChild'>

export const SelectItem = forwardRef<ElementRef<typeof SelectRadix.Item>, SelectItemProps>(
  (props, ref): ReactElement => {
    const { children, classNameItem, ...otherProps } = props
    const classNames = {
      item: clsx(s.item, classNameItem),
    }

    return (
      <SelectRadix.Item className={classNames.item} ref={ref} {...otherProps}>
        <SelectRadix.ItemText>
          <Typography>{children}</Typography>
        </SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
