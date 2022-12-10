import { Link } from "react-router-dom"

const Item = ({product}) => {

  return (
    
    <Link to={`/item/${product.id}`}>
            <div>

        <h2>{product.nombre}</h2>
        <p>{product.precio}</p>
        <p>{product.plataforma}</p>
            </div>
    </Link>
  )
}

export default Item