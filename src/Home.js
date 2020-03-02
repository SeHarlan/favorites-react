import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>
                    Welcome! this is an app that saves your favorite Star Wars Characters!
                </p>
                <Link to='/login'>
                    <h2 className="fakeButton">Login to begin the search</h2>
                </Link>
            </div>
        )
    }
}
