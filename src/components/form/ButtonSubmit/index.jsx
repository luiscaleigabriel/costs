import styles from './ButtonSubmit.module.css'

function ButtonSubmit({ text }) {
  return (
    <>
      <button className={styles.submit} type="submit">{text}</button>
    </>
  )
}

export default ButtonSubmit