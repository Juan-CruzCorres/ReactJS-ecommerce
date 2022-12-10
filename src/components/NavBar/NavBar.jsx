import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import "./NavBar.css" 

const NavBar = () => {
  return (
          <div className="navbar-container">
  <Link to="/"> <h1 className="navbar-title">PROYECT GAMES</h1></Link>
    <ul className="navbar-list">
      <li>
        <NavLink to='/' className="list-item" >Inicio</NavLink>
      </li>
      <li>
        <NavLink to='/category/juegos' className="list-item" >Juegos</NavLink>
      </li>
      <li>
        <NavLink to='/category/tarjetas' className="list-item" >tarjetas</NavLink>
      </li>
      <li>
        <NavLink to='/category/ofertas' className="list-item">Ofertas</NavLink>
      </li>
    </ul>
    <Link to="/cart"> <CartWidget/> </Link>
         </div>

  )
}

export default NavBar