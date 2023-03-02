import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Info from 'components/Common/Info'
import { Title } from 'components/UI/Text'
import React, { useMemo } from 'react'
import styles from './Skills.module.scss'
import icon from 'utils/icon'

export type SkillOption = {
  name: string
  value: string | boolean | number
}

export type SkillsProps = {
  skills: Array<SkillOption>
  title: string
}

const Skills: React.FC<SkillsProps> = ({ skills, title }): JSX.Element => {
  const infos = useMemo(() => {
    return skills.map((item) => {
      if (item.value === true) {
        const newItem = {
          name: item.name,
          value: <FontAwesomeIcon icon={icon.solid.faCheck} size="sm" />,
        }

        return newItem
      }

      const newItem = {
        name: item.name,
        value: String(item.value),
      }

      return newItem
    })
  }, [])

  return (
    <div className={styles.skills}>
      <div className={styles.skills__title}>
        <Title as={'h3'} size="middle" weight="middle">
          {title}
        </Title>
      </div>
      <div className={styles.skills__info}>
        <Info infos={infos} />
      </div>
    </div>
  )
}

export default Skills
