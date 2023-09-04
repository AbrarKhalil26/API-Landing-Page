import React from 'react'
import './Footer.css'

// Imported Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faTwitter , faFacebook ,faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className='Footer'>
            <div className='container-fluid container-lg'>
                <div className='row g-5 g-lg-0'>
                    <div className='col-12 col-lg-3'>
                        <div className='logo ps-4 ps-lg-0'>
                            <a href='#/'>Shortly</a>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='text row justify-content-between g-4'>
                            <div className='col-12 col-sm-6 col-md-4'>
                                <ul>
                                    <h5>Features</h5>
                                    <li>Like Shortening</li>
                                    <li>Branded Links</li>
                                    <li>Analytics</li>
                                </ul>
                            </div>

                            <div className='col-12 col-sm-6 col-md-4'>
                                <ul>
                                    <h5>Resources</h5>
                                    <li>Blog</li>
                                    <li>Developers</li>
                                    <li>Support</li>
                                </ul>
                            </div>

                            <div className='col-12 col-sm-6 col-md-4'>
                                <ul>
                                    <h5>Company</h5>
                                    <li>About</li>
                                    <li>Our Team</li>
                                    <li>Careers</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className='social d-flex gap-3 justify-content-center'>
                            <FontAwesomeIcon icon={faFacebook} />     
                            <FontAwesomeIcon icon={faTwitter} />      
                            <FontAwesomeIcon icon={faPinterest} />      
                            <FontAwesomeIcon icon={faInstagram} />      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
