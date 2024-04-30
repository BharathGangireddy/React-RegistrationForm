import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: '',
    lastNameError: '',
    formSubmit: false,
  }

  handleSubmit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' || lastName === '') {
      this.setState({
        firstNameError: firstName === '' ? 'Required' : '',
        lastNameError: lastName === '' ? 'Required' : '',
      })
    } else {
      this.setState({formSubmit: true})
    }
  }

  handleBlur = event => {
    const {name, value} = event.target
    if (value === '') {
      this.setState({
        [`${name}Error`]: 'Required',
      })
    } else {
      this.setState({
        [`${name}Error`]: '',
      })
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
    console.log(name)
    console.log(value)
  }

  handleAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameError: '',
      lastNameError: '',
      formSubmit: false,
    })
  }

  render() {
    const {
      firstName,
      lastName,
      firstNameError,
      lastNameError,
      formSubmit,
    } = this.state

    return formSubmit ? (
      <div className="container">
        <h1>Registration</h1>
        <div className="form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
            className="success-img"
          />
          <p>Submitted Successfully</p>
          <button
            type="button"
            className="submit-button"
            onClick={this.handleAnotherResponse}
          >
            Submit Another Response
          </button>
        </div>
      </div>
    ) : (
      <div className="container">
        <h1>Registration</h1>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div className="input-ele-container">
            <label htmlFor="firstName" className="label-element">
              FIRST NAME
            </label>
            <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              className="inputElement"
              value={firstName}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
            />
            <br />
            <label>{firstNameError}</label>
          </div>

          <div className="input-ele-container">
            <label htmlFor="lastName" className="label-element">
              LAST NAME
            </label>
            <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              className="inputElement"
              value={lastName}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
            />
            <br />
            <label>{lastNameError}</label>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
