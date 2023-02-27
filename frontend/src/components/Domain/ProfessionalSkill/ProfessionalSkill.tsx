import { Title } from 'components/UI/Text'
import React from 'react'
import styles from './ProfessionalSkill.module.scss'

const ProfessionalSkill: React.FC = (): JSX.Element => {
  return (
    <div className={styles.profSkill}>
      <Title as={'h2'} weight="middle">
        Professional skills
      </Title>
    </div>
  )
}

export default ProfessionalSkill
