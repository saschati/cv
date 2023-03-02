import Switcher from 'components/UI/Switcher'
import { Switcher as SwitcherEnum } from 'config/constants'
import React, { memo, useMemo } from 'react'
import icon from 'utils/icon'

export type ViewSwitcherProps = {
  onSwitch(type: 'list' | 'grid'): void
  active: 'list' | 'grid'
}

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ active, onSwitch }): JSX.Element => {
  const items = useMemo(() => {
    return [
      {
        icon: icon.solid.faTh,
        isActive: active === SwitcherEnum.Grid,
        onSwitch: () => onSwitch(SwitcherEnum.Grid),
      },
      {
        icon: icon.solid.faThList,
        isActive: active === SwitcherEnum.List,
        onSwitch: () => onSwitch(SwitcherEnum.List),
      },
    ]
  }, [onSwitch, active])

  return <Switcher items={items} />
}

export default memo(ViewSwitcher)
