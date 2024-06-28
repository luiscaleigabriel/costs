import styles from './Input.module.css'

function Input({ type, name, text, handleonChange, value, placeholder }) {
  return (
    <div className={ styles.form_control }>
      <label htmlFor={ name }>
        { text }
      </label>
      <input 
        type={ type } 
        name={ name }
        id={ name }
        value={ value }
        placeholder={ placeholder }
        onChange={ handleonChange }
        />
    </div>
  )
}

export default Input
