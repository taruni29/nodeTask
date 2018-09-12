import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom'

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  Signin() {
    var userName = this.refs.userName1.value
    var password = this.refs.password1.value
    var formBody = [];
    var formBody = "userName=" + userName + "&password=" + password
    fetch('/api/users/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    })
      .then((response) => response.json())
      .then((status) => {


        if (status._id !== '') {
          alert("Login Succcessful")
          var user = JSON.stringify(status.userName)
          localStorage.setItem("username", user)
          window.location.href = "/welcome"
        }
        else {
          alert("Failed to submit" + JSON.stringify(status))
        }
      })
      .catch((err) => {
        alert("Error to submit: " + JSON.stringify(err))
      })
  }
  render() {

    return (
      <div className="simple">
        <div className="next">
        <div className="container">
          <div id="login-page" className="row">
            <div className="col s12 z-depth-6 card-panel">
            <center>
              <form className="login-form">
                <div className="row">
                  <div className="input-field col s12 center">
                  <h1>LOGIN</h1>
                  </div>
                </div>

                {/* Input field "Email" */}
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="mdi-communication-email prefix" />
                    <label htmlFor="userName" className="center-align">User Name</label>
                    <input ref="userName1" style={{ marginBottom: 15 }} type="text" placeholder="Username" required />
                    {/* <input id="email" type="email" className="validate" /> */}
                  </div>
                </div>

                {/* Input field "Password" */}
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="mdi-action-lock-outline prefix" />
                    <label htmlFor="password">Password</label>
                    <input ref="password1" style={{ marginBottom: 15 }} type="password" placeholder="  Password" required />
                    {/* <input id="password" type="password" className="validate" /> */}
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">

                    {/* Calling the Sign in function */}
                    <a onClick={this.Signin.bind(this)} className="btn waves-effect waves-light col s12">Login</a>
                  </div>
                  <div className="input-field col s12">
                    <p className="margin center medium-small sign-up">Dont have an account? <a href="/signup">Register</a>
                    </p>
                  </div>
                </div>
              </form>
              </center>
            </div>
          </div>
          </div>        
        </div>
      </div>
    );
  }
}


export default SignIn;