const defaultState = {
  teacher: null,
  loggedIn: false,
  authenticatingTeacher: false,
  failedLogin: false,
  error: null
}

const teacherReducer = /*FUNCTION*/ (state=defaultState, action) => {
  switch (action.type) {
    case 'SAVE_TEACHER':    
      return { ...state, teacher: action.payload, loggedIn: false, authenticatingTeacher: true }
    case 'SET_CURRENT_TEACHER':
      return { ...state, teacher: action.payload, loggedIn: true, authenticatingTeacher: false }
    case 'AUTHENTICATING_TEACHER': //tells the app we're fetching
      return { ...state, authenticatingTeacher: true }
    case 'AUTHENTICATED_TEACHER':
      return { ...state, authenticatingTeacher: false }
    case 'FAILED_LOGIN': //for error handling
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingTeacher: false
      }
    default:
      return state
  }
}

export default teacherReducer
