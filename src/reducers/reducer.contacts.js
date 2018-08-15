import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from 'constants/ActionTypes'
let nextContactId = 3
const initialState = [
  {
    id: 1,
    firstName: 'Swapnil',
    lastName: 'Navalakha',
    emailId: 'swapnilnavlakha2010@gmail.com',
    contactNumber: '8698534130',
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Cokos',
    emailId: 'j.c@gmail.com',
    contactNumber: '1234567890',
  },
]

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        {
          id: nextContactId++,
          firstName: action.payload.data.firstName,
          lastName: action.payload.data.lastName,
          emailId: action.payload.data.emailId,
          contactNumber: action.payload.data.contactNumber,
          isActive: true,
        },
      ]
    case EDIT_CONTACT:
      return state.map(contact => {
        if (contact.id !== action.payload.data.id) {
          return contact
        }
        return {
          ...contact,
          ...action.payload.data,
        }
      })
    case DELETE_CONTACT:
      let contacts = state.filter(function(item) {
        return action.payload.data.id !== item.id
      })
      return contacts
    default:
      return state
  }
}

export default contacts
