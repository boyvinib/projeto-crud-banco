import { Link } from "react-router-dom"
import Container from "./Container" 
import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar () {
    return (
        <nav className={styles.navbar}>
            <Container>
        <Link to="/"><img src={logo} alt="santander"/></Link>
        <ul className={styles.list}>
            <li className={styles.item}>
            <Link to="/">Home</Link>      
            </li>
            <li className={styles.item}>
            <Link to="/CadastrarCliente">Cadastrar cliente</Link>    
            </li>
            <li className={styles.item}>
            <Link to="/ListaCliente">Visualizar clinetes</Link>
            </li>
            <li className={styles.item}>
            <Link to="/OProjeto">O Projeto</Link>
            </li>
        </ul>
            </Container>
      </nav>
    )
}

export default Navbar