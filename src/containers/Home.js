import React from "react";
// import TeacherContainer from "./TeacherContainer"

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import withAuth from '../hocs/withAuth'
// import StudentsContainer from "./StudentsContainer"
import Report from '../components/Report'

class Home extends React.Component {
  state={
    clicked: null
  }


  renderWelcome=()=>{
    return(!!this.props.currentTeacher ? `Welcome, ${this.props.currentTeacher.fullname}`: "Hi! Starnager")
  }



  render(){
    if(!this.props.currentTeacher){
      window.location.reload();
    }else{
      const numClass = this.props.currentTeacher.periods.length
    return(
      <div className="home">
      <h2>{this.renderWelcome()}</h2>
        <h3><Link to ="/teacher">You have {numClass} {numClass>1 ? "classes":"class"} </Link></h3>
        {this.props.currentClass? <Report/>:null}

      </div>
    )
  }
  }
};

const mapStateToProps = state => {
  return {
    currentTeacher: state.teacherReducer.teacher,
    currentClass: state.bathroomReducer.curr_class
  };
};


export default withAuth(connect(mapStateToProps)(Home));
