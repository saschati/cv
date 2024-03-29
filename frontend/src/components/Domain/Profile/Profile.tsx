import React, { useMemo } from 'react'
import styles from './Profile.module.scss'
import Avatar from './Avatar'
import { Title } from 'components/UI/Text'
import Info from '../../Common/Info'
import dayjs from 'utils/dayjs'
import icon from 'utils/icon'
import { SocialNetworkList } from 'components/Common/SocialNetwork'

import me from 'app/service/me.json'

const Profile: React.FC = (): JSX.Element => {
  const infos = useMemo(() => {
    const age = dayjs().diff(dayjs(me.birthday), 'year')

    return [
      {
        name: 'Position',
        value: me.position,
      },
      {
        name: 'Developer Experience',
        value: me.experience,
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

  const socials = useMemo(() => {
    return [
      {
        icon: icon.brands.faGithub,
        asProps: {
          href: me.socialNetworks.github,
        },
        popoverElement: 'Link to Github',
      },
      {
        icon: icon.brands.faLinkedin,
        asProps: {
          href: me.socialNetworks.linkedin,
        },
        popoverElement: 'Link to LinkedIn profile',
      },
      {
        icon: icon.brands.faTelegram,
        asProps: {
          href: me.socialNetworks.telegram,
        },
        popoverElement: 'Link to Telegram profile',
      },
      {
        icon: icon.regular.faEnvelope,
        asProps: {
          href: `mailto:${me.email}`,
        },
        popoverElement: 'Write to the mail',
      },
      {
        icon: icon.solid.faMobileAlt,
        asProps: {
          href: `tel:${me.phone}`,
        },
        popoverElement: 'Call the phone',
      },
    ]
  }, [])

  return (
    <div className={styles.profile}>
      <div className={styles.profile__avatar}>
        <Avatar img={me.avatar} />
      </div>
      <div className={styles.profile__header}>
        <Title size="big" weight="bold" className={styles.profile__title}>
          {me.name}
        </Title>
        <div className={styles.profile__socials}>
          <SocialNetworkList socials={socials} size="xl" color="var(--color-deep-blue)" />
        </div>
      </div>
      <div className={styles.profile__infos}>
        <Info infos={infos} />
      </div>
      <div className={styles.profile__languages}>
        <Title as={'p'} weight="middle" size="middle">
          Languages
        </Title>
        <div className={styles.profile__languagesInfos}>
          <Info infos={me.languages} />
        </div>
      </div>
      <div className={styles.profile__about}>
        <Title as={'p'} weight="middle" size="middle">
          About me
        </Title>
        <p className={styles.profile__description}>{me.description}</p>
      </div>
    </div>
  )
}

export default Profile
