import React from 'react'

export default function Cards(props) {
  return (
    <div className='cardsContainer'>
        <div className='Cards'>
            <div className="title">{props.title}</div>
            <div className="tech">{props.tech_used}</div>
            <div className='projectLinks'>
              <a href={props.source_code} target="_blank" rel='noreferrer' className="sourcelink">Source code</a>
              <a href={props.demo} target="_blank" rel='noreferrer'>Demo</a>
            </div>     
        </div>
    </div>
    
  )
}
