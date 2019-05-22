import React from "react";

import StudentCard from "../Components/StudentCard"
import NewStudentForm from "../Components/NewStudentForm"
import BathroomPage from "./BathroomPage"

import { connect } from "react-redux";
import { selectStudent } from '../actions/bathroom';

import withAuth from '../hocs/withAuth'


class StudentsContainer extends React.Component {
  state={
    clickedbtn: false,
    bathroomStudents:[]
  }

  newStudntbtn = () =>{
    return (
      <button className="button" onClick={this.handleBtn}>+ New Student</button>
    )
  }

  handleBtn=()=>{
    this.setState({
      clickedbtn: true
    })
  }

  handleCardClick=(props)=>{
    this.props.selectStudent(props)
  }

  renderStudent=()=>{
    if(!this.state.clickedbtn){
      return this.props.currentClass.students.map(s => <StudentCard student={s} key ={s.id} handleClick={this.handleCardClick}/>)
    }else{
      return <NewStudentForm AddNewStudent={this.props.AddNewStudent} period={this.props.period} />
    }
  }

  render(){
    return(
    <React.Fragment>
    <div className="Cards-Container">
    {this.renderStudent()}
    </div>
    {!this.state.clickedbtn ? this.newStudntbtn():null }
    <div className="BathroomPage">
    <BathroomPage />
    </div>
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentClass: state.bathroomReducer.curr_class
  };
};


export default withAuth(connect(mapStateToProps,{ selectStudent })(StudentsContainer));


// export default StudentsContainer;
