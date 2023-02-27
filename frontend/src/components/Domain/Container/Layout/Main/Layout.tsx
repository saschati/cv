import React from 'react'
import styles from './Layout.module.scss'
import LayoutProvider from '../Provider/LayoutProvider'
import Profile from 'components/Domain/Profile'
import ProfessionalSkill from 'components/Domain/ProfessionalSkill'

const Layout: React.FC = (): JSX.Element => {
  return (
    <LayoutProvider>
      <div className={styles.layout}>
        <header className={styles.layout__profile}>
          <Profile />
        </header>
        <main className={styles.layout__skills}>
          <ProfessionalSkill />
        </main>
      </div>
    </LayoutProvider>
  )
}

export default Layout
