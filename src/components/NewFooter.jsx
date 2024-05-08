import React from 'react'
import { myDp } from '..'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'

const NewFooter = () => {
    return <>
        <div id='footer-section' style={{zIndex:'999'}}>
            <div className='ml-row'>
                <div className='ml-column triplet footer-col'>
                    <span id='footer-logo-text'>mL<small>.com</small></span>
                    <small className='descr'>list everything online.</small>
                </div>
                <div className='ml-column triplet footer-col'>
                    <p style={{ marginBottom: '150px' }}>

                    </p>
                    <pre className='pt-5'>
                        Here you can write some content about author.
                    </pre>
                </div>
                <div className='ml-column triplet footer-col'>
                    <ul id='footer-social-icons'>
                        <li><Link to={'#'}><FaFacebook className='social-icons' /></Link></li>
                        <li><Link to={'#'}><FaWhatsapp className='social-icons' /></Link></li>
                        <li><Link to={'#'}><FaInstagram className='social-icons' /></Link></li>
                        <li><Link to={'#'}><FaTelegram className='social-icons' /></Link></li>
                        <li><Link to={'#'}><FaLinkedin className='social-icons' /></Link></li>
                        <li><Link to={'#'}><FaGithub className='social-icons' /></Link></li>
                    </ul>
                </div>
            </div>

            <div className='ml-row footer-row' id='quote-section'>
                <div className='ml-column triplet'>
                    <img id='avatar' src={myDp} alt='avatar' width={200} height={200} />
                </div>
                <div className='ml-column triplet'>
                    <h2 className='quoteText'>Some quote</h2>
                </div>
                <div className='ml-column triplet'>

                </div>
            </div>
        </div>
        <div id="copyright">
            <p>Copyrights <small>| 2024 - 27 |</small> &copy; marketListing</p>
        </div>
    </>
}

export default NewFooter