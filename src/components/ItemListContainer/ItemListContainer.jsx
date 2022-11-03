import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    console.log(props);
    return(
    <div className='message-greeting__container'>
        <h2 className='message'>{props.messagetext}</h2>
    </div>
  )
}

export default ItemListContainer