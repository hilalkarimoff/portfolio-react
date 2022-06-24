import React from 'react'
import Typed from 'react-typed'

const Header = () =>{
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development and website services</h1>
                <Typed
                className="typed-text"
                strings={[
                    'Front-end developer',
                    'React project developer',
                    'JavaScript XML']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                   
                </Typed>

                
            </div>
            
        </div>
    )
}

export default Header