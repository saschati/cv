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
        case 'linkedin':
          return icon.brands.faLinkedin
        default:
          throw new Error('Social type not found.')
      }
    }

    const socialToPopover = (type: ProjectSocialType) => {
      switch (type) {
        case 'github':
          return 'View the code on Github'
        case 'npm':
          return 'View the library on NPM'
        case 'link':
          return 'View the site via the link'
        case 'linkedin':
          return 'View the profile on LinkedIn'
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
        involvementDuration: project.involvementDuration,
        links: links.map((social: ProjectSocial) => ({
          icon: socialToFaIcon(social.type),
          asProps: {
            href: social.href,
            target: '_blank',
          },
          popoverElement: socialToPopover(social.type),
        })),
      }
    })
  }, [])

  return (
    <div className={styles.project}>
      <Title as="h3" weight="middle">
        Projects & Companies
      </Title>
      <div className={styles.project__items}>
        {projects.map((project) => (
          <div key={project.name} className={styles.project__item}>
            <ProjectItem {...project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
