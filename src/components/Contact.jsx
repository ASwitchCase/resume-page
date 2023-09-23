import React from 'react'
import addressicon from '../images/address.png'
import emailicon from '../images/email.png'
import phoneicon from '../images/phone.png'
import linkedinicon from '../images/linkedin.png'
import githubicon from '../images/github.png'
const Contact = () => {
  return (
    <div>
      <div className='content-container'>
        <h1>Contact</h1>
        <div>
          <img style={{display:'inline-block'}}src={phoneicon}></img>
          <h2 style={{display:'inline-block'}}>551-222-9882</h2>
        </div>

        <div>
          <img style={{display:'inline-block'}}src={emailicon}></img>
          <h2 style={{display:'inline-block'}}>adamsjacques546@gmail.com</h2>
        </div>
        
        <div>
          <img style={{display:'inline-block'}}src={addressicon}></img>
          <h2 style={{display:'inline-block'}}>Jersey City New Jersey</h2>
        </div>

        <div>
          <img style={{display:'inline-block'}}src={linkedinicon}></img>
          <a href='https://www.linkedin.com/in/jacques-adams-20036b213/'><h2 style={{display:'inline-block'}}>jacques-adams-20036b213</h2></a>
        </div>

        <div>
          <img style={{display:'inline-block'}}src={githubicon}></img>
          <h2 style={{display:'inline-block'}}>https://github.com/ASwitchCase</h2>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
