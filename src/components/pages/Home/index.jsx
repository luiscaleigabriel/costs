import styles from './Home.module.css'
import savings from '../../../images/savings.svg'
import LinkButton from '../../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_containner}>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projectos agora mesmo!</p>
      <LinkButton CustomClass="effect" to="/newproject" text="Criar Projecto" />
      <img src={savings} alt="Costs" />
    </section>
  )
}

export default Home