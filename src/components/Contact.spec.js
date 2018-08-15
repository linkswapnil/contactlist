import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import 'jest-enzyme'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Contact from './Contact'

configure({ adapter: new Adapter() })

describe('Contact Component', () => {
  it('initializes the state with contact details received from contact prop', () => {
    const contact = {
      firstName: 'Swapnil',
      lastName: 'N',
      contactNumber: 8698534130,
      emailId: 'linkswapnil@yahoo.co.in',
    }
    const component = shallow(<Contact contact={contact} />)
    expect(component.state().firstName).toEqual(contact.firstName)
    expect(component.state().lastName).toEqual(contact.lastName)
    expect(component.state().contactNumber).toEqual(contact.contactNumber)
    expect(component.state().emailId).toEqual(contact.emailId)
    expect(component.state().displayEditContactForm).toEqual(false)
  })

  it('invokes doDelete function on click of deleteContact button', () => {
    const onButtonClick = sinon.spy()
    const contact = {
      firstName: 'Swapnil',
      lastName: 'N',
      contactNumber: 8698534130,
      emailId: 'linkswapnil@yahoo.co.in',
    }
    const doDelete = arg => {}
    const spyDelete = sinon.spy(doDelete)
    const component = shallow(<Contact contact={contact} doDelete={onButtonClick} />)
    component.setProps({ doDelete: spyDelete })
    component.find('#deleteButton').simulate('click')
    sinon.assert.calledWith(spyDelete, contact)
  })

  it('toggles displayEditContactForm state on click of edit button', () => {
    const contact = {
      firstName: 'Swapnil',
      lastName: 'N',
      contactNumber: 8698534130,
      emailId: 'linkswapnil@yahoo.co.in',
    }
    const component = shallow(<Contact contact={contact} />)
    component.find('#editButton').simulate('click')
    expect(component.state().displayEditContactForm).toEqual(true)
  })

  it('performs validation on form submission', () => {
    const contact = {
      firstName: 'Swapnil',
      lastName: 'N',
      contactNumber: 8698534130,
      emailId: 'linkswapnil',
    }
    const component = shallow(<Contact contact={contact} />)
    component.setState({ displayEditContactForm: true })
    component.find('form').simulate('submit', { preventDefault: () => undefined })
    expect(component.state().error).toEqual('Please enter valid email address')
  })

  it('performs edit when there are no validation error', () => {
    const contact = {
      firstName: 'Swapnil',
      lastName: 'N',
      contactNumber: 8698534130,
      emailId: 'linkswapnil',
    }
    const component = shallow(<Contact contact={contact} />)
    component.setState({ displayEditContactForm: true })
    component.find('form').simulate('submit', { preventDefault: () => undefined })
    expect(component.state().error).toEqual('Please enter valid email address')
  })
})
