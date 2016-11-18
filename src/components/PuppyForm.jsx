import React, { Component } from 'react';
import style from './PuppyForm.css';

class PuppyForm extends Component {

  render(){
    console.log(this.props)
    return(
      <div id="puppy-form-container">
        <input
          type="text"
          placeholder="Enter your pup's name"
          value={this.props.name}
          onChange={this.props.updateNameForm}
        />
        <input
          type="text"
          placeholder="Enter silly GIF url"
          value={this.props.url}
          onChange={(event)=>this.props.updateUrlForm(event)}
        />
        <button>Adopt!</button>
      </div>
    )
  }
}

export default PuppyForm;
