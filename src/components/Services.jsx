import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faDesktop,faFileCode } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
  return (
    <div className="services">
      <h1 className='py-5'>  Our services </h1>
         
      <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faGoogle} size="2x" className='icon' />
                </div>
                <h2>SEO</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, dolorem.</p>
              </div>
            </div>

     
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faFileCode} size="2x" className='icon' />
                </div>
                <h2>Web development</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faFacebookF} size="2x" className='icon' />
                </div>
                <h2>Facebook SMM</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, dolorem.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon icon={faDesktop} size="2x" className='icon' />
                </div>
                <h2>IT,Helpdesk</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, dolorem.</p>
              </div>
            </div>
              

          </div>
      </div>
    </div>
  )
}

export default Services