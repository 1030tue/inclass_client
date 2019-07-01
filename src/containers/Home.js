import React from "react";
// import TeacherContainer from "./TeacherContainer"

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import withAuth from '../hocs/withAuth'
// import StudentsContainer from "./StudentsContainer"


class Home extends React.Component {
  state={
    clicked: null
  }

  handleClick=()=>{
    console.log("hi");
    // this.setState({
    //   clicked: props
    // })
  }

  renderWelcome=()=>{
    return(!!this.props.currentTeacher ? `Welcome, ${this.props.currentTeacher.fullname}`: "Hi! Starnager")
  }



  render(){
    if(!this.props.currentTeacher){
      return "hi "
    }else{
      const numClass = this.props.currentTeacher.periods.length
    return(
      <div>
      <h2>{this.renderWelcome()}</h2>
        <Link to ="/teacher">You have {numClass} {numClass>1 ? "classes":"class"} </Link>


      </div>
    )
  }
  }
};

const mapStateToProps = state => {
  return {
    currentTeacher: state.teacherReducer.teacher
  };
};


export default withAuth(connect(mapStateToProps)(Home));
