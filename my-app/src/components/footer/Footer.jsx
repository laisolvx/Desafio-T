import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
    <>
    <section className="newletter">
        <div className="container flexSB">
            <div className="left row">
                <h1>BYTE SCHOOL</h1>
                <p>Contact Us</p>
            </div>
            <div className="right row">
                <input type="text" placeholder='Enter email address' />
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
    </section>
    </>
  )
}
