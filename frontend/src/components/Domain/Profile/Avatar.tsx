import useStaticPath from 'hooks/useStaticPath'
import React from 'react'
import styles from './Avatar.module.scss'

export type AvatarProps = {
  img: string
}

const Avatar: React.FC<AvatarProps> = ({ img }): JSX.Element => {
  const assetImg = useStaticPath(img)

  return (
    <div className={styles.avatar}>
      <img className={styles.avatar__img} src={assetImg} />
    </div>
  )
}

export default Avatar
