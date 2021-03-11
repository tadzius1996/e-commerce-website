import React, {useState, useEffect} from 'react'
import './MyProfile.css'
import useGlobalProvider from '../context'
import {useHistory, Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const MyProfile = () => {
    const {logout} = useGlobalProvider();
    const [error, setError] = useState('');
    const history = useHistory();

    useEffect(() => {
      Aos.init({duration: 3000});
    }, []);

    async function handleLogout() {
  
      setError("")

      try {
        await logout()
        history.push("/About")
      } catch {
        setError("Failed to log out")
      }
    }

    return (
      <>
      <Navbar/>
      <br/>
        <br/>
        <br/>
        <br/>
        <div className='container-holder'>
        <div className='profile-container'>
          <ul className='profile-list' data-aos='fade-down'>
            <Link to='MyBoard'><li className="profile-item">MY BOARD</li></Link>
            <Link to='MyOrders'><li className="profile-item">MY ORDERS</li></Link>
            <Link to='/AddressBook'><li className="profile-item">ADDRESS BOOK</li></Link>
            <Link to='/AccountDetails'><li className="profile-item">ACCOUNT DETAILS</li></Link>
            <li onClick={handleLogout} className="profile-item">LOG OUT</li>
          </ul>
        
            <div className='profile-text'>
              <p className="board" data-aos='fade-down'>WELCOME TO MY BOARD</p>
              <p className='board-text' data-aos='fade-down'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus atque</p>
            </div>
            <div className='my-profile'>
                <h1 data-aos='fade-up' className='my-pro-file'>MY <br /> PRO- <br /> FILE</h1>
            </div>
        </div>
        
        </div>
        <img className='profile-art' src='/profile2.png' data-aos='fade-up' alt='profile-art'/>
        <Footer />
        </>
    )
}

export default MyProfile
