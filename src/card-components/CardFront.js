import React, { Component } from 'react';

export default class CardFront extends Component {

  render(props) {
    // console.log( "CardFront", this.props)
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
