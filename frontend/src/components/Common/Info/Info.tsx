import React from 'react'
import styles from './Info.module.scss'

export type InfoOption = {
  name: string
  value: string
}

export type InfoProps = {
  infos: Array<InfoOption>
}

const Info: React.FC<InfoProps> = ({ infos }): JSX.Element => {
  return (
    <div className={styles.info}>
      {infos.map((info) => (
        <React.Fragment key={info.name}>
          <div className={styles.info__name}>{info.name}:</div>
          <div className={styles.info__value}>{info.value}</div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Info
