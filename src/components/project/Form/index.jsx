import Input from '../../form/Input'
import Select from '../../form/Select'
import styles from './Form.module.css'

function Form() {
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
        value="Criar projecto"
      />
      <Input
        name="btn"
        type="submit"
        value="Criar projecto"
      />
    </form>
  )
}

export default Form