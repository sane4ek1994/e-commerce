import React from 'react'

import { Header, Footer, Items } from './components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-gray.jpg',
          descr: 'lorem lorem lorem lorem',
          categories: 'chairs',
          price: 49.9
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          descr: 'lorem lorem lorem lorem',
          categories: 'chairs',
          price: 49.9
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          descr: 'lorem lorem lorem lorem',
          categories: 'chairs',
          price: 49.9
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'light.webp',
          descr: 'lorem lorem lorem lorem',
          categories: 'chairs',
          price: 49.9
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) isInArray = true
    })
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] })
  }

  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }
}

export default App
