import React from 'react'
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 5px; */
  font-size: 1rem;
  text-align: center;
  color: #6c757d;
  a {
    &:hover, &:active, &:focus { 
      text-shadow: 1px 1px 1px rgba(150, 150, 150, 1); 
    }
  }
  .footer-wrapper {
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
    @media (max-width: 575px) {
      justify-content: center;
      flex-direction: column;
      align-content: center;
    }
    nav {
      display: inline-flex;
      justify-content: center;
      gap: 8px;
    }
    .social-links {
      display: flex;
      justify-content: center;
      gap: 8px;
    }
  }
  `

const Footer = () => {
  return (
<FooterStyles>
  <div className="footer-wrapper">
  <nav className='navbar'>
    <a href='#projects' className='slide-in'>
      Past Work
    </a>
    <a href='#skills' className='slide-in'>
      Skills
    </a>
    <a href='#projects' className='slide-in'>
      My Work
    </a>
    <a href='#contact' className='slide-in'>
      Contact Me
    </a>
  </nav>
  <div className="social-links">
    <a
    href='http://ie.linkedin.com/in/christinetrant'
    target='_blank'
    rel='noreferrer'
    className='slide-in green'>
      <TbBrandLinkedin className='icon-marker' />
    </a>
    <a
    href='https://github.com/christinetrant'
    target='_blank'
    rel='noreferrer'
    className='slide-in green'>
      <TbBrandGithub className='icon-marker' />
    </a>
  </div>
  </div>
</FooterStyles>
  )
}

export default Footer