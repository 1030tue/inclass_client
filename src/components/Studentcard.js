import React from "react";
import StudentSpec from './StudentSpec';
import Popup from "reactjs-popup";
import { connect } from "react-redux";
import { Icon } from 'semantic-ui-react'


class StudentCard extends React.Component {


  renderStudent=(student)=>{
    let btnStyle={
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    }
    let cardStyle={
      backgroundColor: !!student.inclass ? '#9EDCDD' : '#e8ebed'
    }

    return (<div className="StudentCard" style={cardStyle}>
              <div className="StudentSpec">
              <Popup trigger={<span><h4>{student.firstname}{'  '}{student.lastname}</h4>{student.gender.toLowerCase()==="female" ? "👩🏻‍🎓": "👨🏻‍🎓"}</span>} position="bottom">
                {close => (
                  <div>
                  <a className="close" onClick={close}>
                  <Icon name='window close' />
                  </a>
                    <div class="ui card">
                    <StudentSpec student={this.props.student}/>
                    </div>
                  </div>
                )}
                </Popup>

              </div>
              <div>
                {student.inclass ? "IN": "OUT"}
              </div>

              <div className="tripBtn" onClick={(e)=>this.props.handleClick(this.props.student, e)} >
                <input style={btnStyle} data-id={!student.id} type="button" name="destination" value="🧻" disabled={!student.inclass} />
                <input style={btnStyle} data-id={student.id} type="button" name="destination" value="💊" disabled={!student.inclass}/>
                <input style={btnStyle} type="button" name="destination" value="Emergency" data-id={student.id} disabled={false}/>
              </div>

            </div>
          )
  }


  render(){
    return(
      <React.Fragment>
      {this.renderStudent(this.props.student)}
      </React.Fragment>
    )
  }
}



export default connect()(StudentCard);
// export default StudentCard
