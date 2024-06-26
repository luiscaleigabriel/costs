import style from './Container.module.css'

function Container({ children, customClass }) {
  return (
    <section className={`${style.container} ${style[customClass] }`}>
       { children }
    </section>
  )
}

export default Container