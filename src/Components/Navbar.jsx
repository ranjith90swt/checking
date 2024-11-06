import React, { useRef, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import '../App.css';
function Navbar() {

   

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


  return (
    <div>

    <header>
			<div className='logo'>
        <img src={require("../Assets/logo-dark-1.png")} alt="" />
      </div>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>

      <div>
        <button className='book-btn'> Book Now</button>
      </div>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
        

    </div>
  )
}

export default Navbar