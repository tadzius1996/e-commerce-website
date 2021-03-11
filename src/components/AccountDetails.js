import React, {useState, useRef} from 'react'
import {Link, useHistory} from 'react-router-dom'
import useGlobalProvider from '../context'
import './AccountDetails.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AccountDetails = () => {

    const {currentUser, logout, updatePassword, updateEmail} = useGlobalProvider();
    const [error, setError] = useState('');
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [open, setOpen] = useState(false);
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const emailRef = useRef();
    const [loading, setLoading] = useState('')

    async function handleLogout() {
  
      setError("")

      try {
        await logout()
        history.push("/About")
      } catch {
        setError("Failed to log out")
      }
    }

    function handleUpdate(e) {
      e.preventDefault()
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
  
      const promises = []
      setLoading(true)
      setError("")
  
      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
      }
      if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
      }
  
      Promise.all(promises)
        .then(() => {
          history.push("/")
        })
        .catch(() => {
          setError("Failed to update account")
        })
        .finally(() => {
          setLoading(false)
        })
    }

    setTimeout(() => {
      setError('')
  }, 3000);
   
    return (
      <>
      <Navbar />
      <br/>
        <br/>
        <br/>
        <br/>
      <div className='sliding-container' style={{transform: open ? 'translateX(0px)' : ''}}>
      {error ? <h3 className='error-warning'>* {error}</h3> : ''}
      <div className='flex'><p className="registerr">ACCOUNT DETAILS</p><span className='close-btnn' onClick={() => setOpen(false)}>x</span></div>
      <div className='address-container'>
              <form id="form3" type='submit' className='form-controll' onSubmit={handleUpdate}>        
                  <label className='form-label'>First name</label>
                  <input className='form-input' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                  <label className='form-label'>Last name</label>
                  <input className='form-input' value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                  <label className='form-label'>Email address</label>
                  <input className='form-input' type="email" ref={emailRef} defaultValue={currentUser.email} required/>
                  <label className='form-label'>Password</label>
                  <input className='form-input' type='password' ref={passwordRef} placeholder='Leave blank to keep the same'/>
                  <label className='form-label'>Confirm Password</label>
                  <input className='form-input' type='password' ref={passwordConfirmRef} placeholder='Leave blank to keep the same'/>
                  <div className='accountBox-btns'>
                  </div>   
              </form> 
            </div>
            <button form="form3" type='submit' className='registerBox-btnn' >UPDATE</button>
            </div>
        <div className='container-holder'>
        <div className='profile-container'>
        <ul className='profile-list'>
            <Link to='MyBoard'><li className="profile-item">MY BOARD</li></Link>
            <Link to='MyOrders'><li className="profile-item">MY ORDERS</li></Link>
            <Link to='/AddressBook'><li className="profile-item">ADDRESS BOOK</li></Link>
            <Link to='/AccountDetails'><li className="profile-item">* ACCOUNT DETAILS</li></Link>
            <li onClick={handleLogout} className="profile-item">LOG OUT</li>
          </ul>
        
            <div className='profile-text'>
              <p className="board">ACCOUNT DETAILS</p>
              <p className='user'>{currentUser.email}</p>
              <p className='edit-detailss'onClick={() => setOpen(!open)}>EDIT ACCOUNT DETAILS</p>
            </div>
            <div className='profile-text'>
              <p className="board">PAYMENTS DETAILS</p>
              <p className='board-text'></p>
              <p className='user'>You have not set up payment yet.</p>
              <p className='edit-detailss'>ADD PAYMENT DETAILS</p>
            </div>
            <div className='my-profile'>
                <h1 className='my-pro-file'>MY <br /> PRO- <br /> FILE</h1>
            </div>
        </div>

        </div>
        <img className='profile-art' src='/profile2.png' alt='profile-art' />
        <Footer />
        </>
    )
}

export default AccountDetails
