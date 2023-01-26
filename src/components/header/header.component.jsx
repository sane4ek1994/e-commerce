import { useState } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'

export const Header = () => {
  let [cartOpen, setCartOpen] = useState(false)

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
        {cartOpen && <div className='shop-cart'></div>}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
