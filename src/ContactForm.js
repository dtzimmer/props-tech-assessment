import React, { Component, Fragment } from 'react'
import ContactDisplay from './ContactDisplay'

class ContactForm extends Component {
  constructor() { //The constructor method is a special method for creating and initializing an object created within a class.
    super() // The super keyword can also be used to call functions on a parent object.
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {//State is assigned to the prop names here. This is to prevent instant rendering of values onChange
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
          <form onSubmit={this.handleSubmit}> {/*Call to the handleSubmit function*/}
            <div className="form-group">
              <label form="firstname">First Name: </label>
              <input type="text" id="firstname" name="firstname"
                     placeholder="First name" onChange={e => this.setState({ firstName: e.target.value })} />
            </div>  {/*the onChange event sets the state of each input value*/}
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
          <ContactDisplay //Props for the child component are given their values here from the Parent component.
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