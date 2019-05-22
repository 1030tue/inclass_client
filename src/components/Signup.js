import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { SAVE_TEACHER } from "../actions/ActionTypes";

import './Login.css';

const url = "http://localhost:4000/api/v1"

class Signup extends React.Component {

  state = {
    signup:
      {
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone:'',
        subject:''
      }
  }


  handleSignupChange = (e) => {
    console.log(e.target.value);
    this.setState({
      signup: {
        ...this.state.signup,
        [e.target.name]: e.target.value
      }
    })
  }

  createTeacher = (e) => {
    e.preventDefault()
    const {signup} = this.state
    if (signup.signupPassword === signup.signupConfirmPassword) {
      fetch(`${url}/signup`, {
        method: 'POST',
        body: JSON.stringify(signup),
        headers:{'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if (data.message){
          alert(data.message);
          this.props.history.push("/teacher/new")
        } else {
          this.props.dispatch({ type: SAVE_TEACHER, payload: data });
          localStorage.setItem("teacher_token", data.jwt);
          this.props.history.push("/teacher");
          window.location.reload();
        }
      })
    } else {
      this.setState({
        ...this.state.signup,
        signupErrors: "Passwords don't match"
      })
    }
  }


  render(){
    console.log(this.state);
    return(
      <div className="signup-form">
        <form onChange={this.handleSignupChange}>
            <div className="Signup-form">
               <h1>In-Class</h1>
               <h2>Sign Up</h2>
               <div className="form-group ">
                 <input type="text" className="form-control" name="fullname" placeholder="Your Beautiful Fullname"/>
               </div>
               <div className="form-group ">
                 <input type="text" className="form-control" name="email" placeholder="Email"/>
               </div>
               <div className="form-group log-status">
                 <input type="password" className="form-control"
                 name="password" placeholder="Password"/>
               </div>
               <div className="form-group log-status">
                 <input type="password" className="form-control"
                 name="confirmPassword" placeholder="Confirm your password here"/>
               </div>
               <div className="form-group log-status">
                 <input type="text" className="form-control"
                 name="phone" placeholder="your phone number"/>
               </div>
               <div className="form-group log-status">
                 <input type="text" className="form-control"
                 name="subject" placeholder="What is your main subject?"/>
               </div>
                <span className="alert">Invalid Credentials</span>
                <a className="link" href="/">Lost your password?</a>
               <button type="button" className="log-btn" onClick={this.createTeacher}>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => {
  // state gives me access to the initialState
  // connect gives me an access to dispatch function.
  // If I don't need any state, I don't need mapStateToProps.
  console.log("state from REDUX", state);
  return {
    name: "Kate"
  };
};

export default withRouter(connect(mapStateToProps)(Signup));
