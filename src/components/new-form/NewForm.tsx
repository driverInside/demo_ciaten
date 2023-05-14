import styles from './NewForm.module.scss'

export default function NewForm() {
  return (
    <div className="container">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aliquid aspernatur amet repellendus voluptatibus dolore quaerat, sit eum deserunt iste sed provident quo est velit delectus quas, impedit dolor cumque.</p>
      <div className="columns is-gapless is-mobile is-multiline">
        <div className={`column is-one-quarter ${styles.foo}`}>
          <code>is-one-quarter</code>
        </div>
        <div className={`column is-half ${styles.foo}`}>
          <code>is-half</code>
        </div>
      </div>

    </div>
  )
}
