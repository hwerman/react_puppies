import React, { Component } from 'react';
import style from './PuppyListItem.css';

class PuppyListItem extends Component{

  render(){
    return(
      <div className="puppy-list-item">
        <h4>
          {this.props.name}
        </h4>
        <div id="puppy-image">
          <img src={this.props.url} alt={this.props.name}/>
        </div>
        <p>Likes: {this.props.likes}</p>
        <button>Like!</button>
        <button onClick={() => this.props.handleAbandonment(this.props.id)}>Abandon!</button>
      </div>
    )
  }
}

export default PuppyListItem;
