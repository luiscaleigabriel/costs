import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({ to, text, CustomClass }) {
  return (
    <Link className={ `${ styles.btn } ${ styles[CustomClass] } ` } to={ to }>
      { text }
    </Link>
  )
}

export default LinkButton