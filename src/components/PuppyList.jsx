import React, { Component } from 'react';
import style from './PuppyList.css'
import PuppyListItem from './PuppyListItem.jsx';

class PuppyList extends Component{

  renderAllPuppies(){
    return this.props.puppies.map((pup, i) =>
      <PuppyListItem
        handleAbandonment={this.props.handleAbandonment}
        likes={pup.likes}
        name={pup.name}
        url={pup.url}
        id={pup.id}
        key={i}
      />
    )
  }

  componentWillMount(){
    this.props.getAllPuppies();
  }

//have to invoke it in componentWillMount
//will be built right before its rendered

  render(){
    console.log(this.props)
    return(
      <div id="puppy-list-container">
        {this.renderAllPuppies()}
      </div>
    )
  }
}

export default PuppyList;
