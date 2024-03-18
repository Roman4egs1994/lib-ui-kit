import { IconProps, IconWrapper } from '../../IconWrapper'

export const IcClose = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'none'}
          height={'100%'}
          viewBox={'0 0 26 26'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <g fill={'currentColor'}>
            <path
              d={'m4 4 16 16M20 4 4 20'}
              style={{
                fill: 'none',
                stroke: 'currentColor',
                strokeMiterlimit: 10,
                strokeWidth: 2,
              }}
            />
          </g>
        </svg>
      }
      {...restProps}
    />
  )
}
