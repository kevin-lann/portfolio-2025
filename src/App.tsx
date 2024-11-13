import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './App.css'
import Particles from './components/particles/Particles.tsx'
import { GrDocumentText } from 'react-icons/gr'
import NavigationBar from './components/navbar/NavigationBar.tsx'
import profileImg from '/imgs/face.jpg'
import { MdEmail } from 'react-icons/md'

function App() {

  return (
    <>
      <nav id="navbar" className="absolute left-1/2 -translate-x-1/2 z-1000">
          <NavigationBar/>
      </nav>
      <main className=" min-h-screen w-screen flex flex-col justify-center overflow-hidden 
      bg-[radial-gradient(ellipse_80%_70%_at_50%_-25%,rgba(170,144,255,0.16),rgba(255,255,255,0))] 
      dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(119,224,198, 0.2),rgba(255,255,255,0))]">


          <div className="h-screen flex items-center justify-center px-12">

            <Particles className="absolute inset-0 pointer-events-none" quantity={45} ease={100} />

            <div id="top" className="max-w-2xl w-full">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-[60px]">
                      {/* image pfp */}
                      <img 
                        src={profileImg} alt="profile-img"
                        className="bg-slate-800 w-[120px] h-[120px] rounded-full shadow-[0_10px_50px_-20px_rgba(255,255,255,0.3)] p-2 aspect-square object-cover">
                        
                      </img>
                      <div className="flex flex-col text-left">
                        <h1 className=" font-extrabold text-5xl md:text-7xl bg-clip-text text-transparent 
                        bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                          Hi, I'm Kevin
                        </h1>
                        <div className="max-w-3xl mb-8 flex flex-row justify-between">
                          <p className="text-lg text-slate-300">
                            Full stack web developer
                          </p>
                          <p className="text-lg font-mono text-slate-500">
                            Toronto, ON
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full flex flex-row gap-[36px] items-center justify-end">
                        <a className="cursor-pointer" href='https://github.com/kevin-lann'  target="_blank" rel="noopener noreferrer">
                          <FaGithub size={20}/>
                        </a>
                        <a className="cursor-pointer" href='https://www.linkedin.com/in/kevin-lan-/'  target="_blank" rel="noopener noreferrer">
                          <FaLinkedin size={20}/>
                        </a>
                        <a className="cursor-pointer" href='/resume/Kevin_Lan_Resume_2025.pdf' download target="_blank" rel="noopener noreferrer"> 
                          <GrDocumentText size={20}/> 
                        </a>
                      
                        <a className="cursor-pointer" href='mailto:k.lan@mail.utoronto.ca'>
                          <MdEmail size={20}/> 
                        </a>
                    </div>
                </div>
              </div>
          </div>

          <div id="tech" className="min-h-screen px-12 py-16">
              <div className="max-w-6xl mx-auto">
                <h1 className="font-bold text-2xl md:text-3xl">
                  My Tech Stack:
                </h1>
              </div>
          </div>
      </main>
    </>
  )
}

export default App
