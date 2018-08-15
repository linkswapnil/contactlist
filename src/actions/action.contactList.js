import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  ADDING_CONTACT,
  CONTACT_ADDED,
  CANCEL_ADD_CONTACT,
} from 'constants/ActionTypes'

export function addContact(data) {
  return {
    type: ADD_CONTACT,
    payload: { data },
  }
}

export function editContact(data) {
  return {
    type: EDIT_CONTACT,
    payload: { data },
  }
}

export function deleteContact(data) {
  return {
    type: DELETE_CONTACT,
    payload: { data },
  }
}

export function addingContact(data) {
  return {
    type: ADDING_CONTACT,
    payload: { data },
  }
}

export function contactAdded(data) {
  return {
    type: CONTACT_ADDED,
    payload: { data },
  }
}

export function cancelAddContact(data) {
  return {
    type: CANCEL_ADD_CONTACT,
    payload: { data },
  }
}
