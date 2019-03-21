import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Dimmer, Loader, Transition} from 'semantic-ui-react'
import Amplify from 'aws-amplify';
import awsmobile from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import '../css/App.css';
import Main from './Main'
import Login from './Login'

Amplify.configure(awsmobile);

class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoading:true,
      isVisible:false,
      isRedirect:true
    }
  }

  componentDidMount(){
    setTimeout(() => {
        this.setState({
          isLoading:false,
          isVisible:true
        })
    }, 1000)
  }
  
  render() {
       
    const myLoader = (
        <Dimmer active style={{background:'rgb(79, 79, 79', color:'#6FE3E3'}}>
          <Loader size='large' content="welcome"/>
        </Dimmer>
    )
    

    return (
      <div className="App">
        {/* <Login/> */}
        {this.state.isLoading && myLoader}
        <Main visible = {this.state.isVisible}/>

        {/* <Router>
          <Route  render={()=>(
            this.state.isRedirect ? (<Login/>) : (<Main visible = {this.state.isVisible}/>)
          )}/>
        </Router> */}
      </div>
    );
  }
}


export default withAuthenticator(App, true);