import moment from 'moment'

const SET_FIELD = 'SET_FIELD'
const RESET_FIELDS = 'RESET_FIELDS'
const SET_COUNTDOWN = 'SET_COUNTDOWN'

const initialState = {
  name: '',
  email: '',
  ticketType: '',
  food: false,
  agreeTerms: false,
  countdown: ''
}

export default (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      }
    case RESET_FIELDS:
      return {
        ...initialState,
        countdown: state.countdown
      }
    case SET_COUNTDOWN:
      return {
        ...state,
        countdown: calcTime()
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

export const resetFields = () => ({
  type: RESET_FIELDS
})

export const setCountdown = () => ({
  type: SET_COUNTDOWN
})

const closeTime = moment('2018-04-01 12:00')

const calcTime = () => {
  const millis = closeTime.diff(moment())
  const duration = moment.duration(millis)
  return `${Math.floor(
    duration.asHours()
  )} hours ${duration.minutes()} minutes ${duration.seconds()} seconds`
}
