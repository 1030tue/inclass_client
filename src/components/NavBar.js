import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";




class NavBar extends React.Component {
  logOut = () => {
		localStorage.removeItem("jwt")}

    todayDate = ()=>{
      let newDate = new Date()
      let month = newDate.getMonth();
      let year = newDate.getFullYear();
      let newMon= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let date = newDate.getDate();
      switch(date.toString().split('').pop()) {
            case 1:
                return `0${newMon[month]} ${date}st, ${year}`;
                break;
            case 2:
                return `0${newMon[month]} ${date}nd, ${year}`;
                break;
            case 3:
                return `0${newMon[month]} ${date}rd, ${year}`;
                break;
            default:
                return `${newMon[month]} ${date}th, ${year}`;
                break;
        };

    }

  render(){
    return(
      <div className="topnav">
      <div className="navbar-name">
          <span> {this.props.teacher ? this.todayDate(''):null} </span>
      </div>
        <div className="navbar-name">
            <span> <Link to="/">{this.props.teacher ? this.props.teacher.fullname: "|HOME|"}</Link></span>
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
