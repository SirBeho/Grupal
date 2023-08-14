"use client"

import NavBar from "@/components/NavBar"
import Header from "@/components/Header"
import Acount from "@/components/Acount"
import Blog from "@/components/Blog"
import Footer from "@/components/Footer"

export default function Home() {

  return (
   
      <h1 className="container">
          <NavBar/>
          <Header/>
          <Blog/>
          <Acount />
          <Footer/>
      </h1>
    
  )
}

