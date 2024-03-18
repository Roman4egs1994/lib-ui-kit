import { IconProps, IconWrapper } from '../../IconWrapper'

export const IcSave = (allProps: IconProps) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          height={'100%'}
          viewBox={'0 -960 960 960'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          // viewBox={'0 0 24 24'}
          {...props}
        >
          <path
            d={
              'M820-672v460q0 30-21 51t-51 21H212q-30 0-51-21t-21-51v-536q0-30 21-51t51-21h460l148 148ZM480-269q42 0 71-29 29-30 29-71t-29-71q-29-29-71-29t-71 29q-29 29-29 71t29 71q29 29 71 29ZM255-565h329v-140H255v140Z'
            }
            fill={'currentColor'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}
