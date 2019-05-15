import { 
  FETCH_CHARS_FAILURE, 
  FETCH_CHARS_START, 
  FETCH_CHARS_SUCCESS
} from  "../actions";

const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARS_START:
      return {
        ...state,
        error: '',
      }
    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        error: '',
        characters: action.payload
      }
    case FETCH_CHARS_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
