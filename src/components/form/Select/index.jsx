import styles from './Select.module.css'

function Select({ name, text, options, handleonChange, value }) {
  return (
    <div className={ styles.form_control }>
      <label htmlFor={ name }>
        { text }
      </label>
      <select 
        name={name}
        id={name}>
          <option disabled selected>Selecione uma opção</option>
      </select>
    </div>
  )
}

export default Select