import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";





class NavBar extends React.Component {
  logOut = () => {
		localStorage.removeItem("jwt")}

  render(){
    return(
      <div className="topnav">
      <div className="navbar-name">
          <span> |MENU| </span>
      </div>
        <div className="navbar-name">
            <span> <Link to="/">|Home| </Link></span>
        </div>
        <div className="title">
            <span>InClass </span>
        </div>
        <div className="navbar-name">
            <span> {!this.props.loggedIn ? <Link to="/teacher/login">|LogIn|</Link> : <a href="http://localhost:3000/teacher/login" onClick={this.logOut}> |LogOut| </a>}</span>
        </div>
        <div className="navbar-name">
            <span> {!this.props.loggedIn ? <Link to="/teacher/new">|SignIn|  </Link> : null }</span>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ teacherReducer: loggedIn  }) => (
  loggedIn)


export default withRouter(connect(mapStateToProps)(NavBar))

// export default NavBar
