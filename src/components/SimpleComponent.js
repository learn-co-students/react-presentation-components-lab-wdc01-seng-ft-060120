// Code SimpleComponent Here
import React from 'react'


export default class SimpleComponent extends React.Component{

    state = {
        mood: "happy"
    }

    handleClick = () => {
        let mood
        this.state.mood === "happy" ? mood = "sad" : mood = "happy"
        this.setState({
            mood
        })
    }

    render(){
        return(
        <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }

}