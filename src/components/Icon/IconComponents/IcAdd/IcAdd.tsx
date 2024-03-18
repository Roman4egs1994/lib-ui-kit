import { IconProps, IconWrapper } from '../../IconWrapper'

export const IcAdd = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          height={'100%'}
          viewBox={'0 0 26 26'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4 11h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
