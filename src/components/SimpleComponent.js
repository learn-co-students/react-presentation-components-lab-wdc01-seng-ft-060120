// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {

    state = {mood: 'happy'}

    toggleMoodState = () => {
        if (this.state.mood === 'happy') {
            this.setState({mood: 'sad'})
        } else if (this.state.mood === 'sad') {
            this.setState({mood: 'happy'})
        }
    }

    render() {
        return (
            <div onClick={this.toggleMoodState}>{this.state.mood}</div>
        )
    }

}

export default SimpleComponent