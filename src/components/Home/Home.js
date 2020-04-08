import React, { Component } from 'react';
import Container from '../../container';

class Home extends Component {
  state = {};

  handleClick = () => {
    alert('clicked');
  };

  render() {
    const Text = () => (
      <p>
        Hello M-Lima <button onClick={() => this.handleClick()}> Click here</button>
      </p>
    );
    return <Container items={<Text />} />;
  }
}
export default Home;
