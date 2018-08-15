import { connect } from 'react-redux'
import { ContactList } from '../components'
import { deleteContact } from '../actions/action.contactList'
function compare(a, b) {
  return b.id - a.id
}
export const mapStateToProps = state => {
  return {
    contacts: state.contacts.sort(compare),
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    doDelete: data => dispatch(deleteContact(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
