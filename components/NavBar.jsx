import React from "react";

export default function NavBar() {
  return (
    <nav className="">
      <div className="desktop-nav container">
        <img src="" alt="" />
        <ul className="nav-links">
          <li>
            <a href="#" className="nav-link">
              How we work
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Account
            </a>
          </li>
          <li>
            <a href="#" className="nav-link btn b-dark">
              View plans
            </a>
          </li>
        </ul>
        <img src="" alt="" srcSet="" className="ham" />
        <img src="" alt="" srcSet="" className="close" />
      </div>
      <div className="mobile-nav">
        <ul className="m-nav-links">
          <li>
            <a href="#" className="nav-link">
              how we work
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              blog
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              account
            </a>
          </li>
          <li>
            <a href="#" className="nav-link btn b-white">
              view plans
            </a>
          </li>
        </ul>
        <img src="" alt="" className="bg-pattern bg-mobile-nav" />
      </div>
    </nav>
  );
}