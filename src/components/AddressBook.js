import React, {useState, useRef} from 'react'
import {Link, useHistory} from 'react-router-dom'
import useGlobalProvider from '../context'
import './AccountDetails.css'
import './AddressBook.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AddressBook = () => {

    const {logout} = useGlobalProvider();
    const [error, setError] = useState('');
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [shippingOpen, setShippingOpen] = useState(false);
    const firstNameRef = useRef();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');
    const [shipFirstName, setShipFirstName] = useState('');
    const [shipLastName, setShipLastName] = useState('');
    const [shipAddress, setShipAddress] = useState('');
    const [shipCountry, setShipCountry] = useState('');
    const [shipCity, setShipCity] = useState('');
    const [shipCode, setShipCode] = useState('');
    const [updated, setUpdated] = useState(false);
    const [shipUpdated, setShipUpdated] = useState(false);

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
      e.preventDefault();
      setOpen(false);
      setShippingOpen(false);
      setUpdated(true);
      setShipUpdated(true);
    }
   
    return (
      <>
      <Navbar />
      <br/>
        <br/>
        <br/>
        <br/>
      <div className='sliding-container' style={{transform: open ? 'translateX(0px)' : ''}}>
      <div className='flex'><p className="registerr">BILLING ADDRESS</p><span className='close-btnn' onClick={() => setOpen(false)}>x</span></div>
      <div className='address-container'>
              <form id="form1" type='submit' className='form-controll' onSubmit={handleUpdate}>        
                  <label className='form-label'>First name</label>
                  <input className='form-input' ref={firstNameRef} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <label className='form-label'>Last name</label>
                  <input className='form-input' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                  <label className='form-label'>Country</label>
                  <input className='form-input' value={country} onChange={(e) => setCountry(e.target.value)}/>
                  <label className='form-label'>Street address</label>
                  <input className='form-input' value={address} onChange={(e) => setAddress(e.target.value)}/>
                  <label className='form-label'>Post code/ZIP</label>
                  <input className='form-input' value={code} onChange={(e) => setCode(e.target.value)}/>
                  <label className='form-label'>Town/City</label>
                  <input className='form-input' value={city} onChange={(e) => setCity(e.target.value)}/>
                  <label className='form-label'>Phone</label>
                  <input className='form-input' />
                  <label className='form-label'>Email address</label>
                  <input className='form-input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <div className='accountBox-btns'>
                  </div>   
              </form> 
            </div>
            <button form="form1" type='submit' className='registerBox-btnn' onSubmit={handleUpdate}>UPDATE</button>
            </div>

            <div className='sliding-container' style={{transform: shippingOpen ? 'translateX(0px)' : ''}}>
            <div className='flex'><p className="registerr">SHIPPING ADDRESS</p><span className='close-btnn' onClick={() => setShippingOpen(false)}>x</span></div>
      <div className='address-container'>
              <form id="form2" type='submit' className='form-controll' onSubmit={handleUpdate}>       
                  <label className='form-label'>First name</label>
                  <input className='form-input' value={shipFirstName} onChange={(e) => setShipFirstName(e.target.value)}/>
                  <label className='form-label'>Last name</label>
                  <input className='form-input' value={shipLastName} onChange={(e) => setShipLastName(e.target.value)}/>
                  <label className='form-label'>Country</label>
                  <input className='form-input' value={shipCountry} onChange={(e) => setShipCountry(e.target.value)}/>
                  <label className='form-label'>Street address</label>
                  <input className='form-input' value={shipAddress} onChange={(e) => setShipAddress(e.target.value)}/>
                  <label className='form-label'>Post code/ZIP</label>
                  <input className='form-input' value={shipCode} onChange={(e) => setShipCode(e.target.value)}/>
                  <label className='form-label'>Phone</label>
                  <input className='form-input' />       
                  <div className='accountBox-btns'>
                  </div>   
              </form> 
            </div>
            <button form="form2" type='submit' className='registerBox-btnn' onSubmit={handleUpdate}>UPDATE</button>
            </div>
        
        <div className='container-holder'>    
        <div className='profile-container'>
        <ul className='profile-list'>
            <Link to='MyBoard'><li className="profile-item">MY BOARD</li></Link>
            <Link to='MyOrders'><li className="profile-item">MY ORDERS</li></Link>
            <Link to='/AddressBook'><li className="profile-item">* ADDRESS BOOK</li></Link>
            <Link to='/AccountDetails'><li className="profile-item">ACCOUNT DETAILS</li></Link>
            <li onClick={handleLogout} className="profile-item">LOG OUT</li>
          </ul>
            <div className='profile-text'>
              <p className="board">BILLING ADDRESS</p>
               {updated ? 
              <div className='output'>
              <div className='info-flex'>
              <p className='text-margin'>{firstName}</p>
              <p>{lastName}</p>
              </div>
              <p>{address}</p>
              <div className='info-flex'>
              <p>{city}</p>
              <p className='text-margin'>{country}</p>
              <p>{code}</p>
              </div>
              <p>{email}</p>
              </div>
                : <p className='output'>You have not set up this type of<br/> address yet.</p>}

              <p className='edit-details' onClick={() => setOpen(!open)}>EDIT ADDRESS</p>
            </div>
            <div className='profile-text'>
              <p className="board">SHIPPING ADDRESS</p>
              {shipUpdated ?
              <div className='output'>
              <div className='info-flex'>
              <p className='text-margin'>{shipFirstName}</p>
              <p>{shipLastName}</p>
              </div>
              <p>{shipAddress}</p>
              <div className='info-flex'>
              <p>{shipCity}</p>
              <p className='text-margin'>{shipCountry}</p>
              <p>{shipCode}</p>
              </div>
              </div>
              : <p className='output'>You have not set up this type of<br/> address yet.</p>}
              <p className='board-text'></p>
              <p className='edit-details' onClick={() => setShippingOpen(!shippingOpen)}>CREATE ADDRESS</p>
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

export default AddressBook
