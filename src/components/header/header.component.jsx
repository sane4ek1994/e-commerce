import { useState } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

import { Order } from '../../components'

export const Header = props => {
  let [cartOpen, setCartOpen] = useState(false)

  const showOrders = props => {
    let total = 0
    props.orders.forEach(el => (total += Number.parseFloat(el.price)))
    return (
      <>
        {props.orders.map(el => (
          <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className='total-price'>Сумма: {new Intl.NumberFormat().format(total)}$</p>
      </>
    )
  }

  const showNoting = () => {
    return (
      <div className='empty'>
        <h2>Нет товаров</h2>
      </div>
    )
  }

  return (
    <header>
      <div>
        <span className='logo'>Home staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <RiShoppingCartLine
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-icon ${cartOpen && 'active'}`}
        />
        {cartOpen && <div className='shop-cart'>{props.orders.length > 0 ? showOrders(props) : showNoting()}</div>}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
