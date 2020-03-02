import React, { Component } from 'react';
import { getChars, addFav, getMyFavs } from './fav-api.js';

import Character from './Character.js';

const user = JSON.parse(localStorage.getItem('user'));

export default class Search extends Component {

    state = { 
        input: '',
        chars: [],
        favs: []
    }
    handleInput = (e) => {
        this.setState({input: e.target.value})
    }
    handleSearch = async(e) => {
        e.preventDefault()
        const data = await getChars(this.state.input)
        this.setState({chars: data})
    
    }
    handleAdd = async(char) => {
        const fav = {
            name: char.name,
            birth_year: char.birth_year,
            mass: char.mass,
            height: char.height,
            eye_color: char.eye_color
        }
        const newFav = await addFav(fav, user);
        const newArray = [...this.state.favs, newFav.body];
        this.setState({favs: newArray})
    }
    componentDidMount = async() => {
        const favData = await getMyFavs(this.props.user);
        this.setState({favs: favData.body})
    }
    
    render() {
        const listNode = this.state.chars.map(char => <Character character={char} favs={this.state.favs} handleAdd={this.handleAdd} key={char.name} />)
        return (
            <div>
                <form>
                    <input type="text" value={this.state.input} onChange={this.handleInput} />
                    <button onClick={this.handleSearch} >Search</button>
                </form>
                <ul>
                    {listNode}
                </ul>
            </div>
        )
    }
}
