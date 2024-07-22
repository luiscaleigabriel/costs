import { useEffect, useState } from 'react'
import Input from '../../form/Input'
import Select from '../../form/Select'
import ButtonSubmit from '../../form/ButtonSubmit'

function Form({ textButton, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})
  
  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        'content-Type': 'application/json'
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    //console.log(project)
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({...project, [e.target.name]: e.target.value})
  }

  function handleCategory(e) {
    setProject({...project, category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text
    }})
  }

  return (
    <form onSubmit={submit}>
      <Input
        name="name"
        type="text"
        text="Nome do projecto"
        value={project.name ? project.name : ''}
        placeholder="Insira o nome do projecto"
        handleonChange={handleChange}
      />
      <Input
        name="budget"
        type="number"
        text="Orçamento"
        value={project.budget ? project.budget : ''}
        placeholder="Insira o orçamento total"
        handleonChange={handleChange}
      />
      <Select
        text="Selecione a categoria"
        name="category_id"
        options={categories}
        value={project.category ? project.category.id : ''}
        handleonChange={handleCategory}
      />
      <ButtonSubmit text={textButton} />
    </form>
  )
}

export default Form