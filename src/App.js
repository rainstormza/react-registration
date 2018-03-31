import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'

const initialState = {
  name: '',
  email: '',
  ticketType: '',
  food: false,
  agreeTerms: false
}

class App extends Component {
  state = initialState

  render() {
    // eslint-disable-next-line
    const { name, email, ticketType, food, agreeTerms, countdown } = this.state

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
                className="input"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
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
          </div>

          <div className="field">
            <label className="label">Ticket Type</label>
            <div className="control">
              <div className="select">
                <select
                  value={ticketType}
                  onChange={e => this.setState({ ticketType: e.target.value })}
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
                  onClick={() => this.setState({ food: true })}
                  type="radio"
                  name="question"
                />{' '}
                Yes (+50 THB)
              </label>
              <label className="radio">
                <input
                  onClick={() => this.setState({ food: false })}
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
                  onClick={e => this.setState({ agreeTerms: e.target.checked })}
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
              <button
                className="button is-text"
                onClick={() => this.setState(initialState)}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default App
