import React, { Component } from 'react'

export default class SayHello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
        this.sayHello = this.sayHello.bind(this);
      }
    
      sayHello() {
        alert(`Hello ${this.state.name}!`);
      }

      handleChange = (e) => {
          console.log(e.target.value)
        e.preventDefault();
        this.setState({
            name: e.target.value
        })
      }



      render(){
      return (
          <div>
            <form onSubmit={this.sayHello}>
            <h4>Say Hello</h4>
            <input type="text" id="input-submit-name" onChange={(e) => this.handleChange(e)}/>
            <button type="submit" class="btn btn-danger">
                Submit
            </button>

            </form>
        </div>
      );
}

}
