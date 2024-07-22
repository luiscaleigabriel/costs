import { useNavigate } from 'react-router-dom'
import Form from '../../project/Form'
import styles from  './NewProject.module.css'

function NewProject() {

  const navege = useNavigate()

  function createPost(project) {
    project.costs = 0 
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    }).then((resp) => resp.json())
    .then(data => {
      console.log(data)
      //redirect
      navege('/projects', { message: 'Projecto criado com sucesso!' })
    })
    .catch((error) => console.log(error))
  }

  return (
    <section className={styles.newproject_containner}>
      <h1>Criar Projecto</h1>
      <p>Crie seu projecto para depois adicionar os serviços</p>
      <Form handleSubmit={createPost} textButton='Criar Projecto' />
    </section>
  )
}

export default NewProject