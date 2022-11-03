import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css" 

const NavBar = () => {
  return (
          <div className="navbar-container">
<h1 className="navbar-title">PROYECT GAMES</h1>
    <ul className="navbar-list">
      <li>
        <a className="list-item" href="#">Inicio</a>
      </li>
      <li>
        <a className="list-item" href="#">Productos</a>
      </li>
      <li>
        <a className="list-item" href="#">Categorias</a>
      </li>
      <li>
        <a className="list-item" href="#">Ofertas</a>
      </li>
    </ul>

    <CartWidget/>
         </div>

  )
}

export default NavBar