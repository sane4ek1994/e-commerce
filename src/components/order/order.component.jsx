import React from 'react'

export const Order = props => {
  return (
    <div className='item'>
      <img src={`./img/${props.item.img}`} alt={props.item.title} />
      <h2>{props.item.title}</h2>
      <p>{props.item.descr}</p>
      <b>{props.item.price}$</b>
    </div>
  )
}
