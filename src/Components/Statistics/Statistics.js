import React from 'react'
import './Statistics.css'

// Imported Img =====>
import brand from '../../assest/icon-brand-recognition.svg'
import records from '../../assest/icon-detailed-records.svg'
import customizable from '../../assest/icon-fully-customizable.svg'

const Adv_statistics = [
  {
    id: 1,
    img: brand,
    title: 'Brand recognition',
    details: 'Boost your brand recognition with each click.Generic links don\'t mean a thing. Branded links help instil confidence in your content.'
  },
  {
    id: 2,
    img: records,
    title: 'Detailed Records',
    details: 'Gain insights into who is clhicking your links.Knowing when and where people engage with your content helps inform better decisions.'
  },
  {
    id: 3,
    img: customizable,
    title: 'Fully Customizable',
    details: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
  }
]

const Statistics = () => {
  return (
    <div className='Statistics'>
      <div className='container-fluid container-lg'>
        <div className='title text-center'>
          <h3>Advanced  Statistics</h3>
          <p>Track how your links are performing across 
            the web with our advanced statistics dashboard.
          </p>
        </div>
        <div className='parent-card row g-5 g-lg-3'>
          {
            Adv_statistics.map(({ id , img , title , details }) => {
              return(
                <div className='child col-12 col-md-6 col-lg-4' key={id}>
                  <div className='card'>
                    <div className='img-card'>
                      <img src={img} alt='Brand'/>
                    </div>
                    <div className='text'>
                      <h5>{title}</h5>
                      <p>{details}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

          
        </div>
      </div>
    </div>
  );
};

export default Statistics
