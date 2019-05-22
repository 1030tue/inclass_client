import React from "react";

// import withAuth from '../hocs/withAuth'


class StudentCard extends React.Component {

  newStudntbtn = () =>{
    return (
      <button className="StudentCard" onClick={this.renderNewStdFrom}>+ New Student</button>
    )
  }


  newStudntbtn = () =>{
    return (
      <button className="StudentCard" onClick={console.log}>+ New Student</button>
    )
  }


  renderStudent=(student)=>{
    let btnStyle={
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    }
    return (<div className="StudentCard">
            {student.firstname}{'  '}{student.lastname}
            {student.gender.toLowerCase()==="female" ? "👩🏻‍🎓": "👨🏻‍🎓"}
            <div>
            {student.inclass ? "IN": "OUT"}
            </div>
            <input style={btnStyle} type="button" name="destination" value="🧻" onClick={()=>this.props.handleClick(this.props.student)}/>
            <input style={btnStyle} type="button" name="destination" value="💊"/>
            </div>
    )
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
