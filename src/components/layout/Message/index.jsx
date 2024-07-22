import styles from './Message.module.css'

export default function Message({ msg, type }) {
  return (
    <div className={styles.message}>
      <span>{ msg }</span>
    </div>
  )
}