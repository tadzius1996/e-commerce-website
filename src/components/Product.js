import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({product}) => {
    const max_length = 80;

    return (
        <div className='product-container'>
           <div className='imageWrap'>
               <div>
           <Link to={`/Product/${product.id}`} ><img className='picture' src={product.image} alt='' /></Link>
           </div>
               <div className='details'>
               <h3 className='product-title'>{`${product.title.substring(0, 50)}...`}<Link to={`/Product/${product.id}`}><a className='view-more' href='#'>view more</a></Link></h3>
               <h6 className='product-description'>{`${product.description.substring(0, max_length)}...`}<Link to={`/Product/${product.id}`}><a className='read-more' href='#'>read more</a></Link></h6>
               <h3 className='product-price'>{product.price}$</h3>
               </div>
               <button className='add-basket'><Link to={`/Product/${product.id}`}><a className='show'>VIEW PRODUCT</a></Link></button>
            </div>
        </div>
    )
}

export default Product
