import React from 'react'

import { Header, Footer, Items } from './components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpeg',
          descr: 'lorem lorem lorem lorem',
          categories: 'chairs',
          price: 49.9
        },
        {
          id: 2,
          title: 'Стол',
          img: 'chair-grey.jpeg',
          descr: 'lorem lorem lorem lorem',
          categories: 'chairs',
          price: 49.9
        },
        {
          id: 3,
          title: 'Диван',
          img: 'chair-grey.jpeg',
          descr: 'lorem lorem lorem lorem',
          categories: 'chairs',
          price: 49.9
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'chair-grey.jpeg',
          descr: 'lorem lorem lorem lorem',
          categories: 'chairs',
          price: 49.9
        }
      ]
    }
  }
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
  }
}

export default App
