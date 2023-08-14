import React from 'react'


export default function Card({icon, title}) {
  return (
    <div className="cards">
        <div className="Card">
          {icon}
          <h2>{title}</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quis saepe error iste sapiente maiores accusantium. Nulla doloribus assumenda nam itaque eveniet in rerum et!</span>
        </div>
      </div>
  )
}
