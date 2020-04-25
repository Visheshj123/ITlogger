import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, UPDATE_LOG, SEARCH_LOGS } from './types'

export const getLogs = () => async dispatch => {
  try{
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    console.log(data)
    dispatch({
      type:GET_LOGS,
      payload: data })
  }catch(e){
    dispatch({type:LOGS_ERROR, payload:e.message})
  }
}

export const addLog = (log) => async dispatch => {
  try{
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    dispatch({
      type:ADD_LOG,
      payload: data })
  }catch(e){
    dispatch({type:LOGS_ERROR, payload:e.message})
  }
}

//Because thunk is now middleware we still have to abide by its syntax
export const setCurrent = (id) => {
  return (dispatch) => {
    dispatch({type:SET_CURRENT, payload: id})
  }
}

//Delete Log from Server
export const deleteLogs = (id) => async dispatch => {
  try{
    setLoading();
    const res = await fetch(`/logs/${id}`, {
      method: 'DELETE'
    });
    dispatch({
      type:DELETE_LOG,
      payload: id })
  }catch(e){
    dispatch({type:LOGS_ERROR, payload:e.message})
  }
}

//Update Log from Server
export const updateLog = (log) => async dispatch => {

  try{

    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res)
    const data = await res.json();
    console.log('response from update is: ')
    console.log(data)
    dispatch({
      type:UPDATE_LOG,
      payload: data})
  }catch(e){
    dispatch({type:LOGS_ERROR, payload:e.message})
  }
}

//Search Logs
export const searchLogs = (text) => async dispatch => {
  try{
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type:SEARCH_LOGS,
      payload: data })
  }catch(e){
    dispatch({type:LOGS_ERROR, payload:e.message})
  }
}




export const setLoading = () => {
  return {type: SET_LOADING}
}
