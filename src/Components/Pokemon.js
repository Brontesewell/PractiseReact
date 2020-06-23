import React, { Component } from 'react'

export default class Pokemon extends Component {
    state={
        pokemon: []
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(resp => resp.json())
        .then(data => 
            this.setState({
                pokemon: data.results
            })
        )
    }
    render() {
        console.log(this.state.pokemon)
        return (
            <div>
                <h4>Pokemon API </h4>
                {this.state.pokemon.map(p => <div><h6>{p.name} - <a href={p.url} >{p.url}</a></h6></div>)}
            </div>
        )
    }
}
