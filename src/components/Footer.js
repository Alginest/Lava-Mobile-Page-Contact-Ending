import React from 'react'
import '../index.css'
import { socialLinks } from '../data/linksData'
const Footer = () => {
  return (
    <footer>
      <div className='foot-cont'>
        <form className='foot-form'>
          <div className='form-cont'>
            <div className='input-divs'>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Full Name'
                className='input-left'
              />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='E-Mail Address'
                className='input-right'
              />
            </div>
            <textarea
              name='area'
              id='area'
              placeholder='Your Message'
            ></textarea>
            <button type='submit'> Send Message Now</button>
          </div>
        </form>
        <div className='footer-info'>
          <h2>
            More About <span>Lava</span>
          </h2>
          <p>
            Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo
            auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in porta
            metus. Suspendisse blandit pulvinar ligula ut elementum.
          </p>
          <p className='footer-p'>
            If you need this contact form to send email to your inbox, you may
            follow our contact page for more detail.
          </p>
          <div className='social-links-foot'>
            {socialLinks.map((item, index) => {
              const { url, icon } = item
              return (
                <a href={url} key={index}>
                  {icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
