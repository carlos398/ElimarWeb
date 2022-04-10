import React from 'react'
import AboutEliana from '../../../../src/images/ElianaAbout2.jpg'

import "./About.css"

const About = () => {
  return (
    <div className='AboutContainer' id='About'>
        <section className='AboutText'>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium dolore itaque iste soluta accusantium est incidunt ut aliquam, quod reiciendis enim voluptatibus quo repudiandae ipsam odio aliquid impedit? Eos!</p>
        </section>
        <section className='ImgContainer'>
            <div className='AboutImg'>
                <img src={AboutEliana} alt="" />
            </div>
        </section>
    </div>
  )
}

export default About