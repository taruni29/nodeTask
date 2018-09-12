import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { STATUS_CODES } from 'http';
import $ from 'jquery';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: ''
        }
        this.handleUploadImage = this.handleUploadImage.bind(this);
    }

    Signup() {
        var userName = document.getElementById("userName").value
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        var image = document.getElementById("image").src
        var formBody = [];
        formBody.push("userName=" + encodeURIComponent(userName));
        formBody.push("email=" + encodeURIComponent(email));
        formBody.push("password=" + encodeURIComponent(password));
        formBody.push("image=" + encodeURIComponent(image));
        formBody = formBody.join("&");
        console.log(JSON.stringify(formBody) + "status")

        //do fetch call
        fetch('/api/users/register', {
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
                    alert("Successfully Registered")
                    window.location.href = "/Thankyou"
                }
                else {
                    alert("Failed to submit" + JSON.stringify(status))
                }
            })
            .catch((err) => {
                alert("Error to submit: " + JSON.stringify(err))
            })
    }

    handleUploadImage(e) {
        e.preventDefault();
        var reader = new FileReader();
		var file = this.uploadInput.files[0];
	    var myfile = $('#image').val();
		var ext = myfile.split('.').pop();
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);

    if (file) {
        reader.onload = function(upload) {
            if (
                file.type.match('image/jp.*') ||
                file.type.match('image/png') ||
                file.type.match('image/bmp') ||
                ext == 'pdf' ||
                ext == 'docx' ||
                ext == 'doc' ||
                ext == 'txt' ||
                ext == 'xlsx'
            ) {
                fetch('http://localhost:3002/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                this.setState({ imageURL: `/${body.file}` });
            });
        });              
            }
             else {
                alert('Please Uplaod jpg/jpeg/png/pdf/docx/doc/txt images only');
                this.value = null; //the tricky part is to "empty" the input file here I reset the form.
                return false;
            }
        }.bind(this);
        reader.readAsDataURL(file);
    }
}
    render() {
        return (
            <div className="simple">
                <div className="next">
                    <div className="container">
                        <div className="col-md-6"></div>
                        <div id="login-page" className="row">
                            <div className="col s12 z-depth-6 card-panel">
                                <center>
                                    <form className="login-form">
                                        <div className="row">
                                            <div className="input-field col s12 center">
                                                <h1>REGISTER</h1>
                                            </div>
                                        </div>
                                        <form className="form ">
                                            {/*Input field "Name" */}
                                            <div className="row margin">
                                                <div className="input-field col s12">
                                                    <i className="mdi-social-person-outline prefix" />
                                                    <input id="userName" type="text" className="validate" placeholder="User Name" style={{ marginBottom: "10px" }} />
                                                    <span id="error_userName" className="text-danger"></span>
                                                </div>
                                            </div>

                                            {/*Input field "Email" */}
                                            <div className="row margin">
                                                <div className="input-field col s12">
                                                    <i className="mdi-communication-email prefix" />
                                                    <input id="email" type="email" className="validate" placeholder="Email" style={{ marginBottom: "10px" }} />
                                                    <span id="error_email" className="text-danger"></span>
                                                </div>
                                            </div>

                                            {/*Input field "Password" */}
                                            <div className="row margin">
                                                <div className="input-field col s12">
                                                    <i className="mdi-action-lock-outline prefix" />
                                                    <input id="password" type="password" className="validate" placeholder="Password" style={{ marginBottom: "10px" }} />
                                                    <span id="error_password" className="text-danger"></span>
                                                </div>
                                            </div>
                                            <div>
                                                <form onSubmit={this.handleUploadImage}>
                                                    <div className="image">
                                                        <input className="image-file" ref={(ref) => { this.uploadInput = ref; }} type="file" style={{ marginBottom: "15px" }} />
                                                    </div>
                                                    <div className="mt-20">
                                                        <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Desired Name Of File" />
                                                    </div>
                                                    <br />
                                                    <div>
                                                        <button>Upload</button>
                                                    </div>
                                                    <div>
                                                        <img className="image-img" id="image" src={this.state.imageURL} alt="" />
                                                    </div>
                                                </form>
                                            </div>
                                        </form>
                                        <div className="row">
                                            <div className="input-field col s12">

                                                {/* Calling the Signup function */}
                                                <a onClick={this.Signup.bind(this)} id="submit" className="btn waves-effect waves-light col s12">Register Now</a>
                                            </div>
                                            <div className="input-field col s12">
                                                <p className="margin center medium-small sign-up">Already have an account? <a href="/signin">Login</a></p>
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
export default SignUp
