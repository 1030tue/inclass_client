import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Period from "../Components/Period"

import StudentsContainer from "./StudentsContainer"
import Timer from '../Components/Timer'

import { setCurrentClass } from '../actions/bathroom'

import withAuth from '../hocs/withAuth'


class TeacherContainer extends React.Component {
  state={
    clicked: null
  }

  handleClick=(props)=>{
    this.props.setCurrentClass(props);
    this.setState({
      clicked: props
    })
  }

//Set link later
  renderPeriodCards=()=>{
    if(!this.state.clicked){
      let periods= this.props.currentTeacher.periods
      return periods.map(p=> <Period period={p} key={p.id}
      handleClick={this.handleClick}/>)
    }else{
      return <StudentsContainer/>
    }
  }



  render(){
    return(
      <React.Fragment>
        <div>
          {!!this.props.currentTeacher? this.props.currentTeacher.fullname: null} {'   '}

        </div>
        <Timer/>
                  {this.renderPeriodCards()}
          <br/>
          {!!this.props.currentClass? null:<Link to = "/class/new" > <button className="button"> Create New Class </button> </Link>
 }
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


export default withAuth(connect(mapStateToProps,{ setCurrentClass })(TeacherContainer));
