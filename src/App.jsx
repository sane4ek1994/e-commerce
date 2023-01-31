import React from 'react'

import { Header, Footer, Items } from './components'
import { Categories } from './components/categories/categories.component'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-gray.jpg',
          descr: 'lorem lorem lorem lorem',
          category: 'chairs',
          price: 49.9
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          descr: 'lorem lorem lorem lorem',
          category: 'table',
          price: 49.9
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          descr: 'lorem lorem lorem lorem',
          category: 'sofa',
          price: 49.9
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'light.webp',
          descr: 'lorem lorem lorem lorem',
          category: 'light',
          price: 49.9
        }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
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
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }
}

export default App
