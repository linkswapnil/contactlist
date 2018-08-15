import { connect } from 'react-redux'
import { AddContact } from '../components'
import { addContact, contactAdded } from '../actions/action.contactList'

const getContactAdded = state => {
  return state.contactAdded
}
export const mapStateToProps = state => {
  return {
    contactAdded: getContactAdded(state),
  }
}
export const mapDispatchToProps = dispatch => {
  return {
    doAddContact: data => {
      dispatch(addContact(data))
      dispatch(contactAdded(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact)
