import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useMemo } from 'react'
import icon from 'utils/icon'
import styles from './SkillTable.module.scss'

export type SkillRow = {
  name: string
  value: string | number | boolean
}

export type SkillTableProps = {
  rows: Array<SkillRow>
}

const SkillTable: React.FC<SkillTableProps> = ({ rows }): JSX.Element => {
  const skillRows = useMemo(() => {
    return rows.map((item) => {
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
    <div className={styles.skillTable}>
      {skillRows.map((row) => (
        <React.Fragment key={row.name}>
          <div className={styles.skillTable__column}>{row.name}</div>
          <div className={styles.skillTable__column}>{row.value}</div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default SkillTable
