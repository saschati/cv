import React from 'react'
import SocialNetwork, { type SocialNetworkProps } from './SocialNetwork'
import styles from './SocialNetworkList.module.scss'

type SocialNetworkPropsWithKeys = SocialNetworkProps<keyof JSX.IntrinsicElements>

export type SocialNetworkListProps = {
  socials: Array<Omit<SocialNetworkPropsWithKeys, 'size'>>
  size?: SocialNetworkPropsWithKeys['size']
  color?: SocialNetworkPropsWithKeys['color']
}

const SocialNetworkList: React.FC<SocialNetworkListProps> = ({
  socials,
  size,
  color,
}): JSX.Element => {
  return (
    <div className={styles.socialNetworkList}>
      {socials.map((social, index) => (
        <SocialNetwork key={index} color={color} {...social} size={size} />
      ))}
    </div>
  )
}

export default SocialNetworkList
