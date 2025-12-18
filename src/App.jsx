import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <div className="size-full border-1 p-0 m-0 bg-white">
      <header className="w-full h-16 bg-[#0B1F3A] sticky top-0 text-white border-[#0B1F3A]" >
        <nav className='text-right'>
          <a href="#hero" className="inline-block m-4">Hero</a>
          <a href="#project" className="inline-block m-4">Project</a>
          <a href="#about" className="inline-block m-4">About</a>
          <a href="#contact" className="inline-block m-4">Contact</a>
        </nav>
      </header>
      <main className="mx-auto w-4/5 border-2">
      <h1>main始まり</h1>
        <section id="hero">
        <h1 className="text-3xl font-bold underline">Hello</h1>
        </section>
        <section id="project" className="w-3/4 h-300 border-2 mx-auto">
          <h2>過去作品</h2>
      
        </section>
        <section id="about">
          <h2>about</h2>
        </section>
        <section id="contact" className="h-150 border-2 mx-auto text-[#0F172A]">
          <h2 className='text-[45px]'>contact</h2>

        </section>
      </main>
      <footer className="m-0 w-full border-2">
        <h1>footer始まり</h1>
      </footer>
    </div>
  )
}

export default App
