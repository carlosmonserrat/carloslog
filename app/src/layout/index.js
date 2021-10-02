import React from 'react'
import {container} from './style.module.css'

const Layout = ({children}) => {
  return (
    <div className={container}>
      {children}
    </div>
  )
}

export default Layout