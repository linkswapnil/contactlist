import { CONTACT_ADDED, ADDING_CONTACT, CANCEL_ADD_CONTACT } from 'constants/ActionTypes'

const initialState = {
  addingContact: false,
}

const main = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_CONTACT:
      return { ...state, addingContact: true }
    case CONTACT_ADDED:
      return { ...state, addingContact: false }
    case CANCEL_ADD_CONTACT:
      return { ...state, addingContact: false }
    default:
      return state
  }
}

export default main
