import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaGithub } from "react-icons/fa";
import './App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';


function App() {
  
  return (
    <div className="size-full border p-0 m-0 bg-white">
      <header className="w-full h-16 bg-[#0B1F3A] sticky top-0 text-white border-[#0B1F3A]" >
        <nav className='text-right'>
          <a href="#hero" className="inline-block m-4">Hero</a>
          <a href="#project" className="inline-block m-4">Project</a>
          <a href="#about" className="inline-block m-4">About</a>
          <a href="#contact" className="inline-block m-4">Contact</a>
        </nav>
      </header>
      <main className="mx-auto w-4/5 border-2 text-slate-700">
      <h1>main始まり</h1>
        <section id="about">
          <h2 className='text-3xl border-2 w-3/4 mx-auto h-300'>about me!</h2>
        </section>
        <section id="project" className="w-3/4 pb-10 border-2 mx-auto">
          <h2 className="text-3xl mb-10">過去作品</h2>
          <Card className='w-full' >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="circle-web"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Talkmates
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  サークルwebサイトで、イベント参加登録や幹部のみがログインし使えるデータを保存している。
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="bg-[#0B1F3A]" className="w-full mx-auto">
                チェック
              </Button>
            </CardActions>
          </Card>
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
