const validateContact = contact => {
  let error = ''
  const contactNumberValidationRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/
  const emailAddressValidationRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim
  if (!contact.firstName || contact.firstName.length < 2) {
    error = 'Please enter valid firstName'
  } else if (!contactNumberValidationRegex.test(+contact.contactNumber)) {
    error = 'Please enter valid number'
  } else if (!emailAddressValidationRegex.test(contact.emailId)) {
    error = 'Please enter valid email address'
  }
  return error
}

export default validateContact
