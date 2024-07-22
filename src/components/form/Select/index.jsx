import styles from './Select.module.css'

function Select({ name, text, options, handleonChange, value }) {
  return (
    <div className={ styles.form_control }>
      <label htmlFor={ name }>
        { text }
      </label>
      <select onChange={handleonChange}
        name={name}
        id={name}
        value={value || ''}>
          <option>Selecione uma opção</option>
          {options.map((option) => (
            <option value={option.id} key={option.id} >{option.name}</option>
          ))}
      </select>
    </div>
  )
}

export default Select