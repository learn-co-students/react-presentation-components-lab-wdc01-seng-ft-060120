// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    };
  }

  handleClick = () => {
      this.setState({
          mood: 'sad'
      })
    // const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    // this.setState({ mood: newMood });
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}

export default SimpleComponent;