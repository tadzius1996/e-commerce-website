import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <ul className='list-footer'>
                <Link to='/TermsOfUse'><li>TERMS OF USE</li></Link>
                <Link to='/PrivacyPolicy'><li>PRIVACY POLICY</li></Link>
            </ul>
            <ul className='list-footer'>
            <li className='credits'>CREDITS<ul className='footer-credits'><li><a href='https://www.facebook.com/' className='tag'>Tadas</a></li></ul></li>
                <li className='follow-us'>FOLLOW US<ul className='footer-follow'><li><a href='https://www.facebook.com/' className='tag'>FACEBOOK</a></li><li><a href='https://www.instagram.com/' className='tag'>INSTAGRAM</a></li></ul></li>
            </ul>
        </div>
    )
}

export default Footer
