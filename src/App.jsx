import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

function App() {

  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/company">Sobre</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/newproject">novo projecto</Link>
      </ul>
      <p>Footer</p>
    </Router>
  )
}

export default App
