import React, {useEffect} from 'react'
import './About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

    return (
        <>
        <Navbar />
        <br/>
        <br/>
        <br/>
        <div className='aboutMain'>
        <div className='aboutContainer'>
            <img className='logo1' src='/shop.png' data-aos='fade-up'/>
            <h1 className='about-volta' data-aos='fade-up'>ABOUT <br/> PAGE </h1>
            <h1 className='about-voltas' data-aos='fade-up'>ABOUT PAGE </h1>
            <div className='logoDescription'>
            <p className='logoTitle' data-aos='fade-up'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis non adipisci consectetur qui, tempora rem asperiores sequi? Quisquam blanditiis maxime odio animi iure? Necessitatibus natus corrupti laborum officia, ipsum molestiae?</p>
            <p className='logoSubtitle' data-aos='fade-up'>orem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis non adipisci consectetur qui, tempora rem asperiores sequi? Quisquam blanditiis maxime odio animi iure? Necessitatibus natus corrupti laborum officia, ipsum molestiae?</p>
            <div className='holder'>
            <div className='founded'>
            <p data-aos='fade-up'>Founded</p>
            <span data-aos='fade-up'>2008</span>
            </div >
            <div className='origin' data-aos='fade-up'>
            <p data-aos='fade-up'>Origin</p>
            <span data-aos='fade-up'>Milan</span>
            </div>
            </div>
            </div>
        </div>
        
        <div className='aboutContainer'>
            <div className='logoDescription'>
            <p className='logoTitle2' data-aos='fade-up'>
            orem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis non adipisci consectetur qui, tempora rem asperiores sequi? Quisquam blanditiis maxime odio animi iure? Necessitatibus natus corrupti laborum officia, ipsum molestiae?</p>
            <p className='logoSubtitle' data-aos='fade-up'>orem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis non adipisci consectetur qui, tempora rem asperiores sequi? Quisquam blanditiis maxime odio animi iure? Necessitatibus natus corrupti laborum officia, ipsum molestiae?</p>
            <div className='holder' data-aos='fade-up'>
            <div className='founded' data-aos='fade-up'>
            <p data-aos='fade-up'>Founded</p>
            <span data-aos='fade-up'>2008</span>
            </div>
            <div className='origin' data-aos='fade-up'>
            <p data-aos='fade-up'>Origin</p>
            <span data-aos='fade-up'>Milan</span>
            </div>
            </div>
            </div>
            <div className='relative'>
            <h1 className='about-voltaaa' data-aos='fade-up'>ABOUT <br/> PAGE </h1>
            <img className='logo1' src='/cosmos.png' data-aos='fade-up'/>
            </div>
        </div>
        
        <br />
        <br />
        <br />
        <br />
        <div className='contact' data-aos='fade-up'>
        <p data-aos='fade-up'>If there’s anything you’d like to say or ask <br />
         us, we’re here and ready to help you.</p>
        <button className='contact-btn' data-aos='fade-up'>CONTACT US</button>
        </div>
        </div>
        <Footer />
        </>

       
        
    )
}

export default About
