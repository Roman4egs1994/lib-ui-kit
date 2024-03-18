import { IconProps, IconWrapper } from '../../IconWrapper'

export const IcLogout = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 24 24'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path
            d={
              'M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6h1Zm13.8 5.4-2.8-4a1 1 0 1 0-1.6 1.2L18 11h-8a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4a1 1 0 0 0 0-1.2Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
