import MainMenu from '@/components/main-menu/MainMenu'
import Center from '@/components/center/Center'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Center>
        <MainMenu />
      </Center>
    </main>
  )
}
