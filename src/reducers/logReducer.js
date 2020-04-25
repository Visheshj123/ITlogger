//We can leverage thunk because we set it as part of our middleware
import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, UPDATE_LOG, SEARCH_LOGS } from '../actions/types'
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
}
export default(state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state, logs: action.payload, loading:false
      }
    case SET_LOADING:
      return {...state, loading: true}
    case LOGS_ERROR:
      console.error(action.payload)
      return {...state, error: action.payload}
    case ADD_LOG:
      return {...state, logs: [...state.logs, action.payload], loading: false}
    case DELETE_LOG:
      return {...state,logs: state.logs.filter( log => log.id !== action.payload)}
    case SET_CURRENT:
    console.log('in set current')
      return {...state, current: state.logs.find( log => log.id === action.payload)}
    case UPDATE_LOG:
    console.log(action.payload)
      return {...state, current: null,
         logs: state.logs.map(log => log.id == action.payload.id ? action.payload : log)}
    case SEARCH_LOGS:
      return {...state, logs: action.payload}
    default:
      return state
  }
}
