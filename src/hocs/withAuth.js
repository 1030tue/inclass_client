import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
// import * as actions from '../actions'
import { fetchCurrentTeacher } from '../actions/teacher'

const withAuth = /*FUNCTION*/ (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      console.log('%c INSIDE COMPONENT DID MOUNT FOR AUTH HOC', 'color: purple')
      // POTENTIAL SECURITY FLAW!!! my tokens don't expire
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentTeacher()
      // if i have a token but don't know who it belongs to, ask the server for that teacher's data
    }

    repeatStringNumTimes=(string, times)=>{
      var repeatedString = "";
      while (times > 0) {
        repeatedString += string;
        times--;
      }
      return repeatedString;
    }

    render() {
      console.log('%c INSIDE RENDER FOR HOC', 'color: green')
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        //i have a token and i'm logged in
        // wrapped component in our case is Profile
        return <WrappedComponent />
      } else if (localStorage.getItem('jwt') && (this.props.authenticatingTeacher || !this.props.loggedIn)) {
        //we're currently fetching, show a loading spinner
        return this.repeatStringNumTimes("loading  ", 300);
      } else {
        //teacher is not AUTHORIZED to see this component
        return <Redirect to="/teacher/login" />
      }
    }
  }

  const mapStateToProps = /*FUNCTION*/ (reduxStoreState) => {
    return {
      loggedIn: reduxStoreState.teacherReducer.loggedIn,
      authenticatingTeacher: reduxStoreState.teacherReducer.authenticatingTeacher
    }
  }

  const mapDispatchToProps = /*FUNCTION*/ (dispatch) => {
    return {
      fetchCurrentTeacher: () => dispatch(fetchCurrentTeacher()), //dispatch is automagically provided by redux
    }
  }
  //
  // const connectedToReduxHOC = connect(mapStateToProps, mapDispatchToProps)
  // const connectedAuthorizedComponent = connectedToReduxHOC(AuthorizedComponent)
  // return connectedAuthorizedComponent

  return connect(mapStateToProps, { fetchCurrentTeacher })(AuthorizedComponent)
}

export default withAuth
