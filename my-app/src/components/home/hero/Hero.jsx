import React from 'react'
import './Hero.css'
import Title from '../../common/title/Title'


export const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <Title subtitle='WELCOME TO BYTE SCHOOL' title='Online Education' />
                    <p>Software Development, Product Management and UX/UI Design - all with the experience of those who live in the technology market</p>
                    <div className="button">
                        <button className="primary-btn">
                            GET STARTED NOEW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button>
                            VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="marigin"></div>

    </>
  )
}

export default Hero;
