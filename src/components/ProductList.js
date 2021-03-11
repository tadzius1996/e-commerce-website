import React, {useState, useEffect, useMemo} from 'react'
import './ProductList.css'
import Product from './Product'
import axios from 'axios';
import PacmanLoader from "react-spinners/PacmanLoader";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Aos from 'aos'
import 'aos/dist/aos.css'

const ProductList = () => {
  const url = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState({data: null});
  const [search, setSearch] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

  let content = null;
 // let filtered = null;

  useEffect(() => {
      setLoading(true);
      setProducts({
          data: null
      })
      axios.get(url)
      .then(response => {
          setProducts({
              data: response.data
          })
          setLoading(false)
      })
  }, [url]);

  console.log(products.data)

  if(products.data){
      content = products.data.filter((product) => {
          if (search == '') {
              return product
          } else if (product.title.toLowerCase().includes(search.toLowerCase())) {
              return product
          }
      }).map((product) => 
        <div>
          <Product product={product} key={product.id} />
            </div>
      )
  }

  const handleChange = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
      
  }

  if(products.data){
  if (search.length > 0) {
    products.data = products.data.map((pro) => pro).filter((product) => {
        return product.title.toLowerCase().match(search) 
    })
  }
}

 /* const filtered = useMemo(() => {
      if (!search) return products.data;

      return products.data.filter((product) => {
          return product.data.title.toLowerCase().includes(search.toLowerCase())
      });
  }, [search, products.data]); */

// const filteredProducts = products.data ? products.data.filter((product) => product.title.includes(search).toString()) : []
  
    return (
        <div className='container'> 
            {
      loading ?
      <div className='loader'>
      <PacmanLoader color={'#00122c'} loading={loading} size={15} />
      </div>

      :
      <>
       <Navbar />
       <br/>
        <br/>
        <br/>
        <br/>
       <div className='hero-section'>
           <div className='hero-front'>
           <h1 className='hero-title' data-aos='fade-down'>BLACK FRIDAY<br /> COLLECTION 2021</h1>
           <p className='hero-text' data-aos='fade-down'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, illo.<br /> Mollitia, reiciendis? Tenetur tempora quia, distinctio consequatur</p>
           <button className='hero-btn' data-aos='fade-down'>SHOP NOW</button>
           </div>
           <img className='shop' src='/shop.png' data-aos='fade-down'/>
           <img className='shop-sit' src='/sitDown.png' data-aos='fade-down'/>
           <div className='circle' data-aos='fade-down'></div>
       <input className='product-search' placeholder='search' type='text' value={search} onChange={handleChange} data-aos='fade-down'/>
       </div>
        <div className='products-container'>
            {content}
        </div>
        <Footer /> 
        </>
         }
        </div>
    )
}

export default ProductList
