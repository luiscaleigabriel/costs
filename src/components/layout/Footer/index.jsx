import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import style from './Footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
      <ul>
        <li>
          <a href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> 
        </li>
        <li>
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a> 
        </li>
      </ul>
      <p> Desenvolvido por <strong>Luís S. Calei Gabriel</strong> - <span>Costs</span> &copy;2024 </p>
    </footer>
  )
}

export default Footer