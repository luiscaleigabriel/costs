import { useEffect, useState } from 'react'

import Input from '../../form/Input'
import Select from '../../form/Select'
import ButtonSubmit from '../../form/ButtonSubmit'

function Form({ textButton }) {
  const [categories, setCategories] = useState([])
  
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

  return (
    <form>
      <Input
        name="name"
        type="text"
        text="Nome do projecto"
        placeholder="Insira o nome do projecto"
      />
      <Input
        name="budget"
        type="number"
        text="Orçamento"
        placeholder="Insira o orçamento total"
      />
      <Select
        text="Selecione a categoria"
        name="category_id"
        options={categories}
      />
      <ButtonSubmit text={textButton} />
    </form>
  )
}

export default Form