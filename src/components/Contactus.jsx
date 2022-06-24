import React from 'react'

const Contactus = () => {
  return (
   <div className="contacts">
    <div className="text-center">
        <h1>Contact us</h1>
        <p>Please fill out form...</p>
        <span></span>
    </div>
       <div className="container">
        <form >
            <div className="row">
                <div className="col-md-6 col-xs-12">
                   { /* name input */}
                    <div className="text-center">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder='name'
                        name='name'
                         />
                         <div className="line"></div>
                    </div>
                    {/* phone input */}
                    <div className="text-center">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder='phone'
                        name='phone'
                         />
                         <div className="line"></div>
                    </div>

                    {/* email */}
                    <div className="text-center">
                        <input 
                        type="email"
                        className="form-control"
                        placeholder='email'
                        name='email'

                    //  Subject
                    // <div className="text-center">
                    //     <input 
                    //     type="email"
                    //     className="form-control"
                    //     placeholder='Subject'
                    // name='subject'
                         />
                         <div className="line"></div>
                    </div>
                           {/*  */}
                </div>
                   {/* sütunun sağ tərəfi */}
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                             <textarea
                               className='form-control resize'
                               rows={5}

                             />
                        </div>
                    </div>
                 

            </div>
        </form>
       </div>

   </div>
  )
}

export default Contactus