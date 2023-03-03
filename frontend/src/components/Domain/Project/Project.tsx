import { Title } from 'components/UI/Text'
import React, { useMemo } from 'react'
import styles from './Project.module.scss'
import ProjectItem from './ProjectItem'
import icon from 'utils/icon'
import type { ProjectSocialType, ProjectSocial } from 'types/app/model'

import me from 'app/service/me.json'

const Project: React.FC = (): JSX.Element => {
  const projects = useMemo(() => {
    const projects = me.projects

    const socialToFaIcon = (type: ProjectSocialType) => {
      switch (type) {
        case 'github':
          return icon.brands.faGithub
        case 'npm':
          return icon.brands.faNpm
        case 'link':
          return icon.solid.faLink
        default:
          throw new Error('Social type not found.')
      }
    }

    return projects.map((project) => {
      const links = project.social as Array<ProjectSocial>

      return {
        name: project.name,
        description: project.description,
        img: project.img,
        links: links.map((social: ProjectSocial) => ({
          icon: socialToFaIcon(social.type),
          asProps: {
            href: social.href,
            target: '_blank',
          },
        })),
      }
    })
  }, [])

  return (
    <div className={styles.project}>
      <Title as="h3" weight="middle">
        Projects
      </Title>
      <div className={styles.project__items}>
        {projects.map((project) => (
          <ProjectItem key={project.name} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Project
