import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import { expect } from 'chai' // expect is assertion
import Adapter from 'enzyme-adapter-react-16'
import { Register } from '../src/features/event/Register'

Enzyme.configure({ adapter: new Adapter() })

describe('<Register />', () => {
  it('should render title correctly', () => {
    const wrapper = shallow(<Register setCountdown={() => {}} />)
    expect(wrapper.find('.title').text()).to.equal('Evenn Registration Form')
  })
})
