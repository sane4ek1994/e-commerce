import React from 'react'
import { FaTrash } from 'react-icons/fa'

export const Order = props => {
  const { img, title, id, price, descr } = props.item
  return (
    <div className='item'>
      <img src={`./img/${img}`} alt={title} />
      <h2>{title}</h2>
      <p>{descr}</p>
      <b>{price}$</b>
      <FaTrash className='delete-icon' onClick={() => props.onDelete(id)} />
    </div>
  )
}
