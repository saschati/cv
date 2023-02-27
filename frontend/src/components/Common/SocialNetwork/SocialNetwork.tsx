import React from 'react'
import styles from './SocialNetwork.module.scss'
import classNames from 'classnames'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type SocialNetworkProps = FontAwesomeIconProps & {
  className?: string
  as?: keyof JSX.IntrinsicElements | React.FC
}

const SocialNetwork: React.FC<SocialNetworkProps> = ({
  className,
  icon,
  as = 'a',
  ...rest
}): JSX.Element => {
  const CostumTag = as

  return (
    <CostumTag className={classNames(styles.socialNetwork, className)}>
      <FontAwesomeIcon icon={icon} {...rest} />
    </CostumTag>
  )
}

export default SocialNetwork
