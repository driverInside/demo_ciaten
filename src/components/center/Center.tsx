import React from "react"

import styles from './Center.module.scss'

export default function Center({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.center}>{children}</div>
  )
}
