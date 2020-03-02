import React, { Component } from 'react'

import Character from './Character.js'
import { getMyFavs } from './fav-api.js';
// import { getMyFavs } from './fav-api.js';

export default class Favorites extends Component {
    state = {
        favs: []
    };

    componentDidMount = async() => {
        const favData = await getMyFavs(this.props.user);
        this.setState({favs: favData.body})

    }
   
    render() {
        const favNode = this.state.favs.map(fav => {
        return <Character favs={this.state.favs} character={fav} key={fav.name}/>})
        return (
            <ul>
                {favNode}
            </ul>
        )
    }
}
