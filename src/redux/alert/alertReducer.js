import alertActions from "./alertActions"

export default function alertReducer(state = {}, action) {
  switch (action.type) {
    case alertActions.SUCCESS:
      return {
        type: "success",
        message: action.message,
      }
    case alertActions.ERROR:
      return {
        type: "danger",
        message: action.message,
      }
    case alertActions.CLEAR:
      return {}
    default:
      return state
  }
}
