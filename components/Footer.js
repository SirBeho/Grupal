import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className='f-social-media-container'>

        <div>
          <Image src="/logo.svg" width='100' height='20' />
        </div>

        <div className='f-social-media'>
          <a href='#'><Image src='/icon-facebook.svg' width='20' height='20' alt='facebook icon' /></a>
          <a href='#'><Image src='/icon-twitter.svg' width='20' height='20' alt='twiter icon' /></a>
          <a href='#'><Image src='/icon-pinterest.svg' width='20' height='20' alt='pinterest icon' /></a>
          <a href='#'><Image src='/icon-instagram.svg' width='20' height='20' alt='instagram icon' /></a>
        </div>

      </div>
      <nav className='f-options'>

        <ul className='option-list'>
          <li>Ower Company</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
        <ul className='option-list'>
          <li>Help me</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
        <ul className='option-list'>
          <li>Contact</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>

        </ul>
        <ul className='option-list'>
        <li>Others</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>

        </ul>

      </nav>
    </footer>
  )
}

export default Footer