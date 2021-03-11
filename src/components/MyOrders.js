import React, {useState} from 'react'
import './MyProfile.css'
import useGlobalProvider from '../context'
import {useHistory, Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MyOrders = () => {
    const {logout} = useGlobalProvider();
    const [error, setError] = useState('');
    const history = useHistory();

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
      <Navbar />
      <br/>
        <br/>
        <br/>
        <br/>
        <div className='container-holder'>
        <div className='profile-container'>
          <ul className='profile-list'>
            <Link to='MyBoard'><li className="profile-item">MY BOARD</li></Link>
            <Link to='MyOrders'><li className="profile-item">* MY ORDERS</li></Link>
            <Link to='/AddressBook'><li className="profile-item">ADDRESS BOOK</li></Link>
            <Link to='/AccountDetails'><li className="profile-item">ACCOUNT DETAILS</li></Link>
            <li onClick={handleLogout} className="profile-item">LOG OUT</li>
          </ul>
        
            <div className='profile-text'>
              <p className="board">MY ORDERS</p>
              <p className="board-text">No order has been made yet.</p>
            </div>
            <div className='my-profile'>
                <h1 className='my-pro-file'>MY <br /> PRO- <br /> FILE</h1>
            </div>
        </div>

        </div>
        <img className='profile-art' src='/profile2.png' alt='profile-art'/>
        <Footer />
        </>
    )
}

export default MyOrders
