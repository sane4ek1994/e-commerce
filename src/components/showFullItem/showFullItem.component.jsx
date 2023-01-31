import React from 'react'

export class ShowFullItem extends React.Component {
  render() {
    return (
      <div className='full-item'>
        <div>
          <img
            src={`./img/${this.props.item.img}`}
            alt={this.props.item.title}
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.descr}</p>
          <b>{this.props.item.price}$</b>
          <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>
            +
          </div>
        </div>
      </div>
    )
  }
}
