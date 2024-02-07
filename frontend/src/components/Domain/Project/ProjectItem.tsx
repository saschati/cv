import { SocialNetworkList, SocialNetworkListProps } from 'components/Common/SocialNetwork'
import { Title } from 'components/UI/Text'
import useStaticPath from 'hooks/useStaticPath'
import React, { useMemo } from 'react'
import styles from './ProjectItem.module.scss'
import Info from 'components/Common/Info'

export type ProjectItemProps = {
  name: string
  description: string
  img: string
  involvementDuration: string
  links: SocialNetworkListProps['socials']
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  description,
  img,
  involvementDuration,
  links,
}): JSX.Element => {
  const assetImg = useStaticPath(img)
  const infos = useMemo(() => {
    return [
      {
        name: 'Involvement duration',
        value: involvementDuration,
      },
    ]
  }, [involvementDuration])

  return (
    <div className={styles.projectItem}>
      <div className={styles.projectItem__imgWrapper}>
        <img className={styles.projectItem__img} src={assetImg} loading="lazy" />
      </div>
      <Title className={styles.projectItem__name} as="h5" size="small">
        {name}
      </Title>
      <p className={styles.projectItem__desc}>{description}</p>
      <div className={styles.projectItem__involvementDuration}>
        <Info infos={infos} />
      </div>
      <div className={styles.projectItem__links}>
        <SocialNetworkList socials={links} size="lg" />
      </div>
    </div>
  )
}

export default ProjectItem
