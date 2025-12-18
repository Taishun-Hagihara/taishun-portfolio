import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <div className='compose' class="size-full border-1 p-0 m-0 bg-white">
      <header class="border-2 w-full h-16 bg-white opacity-80 sticky top-0">
        <h1>header始まり</h1>
        <nav>
          <a href="#hero" class="inline-block">Hero</a>
          <a href="#project" class="inline-block">Project</a>
          <a href="#about" class="inline-block">About</a>
          <a href="#contact" class="inline-block">Contact</a>
        </nav>
      </header>
      <main class="mx-auto w-4/5 border-2">
      <h1>main始まり</h1>
        <section id="hero">
        <h1 className="text-3xl font-bold underline">Hello</h1>
        </section>
        <section id="project" class="w-3/4 h-300 border-2 mx-auto">
          <h2>過去作品</h2>
      
        </section>
        <section id="about">
          <h2>about</h2>
        </section>
        <section id="contact">
          <h2>contact</h2>
        </section>
      </main>
      <footer class="m-0 w-full border-2">
        <h1>footer始まり</h1>
      </footer>
    </div>
  )
}

export default App
