export default (state = false, action) => {
  switch (action.type) {
    case 'RETRIEVE_DOCUMENTS':
      return action.payload || null
    default:
      return state
  }
}
