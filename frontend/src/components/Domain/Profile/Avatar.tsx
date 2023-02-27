import React from 'react'
import styles from './Avatar.module.scss'

export type AvatarProps = {
  img: string
}

const Avatar: React.FC<AvatarProps> = ({ img }): JSX.Element => {
  return (
    <div className={styles.avatar}>
      <img className={styles.avatar__img} src={img} />
    </div>
  )
}

export default Avatar
