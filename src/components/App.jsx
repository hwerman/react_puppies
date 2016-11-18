// import the libs we need
import React, { Component } from 'react';
import PuppyForm from './PuppyForm.jsx';
import PuppyList from './PuppyList.jsx';
import './normalize.css';
import style from './App.css';

// create a React Component called _App_
class App extends Component {
  constructor(){
    super();

    this.state ={
      puppies: [],
      nameForm:'',
      urlForm: '',
    }
  }

  getAllPuppies(){
    fetch(`/api/puppies`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        puppies: data
      })
    })
    .catch(err=> console.log(err))
  }

  handleAbandonment(id){
    fetch(`/api/puppies/${id}`, {
      method: 'delete'
    })
    .then(()=> {
      const puppies = this.state.puppies.filter((pup)=> {
        return pup.id !== id;
      })
      this.setState({ puppies: puppies })
    })
    .catch(err=>console.log(err));
  }

  updateNameForm(e) {
    this.set.State({
      nameForm: e.target.value
    });
  }
  //^you have to create this function here because there's no way you can use this.setState in PuppyForm
  //in order for it to actualy be brought to PuppyForm. state doesn't belong to PuppyForm, belongs to App.jsx

  updateUrlForm(e) {
    this.set.State({
      urlForm: e.target.value
    });
  }

  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Welcome to Puppies API</h1>
        </header>
              <PuppyForm
                name={this.state.nameForm}
                url={this.state.urlForm}
                updateNameForm={event => this.updateNameForm(event)}
                updateUrlForm={this.updateUrlForm.bind(this)}
              />
              <PuppyList
                getAllPuppies={this.getAllPuppies.bind(this)}
                puppies={this.state.puppies}
                handleAbandonment={this.handleAbandonment.bind(this)}
              />
      </div>
    );
  }
}

//^updateUrlForm way is the way you're passing a function definition
//^the proper way to pass it is the UpdateNameForm way; you're doing the event in the app.jsx)
export default App;
