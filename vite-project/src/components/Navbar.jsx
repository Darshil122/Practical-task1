import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex'>
        <h1>Product</h1>
    <nav className='ms-5'>
      <Link>Home</Link>
      <Link>Product</Link>
      <Link>Cart</Link>
    </nav>
    </div>
  )
}

export default Navbar
