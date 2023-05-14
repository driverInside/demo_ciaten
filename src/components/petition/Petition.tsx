import { useState } from 'react'

import styles from './Petition.module.scss'

// TODO: move this definition to a file apart
type SearchResult = {
  number: number,
  id: string,
  turn: number,
  petitioner: string,
  address: string
}

export default function Petition({ petition }: { petition?: SearchResult }) {
  return (
    <div className="container">
      <div className={styles.petition}>
        <form>
          {/* <div className="control">
            <label>No.</label>
            <input className="input" name="number" type="text" placeholder="Text input" value={petition.number} />
          </div> */}
        </form>
        <div>{petition?.number}</div>
        <div>{petition?.id}</div>
        <div>{petition?.turn}</div>
        <div>{petition?.petitioner}</div>
        <div>{petition?.address}</div>
      </div>
    </div>
  )
}
