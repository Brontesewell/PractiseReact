import React, { Component } from 'react'

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            item: '',
        }
      }

      handleChange = (e) => {
        e.preventDefault();
        this.setState({
            item: e.target.value
        })
      }

      addItem = (e) => {
          e.preventDefault()
        this.setState(prevState => ({
            items: [...prevState.items, this.state.item],
        }))
        document.getElementById("input-list").value = "";
      }

      deleteItem = (item, e) => {
        e.preventDefault()
        this.setState({
            items: this.state.items.filter(el => el !== item)
        })
    }

    render() {
        return (
            <div>
                
                <form onSubmit={(e) => this.addItem(e)}>
                    <h4>To Do List</h4>
                    <input type="text" id="input-list" onChange={(e) => this.handleChange(e)}/>
                    <button type="submit" class="btn btn-success">
                        Add
                    </button>
                   
                        {this.state.items.map(item => <li>{item} <button onClick={(e) => this.deleteItem(item, e)}> X</button></li>).reverse()}
                   
                </form>
            </div>
        )
    }
}
