import React, { useRef } from 'react'
import '../Styles/MobileNav.css'

function MobileNav() {
  const menuRef = useRef(null)

  const handleToggleMenu = () => {
    menuRef.current.classList.toggle('open')
  }

  return (
    <>
      <div className='mobile-menu is-hidden-desktop' onClick={handleToggleMenu}>
        <i className='fas fa-bars fa-2x burger'></i>
      </div>
      <div ref={menuRef} className='sidenav'>
        <li onClick={handleToggleMenu}><i className="fas fa-times closebtn"></i></li>
      </div>
    </>
  )
}

export default MobileNav
