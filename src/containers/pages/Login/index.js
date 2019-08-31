import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div>
                <p>Login Page {this.props.popupState}</p>
                <button>Go to Login</button>
                <button>Go to Dashboard</button>
            </div>
        )
    }
}

const reduxState = (state) => ({
    popupState: state.popup
})

export default connect(reduxState)(Login);