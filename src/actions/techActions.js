import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECH_ERROR } from './types'

//this says reutn async(dispatch) => {...}, which is a function that takes in dispatch (thunk will handle that)
export const getTechs = () => async(dispatch) => {
  try{
    setLoading()
  const res = await fetch('/techs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const techs = await res.json()
  console.log(techs)
   dispatch({type:GET_TECHS, payload: techs})
}catch(err){
   dispatch({type:TECH_ERROR, payload: err.message})
  }
}

export const addTech = (tech) => async (dispatch) => {
  try{
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json()
    dispatch({type:ADD_TECH, payload: data})
  }catch(err){
    dispatch({type:TECH_ERROR, payload: err.message})
  }
}

export const deleteTech = (id) => async (dispatch) => {
  try{
    const res = await fetch(`./techs/${id}`, {
      method: 'DELETE'
    })

    dispatch({type:DELETE_TECH, payload: id})
  }catch(err){
    dispatch({type:TECH_ERROR, payload: err.message})
  }
}

//sets loading to true
export const setLoading = () => {
  return {type: SET_LOADING}
}
