const initialState = {
  history: [],
};
function makeHistory(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
  case 'ADD_HISTORY':
    const history = [...state.history, payload.history];
    return { history };
  default:
    return state;
  }
}

function actionForHistory(history) {
  return {
    type: 'ADD_HISTORY',
    payload: { history }
  };
}


module.exports = {
  makeHistory,
  actionForHistory,
  initialState
};
