import React, { memo } from 'react'
import styles from './Switcher.module.scss'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export type SwitcherItem = {
  icon: FontAwesomeIconProps['icon']
  isActive: boolean
  onSwitch: React.MouseEventHandler<HTMLDivElement>
}

export type SwitcherProps = {
  items: Array<SwitcherItem>
}

const Switcher: React.FC<SwitcherProps> = ({ items }): JSX.Element => {
  return (
    <div className={styles.switcher}>
      {items.map(({ icon, isActive, onSwitch }, index) => (
        <div
          key={index}
          className={cx('switcher__item', { switcher__item_type_active: isActive })}
          onClick={onSwitch}
        >
          <div className={styles.switcher__icon}>
            <FontAwesomeIcon icon={icon} size="xs" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default memo(Switcher)
