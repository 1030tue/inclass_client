import React from "react";


class StudentCard extends React.Component {

  newStudntbtn = () =>{
    return (
      <button className="StudentCard" onClick={this.renderNewStdFrom}>+ New Student</button>
    )
  }

  renderNewStdFrom=()=>{

  }

  newStudntbtn = () =>{
    return (
      <button className="StudentCard" onClick={console.log}>+ New Student</button>
    )
  }


  renderStudent=(student)=>{
    return (<div className="StudentCard">
    {student.firstname}{'  '}{student.lastname}
    {student.gender==="female" ? "👩🏻‍🎓": "👨🏻‍🎓"}
    <br/>
    {student.inclass ? "IN": "OUT"}
    </div>)
  }


  render(){
    console.log(this.props);
    return(
      <React.Fragment>
      {this.renderStudent(this.props.student)}
      </React.Fragment>
    )
  }
}

export default StudentCard
