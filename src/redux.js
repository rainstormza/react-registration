const SET_FIELD = 'SET_FIELD'

const initialState = {
  name: '',
  email: '',
  ticketType: '',
  food: false,
  agreeTerms: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      }
    default:
      return state
  }
}

// action creator
export const setField = (key, value) => ({
  type: SET_FIELD,
  key,
  value
})
