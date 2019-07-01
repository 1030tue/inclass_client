import React from "react";
import { connect } from "react-redux";

class Report extends React.Component{
state={
  trips:null
}

getTrips(){
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/trips`)
    .then(res => res.json())
    .then(data =>{
      this.setState({
        trips: data
      })
    })
  }

componentDidMount(){
  this.getTrips()
}

findTrips=()=>{
  if(this.state.trips){
    return this.state.trips.filter(t=>t.period_id===this.props.currentClass.id)}else{return null}
}

findBathroom=()=>{
  if(this.findTrips()){
    return this.state.trips.filter(t=>t.destination==="🧻").length}else{return "No one"}
}

findNurse=()=>{
  if(this.findTrips()){
    return this.state.trips.filter(t=>t.destination==="💊").length}else{return "No one"}
}

findEmergency=()=>{
  if(this.findTrips()){
    return this.state.trips.filter(t=>t.destination==="Emergency").length}else{return "No one"}
}

alltrips=()=>{
  if(this.findTrips()){
    return this.state.trips.length}else{return "No one"}
}

render(){
console.log(this.findBathroom());
    return(
      <div>
      <h2> {this.props.currentClass.classname} </h2>
      <h2> Duration: {this.props.timer? this.props.timer : 0} seconds</h2>
      <h3>  {this.findBathroom()} went to bathroom.</h3>
      <h3>  {this.findNurse()} went to nurse.</h3>
      <h3>  {this.findEmergency()} had emargency.</h3>
      <h3>Total {this.alltrips()} {this.alltrips()>1? "students":"student"} went out.</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentClass: state.bathroomReducer.curr_class,
    brStudents: state.bathroomReducer.brStudents,
    timer: state.bathroomReducer.timer,
    state: state
  };
};


// export default Report

export default connect(mapStateToProps)(Report);
