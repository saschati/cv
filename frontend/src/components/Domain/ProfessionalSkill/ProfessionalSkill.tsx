import { Title } from 'components/UI/Text'
import React, { useCallback, useMemo, useState } from 'react'
import styles from './ProfessionalSkill.module.scss'
import classNames from 'classnames/bind'
import Skills from './Skills'
import ViewSwitcher from './ViewSwitcher'
import useStorage, { StorageType } from 'hooks/useStorage'
import { PROFESSIONAL_SKILLS_VIEW_SWITCHER } from 'config/storage'
import { Switcher } from 'config/constants'

import me from 'app/service/me.json'

const cx = classNames.bind(styles)

const ProfessionalSkill: React.FC = (): JSX.Element => {
  const storage = useStorage(StorageType.LOCAL)

  const [switchType, setSwitchType] = useState<Switcher>(
    () => storage.get(PROFESSIONAL_SKILLS_VIEW_SWITCHER) || Switcher.Grid
  )

  const skills = useMemo(() => {
    const skills = [
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

    if (switchType === Switcher.Grid) {
      return skills
    }

    return skills
  }, [switchType])

  const handleViewSwitch = useCallback(
    (type: Switcher) => {
      storage.set(PROFESSIONAL_SKILLS_VIEW_SWITCHER, type)
      setSwitchType(type)
    },
    [storage]
  )

  return (
    <div className={styles.profSkill}>
      <div className={styles.profSkill__header}>
        <Title as={'h2'} weight="middle">
          Professional skills
        </Title>
        <ViewSwitcher active={switchType} onSwitch={handleViewSwitch} />
      </div>
      <div className={cx('profSkill__skills')}>
        {skills.map(({ area, ...skill }) => (
          <div className={cx(styles.profSkill__skill, area)} key={skill.name}>
            <Skills title={skill.name} skills={skill.infos} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfessionalSkill
