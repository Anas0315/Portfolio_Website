import React from 'react'
import Main from './components/Main/Main'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <div className='max-w[1366] m-auto'>
    <Main/>
    <Skills/>
    <About/>
    <Work/> 
    <Footer/>
    </div>
    </>
  )
}

export default App