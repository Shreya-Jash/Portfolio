import React from 'react'
import scroll from "../images/scrollup.png"

export default function () {

    function handleScroll()
    {
        window.scrollTo(0,0);
    }

  return (
    <div>
        <img onClick={handleScroll} src={scroll} alt="scrollup" className='scrollup'/>
    </div>
  )
}
