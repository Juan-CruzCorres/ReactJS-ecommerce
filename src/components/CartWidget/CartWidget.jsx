import logo from "../../assets/pngwing.com.png";
import "./CartWidget.css"


const CartWidget = () => {
  return (
    <div className="navbar-logo" >
        <img className="navbar-logo__img" src={logo}/>
    </div>
  )
}

export default CartWidget