import React from "react";
import StudentSpec from './StudentSpec';

import { connect } from "react-redux";


class StudentCard extends React.Component {


  disableBtns=()=>{

  }


  renderStudent=(student)=>{
    let tripBtnStyle={
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    }
    let cardStyle={
      backgroundColor: !!student.inclass ? '#9EDCDD' : '#e8ebed'
    }

    return (<div className="StudentCard" style={cardStyle}>
            <div >
            {student.firstname}{'  '}{student.lastname}
            {student.gender.toLowerCase()==="female" ? "👩🏻‍🎓": "👨🏻‍🎓"}
            </div>
            <div>
            {student.inclass ? "IN": "OUT"}
            </div>
            <div className="tripBtn" onClick={(e)=>this.props.handleClick(this.props.student, e)} >
            <input style={tripBtnStyle} data-id={!student.id} type="button" name="destination" value="🧻" disabled={!student.inclass} />
            <input style={tripBtnStyle} data-id={student.id} type="button" name="destination" value="💊" disabled={!student.inclass}/>
            <input style={tripBtnStyle} type="button" name="destination" value="Emergency" data-id={student.id} disabled={!student.inclass}/>
            </div>
            </div>
          )
  }


  render(){
    console.log('hey',this.props);
    return(
      <React.Fragment>
      {this.renderStudent(this.props.student)}
      </React.Fragment>
    )
  }
}



export default connect()(StudentCard);
// export default StudentCard
