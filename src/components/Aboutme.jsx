import React from 'react'
import menimSheklim from '../images/myphoto.jpeg'

const Aboutme = () => {
  return (
   <div className="container py-5" id='aboutme'>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
                <img  className='profile-image'  src={menimSheklim} />
            </div>
        </div>
        <div className="col-lg-6 col-xm-12">
            <div className="about-heading">About me</div>
            <p className='p-text' >I am Front-end developer. I create websites with clean codes and responsive design. I permanently improve myself. If you have 
                need for web  services you want to offer job opportunities, just call me
            </p>
        </div>
      </div>
   </div>
  )
}

export default Aboutme