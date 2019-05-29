import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Period from "../Components/Period"

import StudentsContainer from "./StudentsContainer"
// import Timer from '../Components/Timer'
import Second from '../Components/Second'


import { setCurrentClass } from '../actions/bathroom'

import withAuth from '../hocs/withAuth'


class TeacherContainer extends React.Component {


  handleClick=(props)=>{
    this.props.setCurrentClass(props);
    this.props.history.push('/class')
  }

//Set link later
  renderPeriodCards=()=>{
      let periods= [...this.props.currentTeacher.periods].sort((a,b)=>{
        return a.period_num - b.period_num });
      return periods.map(p => <Period period={p} key={p.id}
      handleClick={this.handleClick}/>)
  }



  render(){
    console.log("here",this.props);
    return(
      <React.Fragment>
            <div>{this.renderPeriodCards()}</div>
          <br/>
          {this.props.currentClass? null:<Link to = "/class/new" > <button className="button"> Create New Class </button> </Link>}
      </React.Fragment>
      )
  }
}

const mapStateToProps = state => {
  return {
    currentTeacher: state.teacherReducer.teacher,
    currentClass: state.bathroomReducer.curr_class
  };
};


export default withAuth(connect(mapStateToProps,{ setCurrentClass })(withRouter(TeacherContainer)));
