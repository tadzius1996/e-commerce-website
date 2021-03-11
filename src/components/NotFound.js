import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './NotFound.css'
import {Link} from 'react-router-dom'

function NotFound() {
    return (
        <>
        <Navbar />
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
            <img className='nothing-img' src='./nothing.jpg' />
            <div className='nothing-div'>
            <h1 className='nothing-title'>OOPS!</h1>
            <p className='nothing-text'>We couldn’t find the page your looking for.</p>
            <Link to='/ProductList'><button className='nothing-btn'>GO BACK</button></Link>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default NotFound
