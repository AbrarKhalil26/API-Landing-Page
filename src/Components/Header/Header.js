import React from 'react'
import './Header.css'

// Imported img =====>
import imgHeader from '../../assest/illustration-working.svg';


const Header = () => {
  return (
    <div className='Header'>
      <div className='container-fluid container-lg'>
        <div className='row align-items-center justify-content-between g-5'>
          <div className='col-12 col-md-6 col-lg-5'>
            <div className='box'>
              <h1>More than just shorter links</h1>
              <p>Build your brand's recognition and get detailed 
                insights on how your links are performing.
              </p>
              <button className='btn General-btn rounded-pill px-4'>
                GetStared
              </button>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-6'>
            <img src={imgHeader} alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
