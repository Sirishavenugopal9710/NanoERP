import React from 'react'
import './Regular.scss'
const Regular = () => {
    return (
        <div>
         <div className="container">
             
         <form action="/action_page.php">
         <h1 className="personal">Personal Details</h1>
    <div className="row">
      <div className="column-25">
        <label>First Name</label>
      </div>
      <div className="column-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
      </div>
      <div className="row">
      <div className="column-25">
        <label>Phone Number</label>
      </div>
      <div className="column-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
      </div>
      <div className="row">
      <div className="column-25">
        <label>Email Id</label>
      </div>
      <div className="column-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
      </div>
      <div className="row">
      <div className="column-25">
        <label>Authorised C&F</label>
      </div>
      <div className="column-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
      </div>
      <div className="row">
      <div className="column-25">
        <label>Address</label>
      </div>
      <div className="column-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
      </div>
      <h1 className="personal">Bank Details</h1>
      <div className="row">
      <div className="column-25">
        <label>Bank Name</label>
      </div>
      <div className="column-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
      </div>
      <div className="row">
      <div className="column-25">
        <label>Account Number</label>
      </div>
      <div className="column-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
      </div>
      <div className="row">
      <div className="column-25">
        <label>IFSC Code</label>
      </div>
      <div className="column-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
      </div>

      </form>
         </div>
        </div>
    )
}

export default Regular
