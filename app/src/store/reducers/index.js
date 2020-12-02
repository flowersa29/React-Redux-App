import {GET_BREWIES_START, GET_BREWIES_SUCCESS} from "../actions"

const initialState = {
  breweries: [],
  isloading: false,
  error: ""

}

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_BREWIES_START:
      return{
        ...state,
        isLoading: true
      }
    case GET_BREWIES_SUCCESS:
      return{
        ...state,
        isLoading: false,
        breweries:action.payload
      }
    default:
      return state;
  }
}