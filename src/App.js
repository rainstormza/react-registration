import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import { setField, resetFields, setCountdown } from './redux'
import Input from './Input'

class App extends Component {
  componentDidMount() {
    this.props.setCountdown()

    this.interval = setInterval(() => {
      this.props.setCountdown()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {
      name,
      email,
      ticketType,
      // eslint-disable-next-line
      food,
      agreeTerms,
      countdown,
      setField,
      resetFields
    } = this.props

    // const { countdown } = this.state

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <p>Registration will be closed in {countdown}</p>
          <Input
            value={name}
            onChange={value => setField('name', value)}
            placeholder="e.g. John Doe"
            label="Name"
          />
          {/* <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                value={name}
                onChange={e => setField('name', e.target.value)}
                className="input"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div> */}

          <Input
            value={email}
            onChange={value => setField('email', value)}
            placeholder="Email input"
            label="Email"
            type="email"
            icon="envelope"
            error="This email is invalid"
          />
          {/* <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                value={email}
                onChange={e => setField('email', e.target.value)}
                className="input is-danger"
                type="email"
                placeholder="Email input"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle" />
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div> */}

          <div className="field">
            <label className="label">Ticket Type</label>
            <div className="control">
              <div className="select">
                <select
                  value={ticketType}
                  onChange={e => setField('ticketType', e.target.value)}
                >
                  <option>Select type ...</option>
                  <option value="regular">Regular - 100THB</option>
                  <option value="premium">Premium - 300THB</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Add food?</label>
            <div className="control">
              <label className="radio">
                <input
                  onClick={() => setField('food', true)}
                  type="radio"
                  name="question"
                />{' '}
                Yes (+50 THB)
              </label>
              <label className="radio">
                <input
                  onClick={() => setField('food', false)}
                  type="radio"
                  name="question"
                />{' '}
                No
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  value={agreeTerms}
                  onClick={e => setField('agreeTerms', e.target.checked)}
                  type="checkbox"
                />{' '}
                I agree to the <a href="">terms and conditions</a>
              </label>
            </div>
          </div>

          <p>Price: 100 THB</p>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Register</button>
            </div>
            <div className="control">
              <button className="button is-text" onClick={() => resetFields()}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

// conntect(mapStateToProps, mapDispatchToProps)
// const mapDispatchToProps = { setField, resetFields, setCountdown };
const mapDispatchToProps = dispatch => ({
  setField: (key, value) => dispatch(setField(key, value)),
  resetFields: () => dispatch(resetFields()),
  setCountdown: () => dispatch(setCountdown())
})

export default connect(state => state, mapDispatchToProps)(App)
