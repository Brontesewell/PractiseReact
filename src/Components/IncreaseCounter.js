import React, { Component } from 'react'

export default class IncreaseCounter extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }
    }

    onIncreaseClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    onDecreaseClick = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <br></br>
                 <h4>Count ↑↓</h4>
                <button type="button" onClick={() => this.onIncreaseClick()} class="btn btn-dark">↑</button>
                <h4>{this.state.counter}</h4>
                <button type="button" onClick={() => this.onDecreaseClick()} class="btn btn-dark">↓</button>

                
            </div>
        )
    }
}
