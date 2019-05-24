import React from "react";

import StudentCard from "../Components/StudentCard"
import BathroomPage from "./BathroomPage"

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { brStudents, updateClass } from '../actions/bathroom';

import withAuth from '../hocs/withAuth'


class StudentsContainer extends React.Component {



  newStudntbtn = () =>{
    return (
      <Link to="/students/new">
      <button className="button">+ New Student</button>
      </Link>
    )
  }



  handleCardClick=(props, e)=>{
    return(
    
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/students/${props.id}`,
      {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      body: JSON.stringify({
        inclass: !props.inclass,
        student_id: props.id,
        period_id: this.props.currentClass.id,
        destination: e.target.value
      })
    }).then(res => res.json())
    .then((data)=> {
      this.props.brStudents(data)
      this.props.updateClass(data)

    })
    )
  }





  renderStudent=()=>{
      return this.props.currentClass.students.map(s => <StudentCard student={s} key ={s.id} handleClick={this.handleCardClick}/>)

  }

  render(){
    console.log("hello", this.props.state)
    return(
    <React.Fragment>
    {!!this.props.currentClass ? `:${this.props.currentClass.period_num} period` : null}
     {'   '}
    {!!this.props.currentClass ? this.props.currentClass.classname : null}
    {/*<Countdown date={Date.now() + 3600000} /> minutes Left*/}
    <div className="Cards-Container">

    {this.renderStudent()}
    </div>
    {/*!this.state.clickedbtn ? this.newStudntbtn():null */}
    {this.newStudntbtn()}
    <BathroomPage />
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentClass: state.bathroomReducer.curr_class,
    state: state
  };
};


export default withAuth(connect(mapStateToProps,{ brStudents, updateClass })(StudentsContainer));


// export default StudentsContainer;
