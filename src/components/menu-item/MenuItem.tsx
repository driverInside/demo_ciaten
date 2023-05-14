'use client'
import { useRouter } from 'next/navigation'

import { IconBaseProps, IconType } from 'react-icons'
import { ComponentType, ReactElement } from 'react'

import styles from './MenuItem.module.scss'

type MenuItemProps = {
  Icon: ComponentType<IconBaseProps>,
  path: string,
  title: string
}

export default function MenuItem({ title, Icon, path }: MenuItemProps) {
  const router = useRouter()
  return (
    <div className={styles.menuItem} onClick={() => router.push(path)}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
    </div>
  )
}
