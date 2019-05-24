const initialState={
  curr_class: null,
  brStudents: [],
  timer:null
}


export default function bathroomReducer(state=initialState, action){
  switch(action.type){
          case 'SET_CURRENT_CLASS':
              return {...state, curr_class: action.payload };
          case 'UPDATE_CLASS':
          // debugger
              const updatedClass = state.curr_class.students.map(student => {
                if (student.id === action.payload.id) {
                  return action.payload
                } else {
                  return student
                }
              })
              const updatedState = {...state}
              updatedState.curr_class.students = updatedClass
              console.log("state", updatedState)
              return updatedState
          case 'BR_STUDENTS':
              return {...state, brStudents: [...state.brStudents, action.payload] };
          case 'REMOVE_STUDENT_FROM_BR':
            let index = state.brStudents.indexOf(state.brStudents.find((student) => {
              return student.id === action.payload
            }))
            let newStudents = [...state.brStudents.slice(0, index), ...state.brStudents.slice(index + 1)]
              return {...state, brStudents: newStudents};
        
          case 'TIMER':
              return {...state, timer: action.payload}
          default:
              return state;
        }
}
