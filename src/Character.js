import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default withRouter(class Character extends Component {
    render() {
        const { character } = this.props
        const renderButton = () => {
            const onFavs = this.props.favs.find(person => character.name === person.name);
            if(!onFavs) {
                // return <button onClick={(e) => this.props.handleAdd(character)}>Add to Favs!</button>
                return <Button variant="contained" color="secondary" onClick={(e) => this.props.handleAdd(character)}>Add to Favs!</Button>
            } 
            return <span role="img" aria-label="star">⭐</span>
        };
        return (
            <li>
                { this.props.location.pathname !== '/favorites' &&renderButton()}
                <h3>{character.name}:</h3>
                <p><em>Born {character.birth_year}</em>, Weighs {character.mass}, Height of {character.height}, Eye Color {character.eye_color}</p>
            </li>
        )
    }
})
