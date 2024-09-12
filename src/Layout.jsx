import React, { Children } from 'react'
import {Header, Footer} from './components'

const Layout = () => {
  return (
    <>
        <Header />
            {Children}
        <Footer />
    </>
  )
}

export default Layout