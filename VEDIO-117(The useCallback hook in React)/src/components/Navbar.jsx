import React from 'react'
import {memo} from 'react'

const Navbar = ({adjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      I am a {adjective} Navbar
    </div>
  )
}

export default memo{Navbar}
