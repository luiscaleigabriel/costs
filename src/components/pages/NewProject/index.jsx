import { useHistory } from 'react-router-dom'
import Form from '../../project/Form'
import styles from  './NewProject.module.css'

function NewProject() {~

  const history = useHistory();

  return (
    <section className={styles.newproject_containner}>
      <h1>Criar Projecto</h1>
      <p>Crie seu projecto para depois adicionar os serviços</p>
      <Form textButton='Criar Projecto' />
    </section>
  )
}

export default NewProject