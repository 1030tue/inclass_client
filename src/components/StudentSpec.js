import React from "react";


class StudentSpec extends React.Component {

  renderStudent=(student)=>{
    
    // let cardStyle={
    //   backgroundColor: 'transparent',
    //   borderColor: 'transparent'
    // }

    return (<div className="StudentSpec">
            {student.firstname}{'  '}{student.lastname}
            {student.gender.toLowerCase()==="female" ? "👩🏻‍🎓": "👨🏻‍🎓"}
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


export default StudentSpec
