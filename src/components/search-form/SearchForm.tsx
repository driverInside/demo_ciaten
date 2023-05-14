'use client'
import { useRouter } from 'next/navigation'

import { FaArrowAltCircleLeft, FaUserAlt, FaSearch } from 'react-icons/fa'

import styles from './SearchForm.module.scss'

export default function SearchForm() {
  const router = useRouter()

  return (
    <div className="container">
      <div className={styles.searchForm}>
        <h2 className={styles.title}>Buscar peticionario</h2>
        <form>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input className="input is-medium" type="text" placeholder="Ej. Becerril Franco, Guadalupe" />
              <span className="icon is-small is-left">
                <FaUserAlt />
              </span>
            </div>
          </div> {/* input */}
          
          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <a className="button is-light" onClick={() => router.back()}>
                <span className="icon">
                  <FaArrowAltCircleLeft />
                </span>
                <span>Regresar</span>
              </a>
            </p>
            <p className="control">
              <a className="button is-light" onClick={() => router.push('/results')}>
                <span className="icon">
                  <FaSearch />
                </span>
                <span>Buscar</span>
              </a>
            </p>
          </div> {/* buttons */}
        </form>
      </div>      
    </div>
  )
}
