import React from "react";
import StudentCard from "../Components/StudentCard"
import NewStudentForm from "../Components/NewStudentForm"


class StudentsContainer extends React.Component {
  state={
    clickedbtn: false
  }


  newStudntbtn = () =>{
    return (
      <button className="StudentCard" onClick={this.handleBtn}>+ New Student</button>
    )
  }

  handleBtn=()=>{
    this.setState({
      clickedbtn: true
    })
  }

  renderStudent=()=>{
    if(!this.state.clickedbtn){
      return this.props.period.students.map(s => <StudentCard student={s} key ={s.id} />)
    }else{
      return <NewStudentForm AddNewStudent={this.props.AddNewStudent} />
    }
  }

  render(){
    return(
    <React.Fragment>
    <div className="Cards-Container">
    {this.renderStudent()}
    </div>
    {!this.state.clickedbtn ? this.newStudntbtn():null }
    </React.Fragment>
    )
  }
}


export default StudentsContainer;
