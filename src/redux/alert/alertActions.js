const alertActions = {
  SUCCESS: "ALERT_SUCCESS",
  ERROR: "ALERT_ERROR",
  CLEAR: "ALERT_CLEAR",
  alertSuccess: message => ({
    type: alertActions.SUCCESS,
    message,
  }),
  alertError: message => ({
    type: alertActions.ERROR,
    message,
  }),
  alertClear: () => ({
    type: alertActions.CLEAR,
  }),
}

export default alertActions
