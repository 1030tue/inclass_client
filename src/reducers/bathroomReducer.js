const initialState={
  curr_class: null,
  students: []
}


export default function bathroomReducer(state=initialState, action){
  switch(action.type){
          case 'SET_CURRENT_CLASS':
            return {...state, curr_class: action.payload };
          case 'SELECT_STUDENT':
            return {...state, students: [...state.students, action.payload] };
          default:
            return state;
        }
}
