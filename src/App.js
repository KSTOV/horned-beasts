import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  
  showModal = (beast) => {
    this.setState({show: beast})
  }

  hideModal = () => {
    this.setState({show: false});
  }

  render() {
    return (
      <div>
        <Header />
        <Main data={data} showModal={this.showModal} />
        <Footer />
        <SelectedBeast beast={this.state.show} hideModal={this.hideModal} />
      </div>
    )
  }
}
