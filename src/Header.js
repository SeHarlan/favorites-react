import React, { Component } from 'react'

const user = JSON.parse(localStorage.getItem('user'));

export default class Header extends Component {
    state = {
        currentUser: null
    }
    componentDidMount() {
        this.setState({ currentUser: user })
    }
    render() {
        const messageStart = (this.state.currentUser) ? `${this.state.currentUser.email}'s ` : 'My '
        return (
            <div>
                <h1>
                    {messageStart} Favorite Star Wars Characters!
                </h1>
            </div>
        )
    }
}
