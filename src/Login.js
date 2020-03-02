import React, { Component } from 'react';
import { signUp, login } from './fav-api.js';
import { withRouter } from 'react-router-dom';

export default withRouter(class Login extends Component {
    state = {
        signUpEmail: '',
        signUpPass: '',
        loginEmail: '',
        loginPass: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSignUp = async(e) => {
        e.preventDefault();
        const deets = {
            email: this.state.signUpEmail,
            password: this.state.signUpPass,
        }
        const user = await signUp(deets);
        localStorage.setItem('user', JSON.stringify(user.body));
        this.props.history.push('/search');
    }
    handleLogin = async(e) => {
        e.preventDefault();
        const deets = {
            email: this.state.loginEmail,
            password: this.state.loginPass,
        }
        const user = await login(deets)
        localStorage.setItem('user', JSON.stringify(user.body));
        this.props.history.push('/search');
    }
    render() {

        return (
            <form>
                    <label>
                        <span>Email </span>
                        <input type="email" name="signUpEmail" value={this.state.signUpEmail} onChange={this.handleChange} />
                    </label>
                    <label>
                        <span>Password </span>
                        <input type="password" name="signUpPass" value={this.state.signUpPass} onChange={this.handleChange} />
                    </label>
                    <button onClick={this.handleSignUp}>Sign Up!</button>
                    <br />
                    <label>
                        <span>Email </span>
                        <input type="email" name="loginEmail" value={this.state.loginEmail} onChange={this.handleChange} />
                    </label>
                    <label>
                        <span>Password </span>
                        <input type="password" name="loginPass" value={this.state.loginPass} onChange={this.handleChange} />
                    </label>
                    <button onClick={this.handleLogin}>Login!</button>
            </form>
        )
    }
})