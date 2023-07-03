import React from 'react'
import Contact from './Contact'
import Skills from './Skills'
import Profile from './Profile'
import Experience from './Experience'

const Page = () => {
  return (
    <div>
      <div className='page-container'>
        <div className='header-container'>
            <header className='title-header-large'>Jacques Henry Adams</header>
            <hr></hr>
            <header className='title-header-med'>Computer Programmer / Technical Consultant</header>
            <hr></hr>
        </div>

        <div className='content-container'>
            <div className='left-container'>
                <Contact></Contact>
                <Skills></Skills>
            </div>
            <div className='right-container'>
                <Profile></Profile>
                <Experience></Experience>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Page
