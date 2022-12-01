import React from 'react'
import './ContactStyles.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
        <div className="form-container">
        <form>
          <div>
          <h1><span style={{color: "crimson"}}>Contact</span> Us</h1>
          <label>Name</label>
          <input type="text" placeholder='Enter your name' />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder='Enter your email' />
          </div>
          <div>
            <label>Message</label>
            <textarea rows="10" placeholder='Enter your name'></textarea>
          </div>
          <button>Submit</button>
        </form>
         
         
        </div>
      </div>

    </div>
  )
}

export default Contact