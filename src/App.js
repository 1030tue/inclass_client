import React from 'react';

// import { connect } from "react-redux";
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import NavBar from "./Components/NavBar";
import ClassPage from "./Containers/ClassPage";
import Home from "./Containers/Home";
import TeacherContainer from "./Containers/TeacherContainer"
import StudentsContainer from "./Containers/StudentsContainer"

// import {saveTeacher} from './actions';


import Signup from "./Components/Signup"
import Login from "./Components/Login"
import NewPeriod from "./Components/NewPeriod"


// import { SAVE_TEACHER } from "./Types";


// import * as actions from './actions';


class App extends React.Component{
  state={
    periods: []
    }

  // logOut = () => {
	// 	localStorage.removeItem("token")
	// 	this.setState({
	// 		currentTeacher: null
	// 	}, () => {
	// 		this.props.history.push("/login")
	// 	})
	// }
  //
	// updateTeacher = (updatedTeacher) => {
	// 	this.setState({
	// 		currentTeacher: updatedTeacher
	// 	})
	// }

  componentDidMount(){
        fetch("http://localhost:4000/api/v1/periods")
              .then(res => res.json())
              .then(data => {
                this.setState({
                  periods: data
                })
              });

	           }

  // componentDidMount() {
  //     fetch("http://localhost:4000/api/v1/periods")
  //       .then(res => res.json())
  //       .then(data => {
  //         this.setState({
  //           periods: data
  //         })
  //       })
  //   }

  // AddNewStudent=(input)=>{
  //   fetch(`http://localhost:4000/api/v1/students`, {
  //       method: 'POST',
  //       headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify({
  //         firstname: input.firstname,
  //         lastname: input.lastname,
  //         email: input.email,
  //         age: input.age,
  //         grade: input.grade,
  //         gender: input.gender,
  //         guardians_name: input.guardians_name,
  //         relationship_to_student: input.relationship_to_student,
  //         guardians_email: input.guardians_email,
  //         guardians_phone: input.guardians_phone,
  //       })
  //     })
  // }





  render(){
    console.log('%c APP Props: ', 'color: firebrick', this.props)
    return(
      <div>
        <NavBar />
          <Switch>
           <Route exact path='/teacher' component={TeacherContainer} setCurrentTeacher={this.setCurrentTeacher}/>
           <Route exact path='/class' render={() => <ClassPage
           periods={this.state.periods}/>} />
           <Route exact path='/teacher/new' component={Signup} />
           <Route exact path='/teacher/login' component={Login} />
           <Route exact path='/class/new' component={NewPeriod} />
           <Route exact path='/teacher/class' component={StudentsContainer} />
            <Route exact path='/' component={Home} />
           </Switch>
      </div>
    )
  }
}

//
// const mapStateToProps = state => {
//   console.log("app2", state.saveTeacher);
//   return {
//     currentTeacher: state.saveTeacher.activeTeacher
//   };
// };
//
// function mapDispatchToProps(dispatch) {
//   return {
//     saveTeacher: (teacher)=>{dispatch(saveTeacher(teacher))}
//     }
//   }
//
//
// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default withRouter(App)
