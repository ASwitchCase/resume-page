import React from 'react'

const Experience = () => {
  return (
    <div>
      <div className='content-container'>
        <h1>Experience</h1>
        <h2>Contract Technical Consultant for Metamechanics</h2>
        <h3>June 2023 - Present</h3>
        <ul>
          <li>
            <p>Analyze and identify security risks for company website. Present and recommend solutions. Improved the company website's user experience.</p>
          </li>
        </ul>

        <h2>Student Clerk, Visual Arts Building, NJCU</h2>
        <h3>September 2020 - May 2023</h3>
        <ul>
          <li>
            <p>Developed and maintained a database application for student locker assignments.</p>
          </li>
        </ul>
        

        <h2>Intern at the Office of innovation, City Hall</h2>
        <h3>July 2019 - August 2019</h3>

        <ul>
          <li>
            <p>Used WordPress to make edits and write blog entries on innovatejc.org.</p>
          </li>
        </ul>

        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Angular, ASP.Net Core, C#, Mongodb</h3>
            <p><strong>VABL</strong>: Student locker database application designed to store the contact information
              of students who have been assigned lockers, and provide simple tools to search and edit the
              information.
            </p>
          </li>
          <hr></hr>
          <li>
            <h3>React.js, Express.js, Node.js, TypeScript</h3>
            <p><strong>Conway’s game of life</strong>: Recreation of, British mathematician, John Horton Conway's 
              game of life. The game of life is a self-playing game. One interacts with the Game of Life by creating 
              an initial configuration and observing how it evolves.
            </p>
          </li>
          <hr></hr>
          <li>
            <h3>React.js, JavaScript, HTML, CSS</h3>
            <p><strong>Invoice Maker</strong>: Web application that allows the user to create a
            printable custom invoice. 

            </p>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Experience
