import React from 'react'
import './Index.css'
function Advertise() {
  return (
    <div className='ad-container'>
        <div className="l-div">
            <img src="./Images/advertise.png" alt="" />
        </div>
        <div className="r-div">
          <h1>Anticipate issues, minimize downtime,<br />
          and maximize productivity with <span style={{color :" #20B9AE"}}>our <br />
          proactive customer support.</span>
          </h1>
          <fieldset>
            <legend>Precision in integration and flawless implementation.</legend>
            Our team of experts leads seamless end-to-end account setup with 
            dedicated 2-month onboarding support to ensure your success.
          </fieldset>

          <fieldset>
            <legend>Precision in integration and flawless implementation.</legend>
            Our team of experts leads seamless end-to-end account setup with 
            dedicated 2-month onboarding support to ensure your success.
          </fieldset>
          
          <fieldset>
            <legend>Precision in integration and flawless implementation.</legend>
            Our team of experts leads seamless end-to-end account setup with 
            dedicated 2-month onboarding support to ensure your success.
          </fieldset>
        </div>
    </div>
  )
}

export default Advertise;