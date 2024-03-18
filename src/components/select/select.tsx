import { ComponentPropsWithoutRef, ElementRef, ReactElement, forwardRef } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { useId } from '../../common/hooks/useId'
import { Loadings } from '../loading'
import { Typography, VariantType } from '../typography'
import { SelectItemProps } from './SelectItem'

type SelectProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactElement<SelectItemProps> | ReactElement<SelectItemProps>[]
  classNameContent?: string
  classNameTrigger?: string
  disabled?: boolean
  id?: string
  label?: string
  loading?: boolean
  maxHeight?: 'fourtyVh'
  placeholder?: string
  position?: 'item-aligned' | 'popper'
  scrollBtn?: boolean
  side?: 'bottom' | 'left' | 'right' | 'top'
  variantLabel?: VariantType
} & Omit<ComponentPropsWithoutRef<typeof SelectRadix.Root>, 'asChild'>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  (props, ref): ReactElement => {
    const {
      align = 'start',
      children,
      classNameContent,
      classNameTrigger,
      disabled,
      id,
      label,
      loading,
      maxHeight,
      placeholder,
      position = 'popper',
      scrollBtn = true,
      side = 'bottom',
      variantLabel = 'Caption',
      ...restProps
    } = props
    const selectId = useId(id, 'select')
    const classNames = {
      content: clsx(s.content, classNameContent, maxHeight && s[maxHeight]),
      items: clsx(s.items),
      label: clsx(s.label, disabled && s.disabled),
      selectScrollButton: clsx(s.selectScrollButton),
      spinner: clsx(s.spinner),
      trigger: clsx(s.trigger, classNameTrigger && classNameTrigger),
      triggerIcon: clsx(s.triggerIcon, disabled && s.disabled, loading && s.loading),
      wrapper: clsx(s.wrapper),
    }

    return (
      <>
        <div className={classNames.wrapper}>
          {label && (
            <Typography asChild className={classNames.label} variant={variantLabel}>
              <label htmlFor={selectId}>{label}</label>
            </Typography>
          )}
          <SelectRadix.Root {...restProps}>
            <SelectRadix.Trigger
              className={classNames.trigger}
              disabled={disabled}
              id={selectId}
              ref={ref}
            >
              <Typography asChild>
                <SelectRadix.Value placeholder={placeholder} />
              </Typography>
              {loading && <Loadings className={classNames.spinner} />}
              <SelectRadix.Icon className={classNames.triggerIcon}>
                <ChevronDownIcon />
              </SelectRadix.Icon>
            </SelectRadix.Trigger>

            <SelectRadix.Portal>
              <SelectRadix.Content
                align={align}
                className={classNames.content}
                position={position}
                side={side}
                sideOffset={-6}
              >
                {scrollBtn && (
                  <SelectRadix.ScrollUpButton className={classNames.selectScrollButton}>
                    <ChevronUpIcon />
                  </SelectRadix.ScrollUpButton>
                )}
                <SelectRadix.Viewport>
                  {children}
                  <SelectRadix.Separator />
                </SelectRadix.Viewport>
                {scrollBtn && (
                  <SelectRadix.ScrollDownButton className={classNames.selectScrollButton}>
                    <ChevronDownIcon />
                  </SelectRadix.ScrollDownButton>
                )}
                <SelectRadix.Arrow />
              </SelectRadix.Content>
            </SelectRadix.Portal>
          </SelectRadix.Root>
        </div>
      </>
    )
  }
)
