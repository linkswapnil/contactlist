import { connect } from 'react-redux'
import MainContent from '../components/layout/MainContent'
import { addingContact, cancelAddContact } from '../actions/action.contactList'

export const mapStateToProps = state => {
  return {
    addingContact: state.main.addingContact,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onAddingContact: data => dispatch(addingContact(data)),
    onCancelAddContact: data => dispatch(cancelAddContact(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
