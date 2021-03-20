import React, {useState, useEffect} from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {useParams} from 'react-router-dom'
import './ProductInfo.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import useGlobalProvider from '../context'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PacmanLoader from "react-spinners/PacmanLoader"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { HiOutlineLightBulb } from 'react-icons/hi'

const ProductInfo = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({data: null});
    const [open, setOpen] = useState(false);
    const url = `https://secret-ocean-49799.herokuapp.com/https://fakestoreapi.com/products/${id}`
    const {onAdd} = useGlobalProvider();
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

    let content = null;

  useEffect(() => {
    setLoading(true);
      setProduct({
          data: null
      })
      axios.get(url)
      .then(response => {
          setProduct({
              data: response.data
          })
          setLoading(false)
      })
  }, [url]);

  function handleBasket() {
      onAdd(product.data);
      setMessage('Item added to cart')
  }

  setTimeout(() => {
    setMessage('')
}, 3000);

  if(product.data){
      content =
      <div className='product-main'>
      <div className='main'>
      <div className='details-container' >
          <Zoom zoomMargin={80} >
          <img src={product.data.image} alt='' className='image' data-aos='fade-up'/>
          </Zoom>
          <div className='information' data-aos='fade-down'>
          <h2 className='details-title'>{product.data.title}</h2>
          <h4 className='details-category'>{product.data.category}</h4>
          <h4 className='details-description'>{product.data.description}.</h4>
          <h2 className='details-price'>{product.data.price}$</h2>
          <div className='btn-flex'>
          <button onClick={() => setOpen(!open)} className='terms'>View shipping terms</button>
          
          <div className='added-cart'>
          <button className='button' onClick={() => handleBasket()}>ADD TO CART</button><span> {message ? <h3 className='message'> <HiOutlineLightBulb className='bulb'/> {message}</h3> : ''}</span>
          </div>
          </div>
          </div>
      </div>
      </div>
      <div className='term-box' style={{transform: open ? 'translateX(0px)' : ''}}>
          <button onClick={() => setOpen(false)} className='close'>x</button>
          <div className="overlay" style={{transform: open ? 'translateY(0px)' : ''}}></div>
              <div className='shipping-container'>
                  <p className='primary'>Delivery times:</p>
                  <p className='secondary'>Italy: 2-3 working days</p>
                  <p className='secondary'>Worldwide: 2-5 working days</p>
              </div>
              <div className='shipping-container'>
                  <p className='primary'>Shipping fees:</p>
                  <p className='secondary'>Italy € 6,00</p>
                  <p className='secondary'>EU € 12,00</p>
              </div>
              <div className='shipping-container'>
                  <p className='primary'>Product return:</p>
                  <p className='secondary'>Free replacement</p>
                  <p className='secondary'>Product refund without delivery cost</p>
              </div>
          </div>
          <button className='shop-btn'><Link to='/' data-aos='fade-up'>BACK TO SHOP</Link></button>
      </div>
  }

    return (
        <>
        {
      loading ?
      <div className='loader'>
      <PacmanLoader color={'#00122c'} loading={loading} size={15} />
      </div>

      :
      <>
        <Navbar  data-aos='fade-in'/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
            {content}
        </div>
        <Footer />
        </>
}
        </>
    )
}

export default ProductInfo
