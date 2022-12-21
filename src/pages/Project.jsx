import React from 'react'
import data from '../components/Projectsdata'
import Cards from "../components/Cards"
import '../styles/project.css'

function Project() {
  return (
    <div className="projects" id='project'>
      <h1>Some of my works -</h1>
        <section className='project-section'>
          {data.map((item,index) => 
          {
              return (
                  <Cards 
                      key={index}
                      {...item}
                  />
              )
          })}
        </section>
      <h2>Checkout more projects of mine 👉<a href='https://github.com/Shreya-Jash'>GitHub</a></h2>
    </div>
  )
}

export default Project