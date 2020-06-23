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
        return (
            <div>
                <h1>Pokemon</h1>
                {this.state.pokemon.map(p => <div><h5>{p.name}</h5><a href={p.url} ></a>URL</div>)}
            </div>
        )
    }
}
