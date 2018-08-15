import React, { Component, Fragment } from 'react'
import ContactDisplay from './ContactDisplay'

class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.setState({
      propfname: this.state.firstName,
      proplname: this.state.lastName,
      propemail: this.state.email,
      propphone: this.state.phone,
    })
    event.preventDefault()
  }

  render() {
    return (
      <Fragment>
        <body>
          <h1>Enter Contact Info</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label form="firstname">First Name: </label>
              <input type="text" id="firstname" name="firstname"
                     placeholder="First name" onChange={e => this.setState({ firstName: e.target.value })} />
            </div>
            <div className="form-group">
              <label form="lastname">Last Name: </label>
              <input type="text" id="lastname" name="lastname"
                     placeholder="Last name" onChange={e => this.setState({ lastName: e.target.value })} />
            </div>
            <div className="form-group">
              <label form="email">Email: </label>
              <input type="email" id="email" name="email"
                     placeholder="Enter Email" onChange={e => this.setState({ email: e.target.value })} />
            </div>
            <div className="form-group">
              <label form="phone">Phone: </label>
              <input type="tel" id="phone" name="phone"
                     placeholder="Enter Phone" onChange={e => this.setState({ phone: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <ContactDisplay
            fname={this.state.propfname}
            lname={this.state.proplname}
            email={this.state.propemail}
            phone={this.state.propphone}
          />
        </body>
      </Fragment>
    )
  }
}

export default ContactForm