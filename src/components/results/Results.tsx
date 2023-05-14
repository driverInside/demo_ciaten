'use client'
import { useRouter } from 'next/navigation'

import { FaArrowAltCircleLeft, FaEdit } from 'react-icons/fa'

import styles from './Results.module.scss'

// TODO: move this definition to a file apart
type SearchResult = {
  number: number,
  id: string,
  turn: number,
  petitioner: string,
  address: string
}

export default function Results ({ results }: { results: SearchResult[] }) {
  const router = useRouter()

  return (
    <div className="container">
      <div className={styles.results}>
      <h2 className="title">Resultados de la búsqueda</h2>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Folio</th>
            <th>Turno</th>
            <th>Peticionario/asunto</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => (
            <tr key={result.id} className={styles.item} onClick={() => router.push(`/petitions/${result.id}`)}>
              <td>{result.number}</td>
              <td>{result.id}</td>
              <td>{result.turn}</td>
              <td>{result.petitioner}</td>
              <td>{result.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
            <a className="button is-light" onClick={() => router.push('/form')}>
              <span className="icon">
                <FaEdit />
              </span>
              <span>Nuevo</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
