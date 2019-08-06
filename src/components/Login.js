import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loginTeacher } from '../actions/teacher'
import ShowPopup from './ShowPopup'

import './Login.css';
import Background from '../img/bg.jpg';


class Login extends React.Component {

  state = {
        email: '',
        password: '',
        active: true
  }

  togglePopup = (e)=>{

    this.setState({
       active: !this.state.active
    });
  }


  handleLoginChange = (e) => {
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    })
  }


  handleLoginSubmit = (e) => {
  e.preventDefault()
  this.props.loginTeacher(this.state.email, this.state.password)
  this.setState({ email: '', password: '' })
}


  render(){
    let sectionStyle = {
      width: "100%",
      height: "700px",
      backgroundImage: `url(${Background})`
    };
    return this.props.loggedIn ? (
      <Redirect to="/" />
    ) : (
       <section style={ sectionStyle }>
       {this.state.active? <ShowPopup error header={this.props.error} close={this.togglePopup}/> : null}
      <div className="login-form" style={ this.props.failedLogin? {backgroundColor: "#cc6666"}:null}>
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
               <p style={{fontWeight: "bold"}}>{this.props.failedLogin? this.props.error:null}</p>
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
