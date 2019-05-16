import React from 'react';
// import logo from './logo.svg';
// import { connect } from "react-redux";
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from "./Components/NavBar";
import ClassPage from "./Containers/ClassPage";
// import { GET_PERIODS } from "./Types";

class App extends React.Component{
  state={
    periods: []
  }

  componentDidMount() {
      fetch("http://localhost:4000/api/v1/periods")
        .then(res => res.json())
        .then(data => {
          this.setState({
            periods: data
          })
        })
    }

  AddNewStudent=(input)=>{
    fetch(`http://localhost:4000/api/v1/students`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          firstname: input.firstname,
          lastname: input.lastname,
          email: input.email,
          age: input.age,
          grade: input.grade,
          gender: input.gender,
          guardians_name: input.guardians_name,
          relationship_to_student: input.relationship_to_student,
          guardians_email: input.guardians_email,
          guardians_phone: input.guardians_phone,
        })
      })
  }

  render(){
    return(
      <div className="App">
      <NavBar />
        <ClassPage
        AddNewStudent={this.AddNewStudent}
        periods={this.state.periods} />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     periods: state.periods
//   };
// };
//
// export default connect(mapStateToProps)(App);

export default App;
