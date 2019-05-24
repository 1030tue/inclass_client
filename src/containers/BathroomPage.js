import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { removeBrStudent, updateClass } from '../actions/bathroom'

import withAuth from '../hocs/withAuth'

import TripCard from '../Components/TripCard'

class BathroomPage extends React.Component {

  renderStudent=()=>{
    if(this.props.brStudents){
      return this.props.brStudents.map(s => <TripCard student={s} key={s.id} cancelTimer={this.cancelTimer}/>)
    }
  }

  cancelTimer=(id)=> {
      this.props.removeBrStudent(id);
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/students/${id}`,
      {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      body: JSON.stringify({
          inclass: true
      })
    }).then(res => res.json())
    .then((data)=> {
      this.props.updateClass(data)
    })
  }

  render(){
    console.log("bath2", this.props.brStudents);
    return(
      <React.Fragment>
      <div className="brPage" style={{backgroundColor:"lightblue"}}>
        {this.renderStudent()}
      </div>
      </React.Fragment>
      )
  }
}


const mapStateToProps = state => {
  return {
    currentClass: state.bathroomReducer.curr_class,
    brStudents: state.bathroomReducer.brStudents,
  };
};



export default withAuth(connect(mapStateToProps, { removeBrStudent, updateClass })(BathroomPage));
