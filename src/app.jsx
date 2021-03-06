import React, { Component, PropTypes } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import {render} from 'react-dom';
import {async,map} from 'con.js';
const {pub,sub,chan,take,put} = async;

let inputChan = chan();
let ourPub = pub(inputChan, _=>_['action']);


class App extends Component {
  render(){
    return (
      <div>
          <Header/>
          <MainSection pub={ourPub} chan={inputChan}/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
