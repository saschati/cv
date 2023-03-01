import React from 'react'
import styles from './SocialNetwork.module.scss'
import classNames from 'classnames'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type SocialNetworkProps<T extends keyof JSX.IntrinsicElements> = FontAwesomeIconProps & {
  className?: string
  as?: T
  asProps?: JSX.IntrinsicElements[T]
}

const SocialNetwork = <T extends keyof JSX.IntrinsicElements>({
  className,
  icon,
  as,
  asProps,
  ...rest
}: SocialNetworkProps<T>): JSX.Element => {
  const CustomTag = (as as React.ElementType) || 'a'

  return (
    <CustomTag className={classNames(styles.socialNetwork, className)} {...asProps}>
      <FontAwesomeIcon icon={icon} {...rest} />
    </CustomTag>
  )
}

export default SocialNetwork
