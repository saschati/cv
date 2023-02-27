import React, { useState } from 'react'
import styles from './SocialNetwork.module.scss'
import classNames from 'classnames'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type SocialNetworkProps<T extends keyof JSX.IntrinsicElements> = FontAwesomeIconProps & {
  className?: string
  as?: T
  asProps?: JSX.IntrinsicElements[T]
  popoverElement?: JSX.Element | string
}

const SocialNetwork = <T extends keyof JSX.IntrinsicElements>({
  className,
  icon,
  as,
  asProps,
  popoverElement,
  ...rest
}: SocialNetworkProps<T>): JSX.Element => {
  const CustomTag = (as as React.ElementType) || 'a'

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={classNames(styles.socialNetwork, className)}
      onMouseEnter={() => popoverElement && setIsOpen(true)}
      onMouseLeave={() => popoverElement && setIsOpen(false)}
    >
      <CustomTag className={styles.socialNetwork__icon} {...asProps}>
        <FontAwesomeIcon icon={icon} {...rest} />
      </CustomTag>
      {popoverElement && isOpen && (
        <div className={styles.socialNetwork__popover}>{popoverElement}</div>
      )}
    </div>
  )
}

export default SocialNetwork
