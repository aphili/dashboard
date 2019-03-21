import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Dimmer, Loader, Header } from 'semantic-ui-react'

// Components
import Login from './Login'

import Amplify from 'aws-amplify';
import awsmobile from '../aws-exports';
import PageHeader from './PageHeader'

import '../css/App.css';

Amplify.configure(awsmobile);

class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoading: true,
      isVisible: false,
      isRedirect: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        isVisible: true
      })
    }, 1000)
  }

  render() {

    const myLoader = (
      <Dimmer active style={{ background: 'rgb(79, 79, 79', color: '#6FE3E3' }}>
        <Loader size='large' content="welcome" />
      </Dimmer>
    )


    return (
      <div className="App">
        {this.state.isLoading && myLoader}
        {/* <Login /> */}
        <PageHeader/>
      </div>
    );
  }
}


export default App;