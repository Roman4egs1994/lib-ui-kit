import { IconProps, IconWrapper } from '../../IconWrapper'

export const IcPause = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          height={'100%'}
          viewBox={'0 0 30px 30px'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <path d={'M12 38h8V10h-8v28zm16-28v28h8V10h-8z'} fill={'currentColor'} />
          <path d={'M0 0h48v48H0z'} fill={'currentColor'} />
        </svg>
      }
      {...restProps}
    />
  )
}
