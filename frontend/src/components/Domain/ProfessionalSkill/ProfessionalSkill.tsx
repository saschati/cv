import { Title } from 'components/UI/Text'
import React, { useMemo, useState } from 'react'
import styles from './ProfessionalSkill.module.scss'
import classNames from 'classnames/bind'
import Skills from './Skills'
import useStorage, { StorageType } from 'hooks/useStorage'
import { PROFESSIONAL_SKILLS_VIEW_SWITCHER } from 'config/storage'
import { Switcher } from 'config/constants'
import SkillTable, { type SkillRow } from './SkillTable'

import me from 'app/service/me.json'
import useLayout from 'hooks/useLayout'
import { Device } from '../Container/Layout/Provider'

type Skill = {
  name: string
  area: string
  infos: Array<{ name: string; value: string | number | boolean }>
}

const cx = classNames.bind(styles)

const ProfessionalSkill: React.FC = (): JSX.Element => {
  const storage = useStorage(StorageType.LOCAL)
  const { device } = useLayout()

  const [switchType] = useState<Switcher>(
    () => storage.get(PROFESSIONAL_SKILLS_VIEW_SWITCHER) || Switcher.Grid
  )

  const isAdaptive = useMemo(() => {
    return [Device.DESCTOP, Device.LAPTOP, Device.TABLET].includes(device)
  }, [device])

  const skills = useMemo(() => {
    const skills: Array<Skill> = [
      {
        name: 'Frontend',
        area: 'profSkill__skill_name_frontend',
        infos: me.skills.frontend,
      },
      {
        name: 'Backend',
        area: 'profSkill__skill_name_backend',
        infos: me.skills.backend,
      },
      {
        name: 'Database',
        area: 'profSkill__skill_name_db',
        infos: me.skills.db,
      },
      {
        name: 'Ides',
        area: 'profSkill__skill_name_ides',
        infos: me.skills.ides,
      },
      {
        name: 'CI/CD',
        area: 'profSkill__skill_name_cicd',
        infos: me.skills.ci_cd,
      },
      {
        name: 'Web servers',
        area: 'profSkill__skill_name_ws',
        infos: me.skills.webservers,
      },
      {
        name: 'Others',
        area: 'profSkill__skill_name_other',
        infos: me.skills.other,
      },
    ]

    if (switchType === Switcher.Grid && isAdaptive) {
      return skills
    }

    return skills.reduce((acc: Array<SkillRow>, curr) => acc.concat(curr.infos), [])
  }, [switchType, isAdaptive])

  return (
    <div className={styles.profSkill}>
      <div className={styles.profSkill__header}>
        <Title as={'h2'} weight="middle">
          Professional skills
        </Title>
      </div>
      <div
        className={cx(
          'profSkill__skills',
          switchType === Switcher.Grid && isAdaptive
            ? 'profSkill__skills_format_grid'
            : 'profSkill__skills_format_table'
        )}
      >
        {switchType === Switcher.Grid && isAdaptive ? (
          (skills as Array<Skill>).map(({ area, ...skill }) => (
            <div className={cx(styles.profSkill__skill, area)} key={skill.name}>
              <Skills title={skill.name} skills={skill.infos} />
            </div>
          ))
        ) : (
          <SkillTable rows={skills as Array<SkillRow>} />
        )}
      </div>
    </div>
  )
}

export default ProfessionalSkill
