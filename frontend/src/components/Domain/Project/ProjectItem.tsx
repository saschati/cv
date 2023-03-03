import { SocialNetworkList, SocialNetworkListProps } from 'components/Common/SocialNetwork'
import { Title } from 'components/UI/Text'
import React from 'react'
import styles from './ProjectItem.module.scss'

export type ProjectItemProps = {
  name: string
  description: string
  img: string
  links: SocialNetworkListProps['socials']
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  description,
  img,
  links,
}): JSX.Element => {
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectItem__imgWrapper}>
        <img className={styles.projectItem__img} src={img} loading="lazy" />
      </div>
      <Title className={styles.projectItem__name} as="h5" size="small">
        {name}
      </Title>
      <p className={styles.projectItem__desc}>{description}</p>
      <div className={styles.projectItem__links}>
        <SocialNetworkList socials={links} size="lg" />
      </div>
    </div>
  )
}

export default ProjectItem
