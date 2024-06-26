import { Link } from 'react-router-dom'
import style from './Header.module.css'
import logo from '../../../images/logo.png'
import Container from '../Container'

function Header() {
  return (
    <nav className={style.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={style.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/company">Empresa</Link>
          </li>
          <li>
            <Link to="/projects">Projectos</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Header