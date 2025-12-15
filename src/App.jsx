import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <header>
        <nav>
          <a href="#hero">Hero</a>
          <a href="#project">Project</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h2>header</h2>
        </section>
        <section id="project">
          <h2>project</h2>
        </section>
        <section id="about">
          <h2>about</h2>
        </section>
        <section id="contact">
          <h2>contact</h2>
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
