import Form from '../../project/Form'
import styles from  './NewProject.module.css'

function NewProject() {
  return (
    <section className={styles.newproject_containner}>
      <h1>Criar Projecto</h1>
      <p>Crie seu projecto para depois adicionar os serviços</p>
      <Form />
    </section>
  )
}

export default NewProject