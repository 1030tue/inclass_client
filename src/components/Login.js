import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// import { SAVE_TEACHER } from "../actions/ActionTypes";
// import {saveTeacher} from '../actions';
import { loginTeacher } from '../actions/teacher'

import './Login.css';
import Background from '../img/bg.jpg';


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


  render(){
    let sectionStyle = {
      width: "100%",
      height: "700px",
      backgroundImage: `url(${Background})`
    };

    // console.log('%c LOGIN FORM PROPS: ', 'color: red', this.state)
    return this.props.loggedIn ? (
      <Redirect to="/" />
    ) : (
       <section style={ sectionStyle }>
      <div className="login-form" >
              <h1 style={{fontColor:"transparent"}}>In-Class</h1>
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
        </section>
    )
  }
}



const mapStateToProps = ({ teacherReducer: { authenticatingTeacher, failedLogin, error, loggedIn } }) => ({
  authenticatingTeacher,
  failedLogin,
  error,
  loggedIn
})


export default withRouter(connect(mapStateToProps, { loginTeacher })(Login))
