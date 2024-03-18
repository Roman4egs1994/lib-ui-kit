import { IconProps, IconWrapper } from '../../IconWrapper'

export const IcClear = (allProps: IconProps) => {
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
              'm13.4 12 4.3-4.3a1 1 0 1 0-1.4-1.4L12 10.6 7.7 6.3a1 1 0 0 0-1.4 1.4l4.3 4.3-4.3 4.3A1 1 0 0 0 7 18a1 1 0 0 0 .7-.3l4.3-4.3 4.3 4.3a1 1 0 1 0 1.4-1.4L13.4 12Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
