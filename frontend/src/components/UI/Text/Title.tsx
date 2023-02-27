import React, { memo } from 'react'
import styles from './Title.module.scss'
import classNames from 'classnames'

type TitleSize = 'default' | 'big' | 'middle'
type TitlePosition = 'default' | 'center'
type TitleWeight = 'default' | 'middle' | 'bold'

export type TitleProps = React.PropsWithChildren & {
  className?: string
  size?: TitleSize
  position?: TitlePosition
  weight?: TitleWeight
  as?: keyof JSX.IntrinsicElements | React.FC
}

const SIZE_TO_CLASS = {
  default: styles.title_size_default,
  big: styles.title_size_big,
  middle: styles.title_size_middle,
}

const POSITION_TO_CLASS = {
  default: styles.title_position_default,
  center: styles.title_position_center,
}

const POSITION_TO_WEIGHT = {
  default: styles.title_weight_default,
  middle: styles.title_weight_middle,
  bold: styles.title_weight_bold,
}

const Title: React.FC<TitleProps> = ({
  children,
  className,
  size = 'default',
  position = 'default',
  weight = 'default',
  as = 'h1',
}): JSX.Element => {
  const CustomTag = as

  return (
    <CustomTag
      data-testid="text-title"
      className={classNames(
        styles.title,
        SIZE_TO_CLASS[size],
        POSITION_TO_CLASS[position],
        POSITION_TO_WEIGHT[weight],
        className
      )}
    >
      {children}
    </CustomTag>
  )
}

export default memo(Title)
