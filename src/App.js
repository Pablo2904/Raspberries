import React, { Component } from 'react';
import MainPage from './Components/MainPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PopUp from './Components/PopUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopUp: false,
      email: '',
      password: ''
    };
  }

  showPopUp = () => {
    this.setState({
      isPopUp: true
    });
  };

  handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  submitToApi = e => {
    e.preventDefault();
    const url =
      'https://cors-anywhere.herokuapp.com/http://recruitment-api.pyt1.stg.jmr.pl/login';
    const data = {
      login: this.state.email,
      password: this.state.password
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => console.log('Succes: ', JSON.stringify(response)))
      .catch(error => console.error('Error: ', error));
    this.setState({
      email: '',
      password: ''
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.isPopUp ? (
          <PopUp
            app={this.state}
            handleInput={e => this.handleInput(e)}
            submitToApi={e => this.submitToApi(e)}
          />
        ) : null}
        <Header />
        <MainPage showPopUp={e => this.showPopUp(e)} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
