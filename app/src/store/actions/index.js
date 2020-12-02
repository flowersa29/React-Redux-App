import axios from 'axios'
export const GET_BREWIES_START = 'GET_BREWIES_START'
export const GET_BREWIES_SUCCESS = 'GET_BREWIES_SUCCESS'

export const getbrewies =(url) => {
  return (dispatch) => {
    dispatch({type: GET_BREWIES_START })
    axios.get(url)
    .then((res) =>{
      console.log(res)
      dispatch({type: GET_BREWIES_SUCCESS, payload: res.data})

      
    }) 
    

  }
}