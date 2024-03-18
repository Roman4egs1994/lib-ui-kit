import React, { ChangeEvent, ComponentProps, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import s from './textField.module.scss'

import { useId } from '../../common/hooks/useId'
import { IcClear, IcCloseEye, IcOpenEye, IcSearch } from '../Icon'
import { IconProps } from '../Icon/IconWrapper'
import { ButtonIcon, IconButtonProps } from '../buttonIcon'

export type BaseTextFieldProps = {
  defaultValue?: readonly string[] | string | undefined
  disabled?: boolean
  error?: boolean | null | string
  fullwidth?: boolean
  id?: string
  label?: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChangeText?: (value: string) => void
  onClickSearch?: () => void
  onEnter?: () => void
  placeholder?: string
  textFieldClassName?: string
  triggerEnd?: React.ReactElement<IconButtonProps | IconProps>
  type?: 'password' | 'search' | 'text'
} & Omit<ComponentProps<'input'>, 'type'>

export const TextField = forwardRef<HTMLInputElement, BaseTextFieldProps>((props, ref) => {
  const {
    defaultValue,
    disabled,
    error,
    fullwidth,
    id,
    label,
    onBlur: customOnBlur,
    onChange,
    onChangeText,
    onClickSearch,
    onEnter,
    onKeyDown,
    placeholder,
    textFieldClassName,
    triggerEnd,
    type = 'text',
    ...respProps
  } = props

  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const showClearButton = value.length! > 0
  const textFieldType = type === 'password' && showPassword ? 'text' : type
  const textFieldId = useId(id, 'textField')

  const onClickHandleShowPass = () => {
    setShowPassword(!showPassword)
  }
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    const value = e.currentTarget.value

    onChangeText?.(value)
    setValue(value)
  }
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    customOnBlur?.(e)
  }
  const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === 'password' && e.key === 'Enter' && !showPassword) {
      e.preventDefault()
      onEnter && onEnter()
    } else if (e.key === 'Enter') {
      onEnter && onEnter()
    }
  }

  const onClickHandlerSearchButton = () => {
    if (type === 'search' && onClickSearch && !disabled) {
      onClickSearch()
    }
  }

  const onClickClearSearchText = () => {
    if (!disabled) {
      setValue('')
    }
  }

  const classNames = {
    btnClear: clsx(type === 'search' && s.btnClear, label && s.withLabel),
    btnSearch: clsx(
      type === 'search' && s.btnSearch,
      label && s.withLabel,
      fullwidth && s.btnSearchWithFullWidth
    ),
    button: clsx(s.button),
    error: clsx(s.error, disabled && s.errorWithDisabled),
    iconSearch: clsx(s.iconSearch),
    iconShowPass: clsx(s.iconShowPass),
    label: clsx(s.labelText, disabled && s.labelWithDisabled),
    showPassBtn: clsx(s.showPassBtn),
    showPassword: clsx(s.showPassword, label && s.withLabel, fullwidth && s.showPassWithFullwidth),
    textField: clsx(
      s.textField,
      fullwidth && s.fullwidth,
      error && s.errorText,
      type === 'password' && s.withShowPassword,
      type === 'search' && s.withSearchType,
      triggerEnd && s.withTriggerEnd,
      textFieldClassName
    ),
    textFieldWrapper: clsx(s.textFieldWrapper, fullwidth && s.fullwidth),
    triggerEnd: clsx(s.triggerEnd, label && s.withLabel, fullwidth && s.triggerEndWithFullwidth),
  }

  /** If we use defaultValue, then the value is disabled  */
  const inputValue = defaultValue !== undefined ? defaultValue : value

  return (
    <div className={classNames.textFieldWrapper}>
      {type === 'search' && (
        <>
          <ButtonIcon
            className={classNames.btnSearch}
            disabled={disabled}
            onClick={onClickHandlerSearchButton}
            variant={'secondary'}
          >
            <IcSearch className={classNames.iconSearch} size={1.3} />
          </ButtonIcon>
          {showClearButton && (
            <ButtonIcon
              className={classNames.btnClear}
              disabled={disabled}
              onClick={onClickClearSearchText}
              type={'reset'}
            >
              <IcClear size={1.3} />
            </ButtonIcon>
          )}
        </>
      )}
      {label && (
        <label className={classNames.label} htmlFor={textFieldId}>
          {label}
        </label>
      )}
      <input
        className={classNames.textField}
        defaultValue={defaultValue}
        disabled={disabled}
        id={textFieldId}
        onBlur={onBlurCallback}
        onChange={onChangeCallback}
        onKeyDown={onKeyPressCallback}
        placeholder={placeholder}
        ref={ref}
        type={textFieldType}
        {...(defaultValue !== undefined ? {} : { value: inputValue })}
        {...respProps}
      />
      {error && (
        <span className={classNames.error} id={textFieldId}>
          {error}
        </span>
      )}
      {triggerEnd && <div className={classNames.triggerEnd}>{triggerEnd}</div>}
      {type === 'password' && (
        <div className={classNames.showPassword}>
          {showPassword ? (
            <ButtonIcon
              className={classNames.showPassBtn}
              disabled={disabled}
              onClick={onClickHandleShowPass}
            >
              <IcCloseEye className={classNames.iconShowPass} size={1.3} />
            </ButtonIcon>
          ) : (
            <ButtonIcon
              className={classNames.showPassBtn}
              disabled={disabled}
              onClick={onClickHandleShowPass}
            >
              <IcOpenEye className={classNames.iconShowPass} size={1.3} />
            </ButtonIcon>
          )}
        </div>
      )}
    </div>
  )
})
