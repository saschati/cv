import React, { useMemo } from 'react'
import styles from './Profile.module.scss'
import Avatar from './Avatar'
import { Title } from 'components/UI/Text'
import Info from './Info'
import dayjs from 'utils/dayjs'

import me from 'app/service/me.json'

const Profile: React.FC = (): JSX.Element => {
  const infos = useMemo(() => {
    const age = dayjs().diff(dayjs(me.birthday), 'year')
    const experience = dayjs().diff(dayjs(me.experience), 'year', true)

    return [
      {
        name: 'Position',
        value: me.position,
      },
      {
        name: 'Developer Experience',
        value: String(experience.toFixed(1)) + ' years',
      },
      {
        name: 'Age',
        value: String(age) + ' years',
      },
      {
        name: 'Education',
        value: me.education,
      },
    ]
  }, [])

  return (
    <div className={styles.profile}>
      <div className={styles.profile__avatar}>
        <Avatar img={me.avatar} />
      </div>
      <Title size="big" weight="bold" className={styles.profile__title}>
        {me.name}
      </Title>
      <div className={styles.profile__infos}>
        <Info infos={infos} />
      </div>
      <div className={styles.profile__about}>
        <Title as={'p'} weight="middle" size="middle" className={styles.profile__about}>
          About me
        </Title>
        <p className={styles.profile__description}>{me.description}</p>
      </div>
    </div>
  )
}

export default Profile
