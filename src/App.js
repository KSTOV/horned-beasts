import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: data
    }
  }
  
  showModal = (beast) => {
    this.setState({show: beast})
  }

  hideModal = () => {
    this.setState({show: false});
  }

  handleChange = (event) => {
    let selection = parseInt(event.target.value);
    this.setState({data: data.filter(data => isNaN(selection) ? true : data.horns === Number(selection))});
  }

  render() {
    return (
      <div>
        <Header />
        <FloatingLabel label="Filter By How Many Horns">
          <Form.Select onChange={this.handleChange}>
            <option value="all" >All</option>
            <option value="1" >1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
            <option value="100" >100</option>
          </Form.Select>
        </FloatingLabel>
        <Main data={this.state.data} showModal={this.showModal} />
        <Footer />
        <SelectedBeast beast={this.state.show} hideModal={this.hideModal} />
      </div>
    )
  }
}
