import React from 'react'
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className='central'>
        <div className='letter'>
          <div className='line'></div>
          <h1>Humanizing</h1>
          <h1>your insurance</h1>
          <p>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected</p>
          <button>view plans</button>
        </div>
        <Image id='img' src={"/image-intro-desktop.jpg"} width={'120'} height={'120'} />
      </div>
    </>
  )
}