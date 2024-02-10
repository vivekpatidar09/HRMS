import React from 'react'
import './Demo.css'

function Demo() {
  return (

        <div className="containers">

            <h1>20,000+ growing companies use 365HRMS. <br /> Take a demo and find out why.</h1>
            <div className='div-container'>
            <div className='l-div'>
                <img src="Images\screen.png" alt="" />
            </div>
            <form>
                <input type="text" placeholder='Full Name'/>
                <input type="text" placeholder='Mobile Number'/>
                <input type="text" placeholder='Business Email'/>
                <input type="text" placeholder='Company Name'/>
            <button>Request a Demo</button>
            </form>
            </div>
        </div>

  )
}

export default Demo