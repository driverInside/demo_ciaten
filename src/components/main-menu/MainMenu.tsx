'use client'
import {
  FaChartLine,
  FaFacebookSquare,
  FaKeyboard,
  FaFileSignature,
  FaLink,
  FaListAlt,
  FaPause,
  FaSearch,
  FaSearchMinus,
  FaRegPaperPlane
} from "react-icons/fa"

import MenuItem from '../menu-item/MenuItem'

import styles from './MainMenu.module.scss'

export default function MainMenu() {
  return (
    <div className="container">
      <div className={styles.mainMenu}>
        <MenuItem title="Capturar Peticiones" path="/form" Icon={FaKeyboard} />
        <MenuItem title="Peticiones" path="/petitions" Icon={FaFileSignature} />
        <MenuItem title="Buscar" path="/search" Icon={FaSearch} />
        <MenuItem title="Enlaces" path="/links" Icon={FaLink} />
        <MenuItem title="Sin asunto" path="/no-subject" Icon={FaSearchMinus} />
        <MenuItem title="Por digitalizar" path="/digitalize" Icon={FaPause} />
        <MenuItem title="Por liberar" path="/release" Icon={FaRegPaperPlane} />
        <MenuItem title="Estadísticas" path="/stats" Icon={FaChartLine} />
        <MenuItem title="Redes sociales" path="/social-networks" Icon={FaFacebookSquare} />
        <MenuItem title="Catálogos" path="/cataloges" Icon={FaListAlt} />
      </div>
    </div>
  )
}
