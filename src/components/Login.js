import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// import { SAVE_TEACHER } from "../actions/ActionTypes";
// import {saveTeacher} from '../actions';
import { loginTeacher } from '../actions/teacher'

import './Login.css';

class Login extends React.Component {

  state = {
        email: '',
        password: ''
  }

  handleLoginChange = (e) => {
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    })
  }


  handleLoginSubmit = (e) => {
  e.preventDefault()
  this.props.loginTeacher(this.state.email, this.state.password) //comes from mapDispatchToProps
  this.setState({ email: '', password: '' }) //reset form to initial state
}

  // login = (e) => {
  //   e.preventDefault()
  //   fetch(`${url}/login`, {
  //     method: 'POST',
  //     body: JSON.stringify({teacher:{...this.state.login}}),
  //     headers:{
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(
  //     (data) => {
  //       console.log(data.teacher);
  //     if (data.message){
  //       alert(data.message);
  //       this.setState({ email: "", password: "" });
  //       this.props.history.push("/teacher/login");
  //     } else {
  //       this.props.saveTeacher(data.teacher);
  //       localStorage.setItem("teacher_token", data.jwt);
  //       this.props.history.push("/teacher");
  //         }
  //   }
  // )
  // }


  render(){
    console.log('%c LOGIN FORM PROPS: ', 'color: red', this.state)
    return this.props.loggedIn ? (
      <Redirect to="/" />
    ) : (
      <div className="login-form">
              <h1>In-Class</h1>
              <form onSubmit={this.handleLoginSubmit}>
               <div className="form-group ">
                 <input type="text" className="form-control" name="email"
                 placeholder="Email"
                 value={this.email}
                 onChange={this.handleLoginChange}/>
               </div>
               <div className="form-group log-status">
                 <input type="password" className="form-control"
                 name="password"
                 placeholder="Password"
                 value={this.password}
                 onChange={this.handleLoginChange}/>
               </div>
                <span className="alert">Invalid Credentials</span>
                <p className="link" >Lost your password?</p>
               <button type="submit" className="log-btn">Log in</button>
        </form>
        <Link to="/teacher/new">
        <br/>
        <p className="link" >New Teacher?</p>
          <button className="log-btn">sign up</button>
        </Link>
        </div>

    )
  }
}

// function mapStateToProps(state) {
//   return {
//     type: types.SAVE_TEACHER,
//     payload: data.teacher
//   }
// }



const mapStateToProps = ({ teacherReducer: { authenticatingTeacher, failedLogin, error, loggedIn } }) => ({
  authenticatingTeacher,
  failedLogin,
  error,
  loggedIn
})


export default withRouter(connect(mapStateToProps, { loginTeacher })(Login))
