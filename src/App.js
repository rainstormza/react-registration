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
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
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
                <select>
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
                <input type="radio" name="question" /> Yes (+50 THB)
              </label>
              <label className="radio">
                <input type="radio" name="question" /> No
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" /> I agree to the{' '}
                <a href="">terms and conditions</a>
              </label>
            </div>
          </div>

          <p>Price: 100 THB</p>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Register</button>
            </div>
            <div className="control">
              <button className="button is-text">Reset</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default App
