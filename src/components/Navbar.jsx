import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://v2cdn.boutiqaat.com/media/brandmanagement/web_banner_image/a/s/asics-web.png"
            alt="Asics"
            width="250"
            height="60"
          />
        </div>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sportstyle</li>
          <li>Collection</li>
          <li>Clothing</li>
          <li>Sale</li>
          <li>Running Club</li>
          <li>Bulk Entry</li>
        </ul>
        <div>
          <i className="fa fa-heart-o" style={{ fontSize: '36px' }}></i>
        </div>
        <div className="search">
        <input type="text" placeholder="Search ASISC" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar