import React, { Fragment, Component } from 'react'
import './App.css'

class ContactDisplay extends Component {

  render() {
    return (
      <Fragment>
        <h1>Contact Display</h1>
        <section>
          <div className="contactdisplay">
            <h4>First Name:</h4>
            <p>{this.props.fname}</p>
            <h4>Last Name:</h4>
            <p>{this.props.lname}</p>
            <h4>Email:</h4>
            <p>{this.props.email}</p>
            <h4>Phone:</h4>
            <p>{this.props.phone}</p>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default ContactDisplay

