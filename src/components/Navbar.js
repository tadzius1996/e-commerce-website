import React, {useState, useRef, useEffect} from 'react'
import './Navbar.css'
import {Link, useHistory} from 'react-router-dom'
import useGlobalProvider from '../context'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Navbar = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [error, setError] = useState(false);
    const {signup, currentUser} = useGlobalProvider();
    const {login} = useGlobalProvider();
    const [loading, setLoading] = useState(false);
    const [basketOpen, setBasketOpen] = useState(false);
    const {onAdd, onRemove, cartItems, countCartItems} = useGlobalProvider();
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    useEffect(() => {
      Aos.init({duration: 3000});
    }, []);

    function handleClick() {
        setOpen(false);
        setCreateOpen(true);
    }

    function handleClickLogin() {
        setOpen(false);
        setLoginOpen(true);
    }

    function handleAlreadyHave() {
      setCreateOpen(false);
      setLoginOpen(true)
    }

    function handleDontHave() {
      setLoginOpen(false);
      setCreateOpen(true);
    }

    async function handleRegister(e) {
      e.preventDefault()
  
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        return setError("Passwords do not match")
      }
  
      try {
        setError(false)
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        setCreateOpen(false)
        setLoginOpen(true)
      } catch {
        setError("* Failed to create an account")
      }
  
      setLoading(false)
    }

    async function handleLogin(e) {
      e.preventDefault()
  
      try {
        setError("")
        setLoading(true)
        await login(loginEmailRef.current.value, loginPasswordRef.current.value)
        history.push("/MyProfile")
        setLoginOpen(false)
        
      } catch {
        setError("* Make sure your email and password are correct")
      }
  
      setLoading(false)
    }

    function handleBasket() {
      setBasketOpen(!basketOpen)
      setLoginOpen(false)
      setCreateOpen(false)
      setOpen(false)
    }

    setTimeout(() => {
      setError('');
  }, 3000);

    return (
        <div className="container">
        <nav className='navbar'>
            <ul className='list1'>
            <Link to='/' data-aos='fade-in'><li className='shop-nav'>SHOP</li></Link>
            <Link to='/About' data-aos='fade-in'><li>ABOUT</li></Link>
                </ul>
                <Link to='/'><h2 className='logo' data-aos='fade-in'>LOGOS</h2></Link>
                <ul className='list2'>
                {currentUser ? <Link to='/MyProfile'><li data-aos='fade-in'>MY PROFILE</li></Link> : <li onClick={() => setOpen(!open)} data-aos='fade-in'>MY PROFILE</li>}
                <li onClick={handleBasket} data-aos='fade-in' className='bag-nav'>BAG{' '}
          {countCartItems ? (
            <button className="badge" data-aos='fade-in'>( {countCartItems} )</button>
          ) : (
            ''
          )}</li>
                </ul>
        </nav>

        <div className='login-box' style={{transform: open ? 'translateX(0px)' : ''}}>
            <div className='login-text'>
              <div className='flex'><p className="box-board">MY PROFILE</p><span className='close-btnnn' onClick={() => setOpen(false)} >x</span></div>
              <p className='box-text'>Create an account or log in to enjoy all the benefits of having your own private area alongside with extra functionality and special offers! </p>
                <div className='accountBox-btns'>
                  <button className='createBox-btn' onClick={() => handleClick()} >CREATE AN ACCOUNT</button>
                  <button className='loginBox-btn' onClick={() => handleClickLogin()}>LOG IN</button>
                </div>
            </div>
            </div>

            <div className='login-box' style={{transform: createOpen ? 'translateX(0px)' : ''}}>
            <div className='login-textt'>
              <div className='flex'><p className="register">REGISTER</p><button className='close-btn' onClick={() => setCreateOpen(false)}>x</button></div>
              {error ? <h3 >{error}</h3> : ''}
              <form type='submit' action='submit' className='form-control' onSubmit={handleRegister}>
                  <label className='form-label'>Email Address</label>
                  <input className='form-input' type='email' ref={emailRef} required />
                  <label className='form-label'>Password</label>
                  <input className='form-input' type='password' ref={passwordRef} required />
                  <label className='form-label'>Confirm Password</label>
                  <input className='form-input' type='password' ref={confirmPasswordRef} required />
                  <div className='accountBox-btns'>
                    <p>Already have a Profile?<a href='#' className='login-button' onClick={() => handleAlreadyHave()}> Login</a></p>
                  <button type='submit' className='registerBox-btn' onSubmit={handleRegister}>REGISTER</button>
                  </div>   
              </form> 
            </div>
            </div>

            <div className='login-box' style={{transform: loginOpen ? 'translateX(0px)' : ''}}>
            {error ? <h3 className='error'>{error}</h3> : ''}
            <div className='login-textt'>
              <div className='flex'><p className="register">LOG IN</p><span className='close-btn' onClick={() => setLoginOpen(false)}>x</span></div>
              {error ? <h3 >{error}</h3> : ''}
              <form className='form-control' onSubmit={handleLogin}>
                  <label className='form-label'>Email Address</label>
                  <input className='form-input' type='email' ref={loginEmailRef}  />
                  <label className='form-label'>Password</label>
                  <input className='form-input'  type='password' ref={loginPasswordRef} />
                  <div className='accountBox-btns'>
                    <p>Don't have an account? <a className='login-button' onClick={() => handleDontHave()}>Register</a></p>
                  <button className='registerBox-btn' onSubmit={handleLogin}>LOGIN</button>
                </div>
              </form>
            </div>
            </div>

            <div className='login-box' style={{transform: basketOpen ? 'translateX(0px)' : ''}}>
            <div className='login-textt cart-list'>
              <div className='flex'><p className="shopping-bag">SHOPPING BAG</p><span className='close-btn' onClick={() => setBasketOpen(false)}>x</span></div>
                
             
              <div >
        {cartItems.length === 0 && <div>Cart is empty <img className='empty' src='/emptyy.png'/></div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className='cart-image-title'>
            <img className='cart-image' src={item.image} />
            <p className="cart-title">{item.title}</p>
            <button onClick={() => onRemove(item)} className="cart-btn">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="cart-btn">
                +
              </button>
              <p className='cart-price'>{item.qty} x ${item.price.toFixed(2)}</p>
            </div>
          </div>
           ))}
           {cartItems.length !== 0 && (
             <>
             <hr className='hr'></hr>
            <div className="row">
              <div className="checkout-price">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="checkout-price">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="checkout-price">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="checkout-price">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button className='checkout-btn' onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
             </>
           )}
          </div>

          
          
          
                

              


              </div>
            </div>
        </div>
    )
}

export default Navbar
