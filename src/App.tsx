import { FaDocker, FaGit, FaGitAlt, FaGithub, FaJava, FaLinkedin, FaNodeJs, FaReact } from 'react-icons/fa'
import './App.css'
import Particles from './components/particles/Particles.tsx'
import { GrDocumentText } from 'react-icons/gr'
import NavigationBar from './components/navbar/NavigationBar.tsx'
import profileImg from '/imgs/face.jpg'
import { MdEmail } from 'react-icons/md'
import { SiSpringboot, SiTypescript } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { DiMongodb } from 'react-icons/di'
import { BiLogoPostgresql } from 'react-icons/bi'
import { useState } from 'react'
import Tabs from './components/tabs/Tabs.tsx'

const TABS = ['Work', 'Education']

function App() {

  const [tab, setTab] = useState<string>('')
  
  return (
    <>
      <nav id="navbar" className="absolute left-1/2 -translate-x-1/2 z-1000">
          <NavigationBar/>
      </nav>
      <main className=" min-h-screen w-screen flex flex-col justify-center overflow-hidden 
      bg-[radial-gradient(ellipse_80%_70%_at_50%_-25%,rgba(170,144,255,0.16),rgba(255,255,255,0))] 
      dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(119,224,198, 0.2),rgba(255,255,255,0))]">
          
          <Particles className="absolute inset-0 pointer-events-none" quantity={45} ease={100} />
          <section className="h-screen flex items-center justify-center px-12">

            <div id="top" className="max-w-2xl w-full">
                <div className="flex flex-col align-center justify-center items-center">
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
                    
                    <div className="w-full flex flex-row gap-[24px] items-center justify-center pt-8">

                        <a className="cursor-pointer" href='/resume/Kevin_Lan_Resume_2025.pdf' download target="_blank" rel="noopener noreferrer"> 
                          <button className="relative items-center overflow-hidden 
                          transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/15
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                          transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)]">
                            <div className="flex flex-row align-center gap-4 items-center relative z-10">
                              <GrDocumentText size={20}/> <div className="">Download CV</div>
                            </div>
                            <div className="absolute inset-0 w-1/6 z-5 block transform -skew-x-12 
                                bg-gradient-to-r from-transparent via-white to-transparent 
                                opacity-10 animate-shimmer" />
                          </button>
                        </a>
                        <div className="flex flex-row gap-[24px]">
                        <a className="cursor-pointer" href='mailto:k.lan@mail.utoronto.ca'>
                            <MdEmail size={22}/>
                        </a>
                        <a className="cursor-pointer" href='https://github.com/kevin-lann'  target="_blank" rel="noopener noreferrer">
                          <FaGithub size={22}/>
                        </a>
                        <a className="cursor-pointer pr-4" href='https://www.linkedin.com/in/kevin-lan-/'  target="_blank" rel="noopener noreferrer">
                          <FaLinkedin size={22}/>
                        </a>
                        </div>
                       
                    </div>
                </div>
              </div>
          </section>

          <section id="tech" className="px-12 py-16">
              <div className="max-w-4xl mx-auto">
                <h1 className="font-extrabold text-3xl md:text-5xl tracking-wide bg-clip-text text-transparent 
                        bg-gradient-to-l from-slate-200/80  via-slate-200 to-slate-200/70 pb-4  ">
                  Technologies I use:
                </h1>
                <p className="text-md font-extralight text-slate-200 my-10">
                  I am experienced building using many modern tools and frameworks. The following is my preferred tech stack. It consists of a handpicked set of technologies in which I use to develop full stack applications with:
                </p>
                <div className="flex flex-row flex-wrap gap-[10px] justify-center">
                  <div className="flex flex-row gap-[10px] items-center align-center p-4 
                  transition ease-in-out duration-300 bg-[#121212] hover:bg-[#161616] 
                  transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/15 
                  transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  h-[80px] w-[24%] rounded-[16px]">
                    <div className="aspect-square p-3 bg-[rgb(97,218,251)] bg-opacity-15 rounded-[16px] flex items-center justify-center">
                      <FaReact size={32} className="text-[#61dafb]"/>
                    </div>
                    <div className="text-lg font-light font-mono pl-[10px]">
                      React
                    </div>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center align-center p-4 
                  transition ease-in-out duration-300 bg-[#121212] hover:bg-[#161616] 
                  transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/15 
                  transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  h-[80px] w-[24%] rounded-[16px]">
                    <div className="aspect-square p-3 bg-[rgb(130,250,200)] bg-opacity-15 rounded-[16px] flex items-center justify-center">
                      <FaNodeJs size={32} className="text-[#6ecf8e]"/>
                    </div>
                    <div className="text-lg font-light font-mono pl-[10px]">
                      NodeJS
                    </div>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center align-center p-4 
                  transition ease-in-out duration-300 bg-[#121212] hover:bg-[#161616] 
                  transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/15 
                  transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  h-[80px] w-[24%] rounded-[16px]">
                    <div className="aspect-square p-3 bg-[rgb(97,160,251)] bg-opacity-15 rounded-[16px] flex items-center justify-center">
                      <SiTypescript size={32} className="text-[#356Ac4]"/>
                    </div>
                    <div className="text-lg font-light font-mono pl-[10px]">
                      Typescript
                    </div>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center align-center p-4 
                  transition ease-in-out duration-300 bg-[#121212] hover:bg-[#161616] 
                  transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/15 
                  transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  h-[80px] w-[24%] rounded-[16px]">
                    <div className="aspect-square p-3 bg-[rgb(40,180,200)] bg-opacity-15 rounded-[16px] flex items-center justify-center">
                      <RiTailwindCssFill size={32} className="text-[#2099bb]"/>
                    </div>
                    <div className="text-lg font-light font-mono pl-[10px]">
                      Tailwind
                    </div>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center align-center p-4 
                  transition ease-in-out duration-300 bg-[#121212] hover:bg-[#161616] 
                  transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/15 
                  transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  h-[80px] w-[24%] rounded-[16px]">
                    <div className="aspect-square p-3 bg-[rgb(130,250,170)] bg-opacity-15 rounded-[16px] flex items-center justify-center">
                      <SiSpringboot size={32} className="text-[#6ec060]"/>
                    </div>
                    <div className="text-lg font-light font-mono pl-[10px]">
                      Spring boot
                    </div>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center align-center p-4 
                  transition ease-in-out duration-300 bg-[#121212] hover:bg-[#161616] 
                  transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/15 
                  transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  h-[80px] w-[24%] rounded-[16px]">
                    <div className="aspect-square p-3 bg-[rgb(97,218,201)] bg-opacity-15 rounded-[16px] flex items-center justify-center">
                      <DiMongodb size={32} className="text-[#6ecca0]"/>
                    </div>
                    <div className="text-lg font-light font-mono pl-[10px]">
                      MongoDB
                    </div>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center align-center p-4 
                  transition ease-in-out duration-300 bg-[#121212] hover:bg-[#161616] 
                  transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/15 
                  transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  h-[80px] w-[24%] rounded-[16px]">
                    <div className="aspect-square p-3 bg-[rgb(67,170,191)] bg-opacity-15 rounded-[16px] flex items-center justify-center">
                      <BiLogoPostgresql size={32} className="text-[#70aaaa]"/>
                    </div>
                    <div className="text-lg font-light font-mono pl-[10px]">
                      PostgreSQL
                    </div>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center align-center p-4 
                  transition ease-in-out duration-300 bg-[#121212] hover:bg-[#161616] 
                  transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/15 
                  transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  h-[80px] w-[24%] rounded-[16px]">
                    <div className="aspect-square p-3 bg-[rgb(180,100,100)] bg-opacity-15 rounded-[16px] flex items-center justify-center">
                      <FaJava size={32} className="text-[#d56050]"/>
                    </div>
                    <div className="text-lg font-light font-mono pl-[10px]">
                      Java
                    </div>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center align-center p-4 
                  transition ease-in-out duration-300 bg-[#121212] hover:bg-[#161616] 
                  transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/15 
                  transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  h-[80px] w-[24%] rounded-[16px]">
                    <div className="aspect-square p-3 bg-[rgb(200,100,100)] bg-opacity-15 rounded-[16px] flex items-center justify-center">
                      <FaGitAlt size={32} className="text-[#d05030]"/>
                    </div>
                    <div className="text-lg font-light font-mono pl-[10px]">
                      Git
                    </div>
                  </div>

                  <div className="flex flex-row gap-[10px] items-center align-center p-4 
                  transition ease-in-out duration-300 bg-[#121212] hover:bg-[#161616] 
                  transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/15 
                  transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  h-[80px] w-[24%] rounded-[16px]">
                    <div className="aspect-square p-3 bg-[rgb(97,218,251)] bg-opacity-15 rounded-[16px] flex items-center justify-center">
                      <FaDocker size={32} className="text-[#61dafb]"/>
                    </div>
                    <div className="text-lg font-light font-mono pl-[10px]">
                      Docker
                    </div>
                  </div>

                </div>
              </div>
              
          </section>


          <section id="experience" className="px-12 my-56">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-extrabold text-3xl md:text-5xl tracking-wide bg-clip-text text-transparent 
                        bg-gradient-to-l from-slate-200/80  via-slate-200 to-slate-200/70 pb-4  ">
                  My Experience
                </h1>
                <Tabs setTab={setTab} curTab={tab} tabs={TABS}/>

            </div>
          </section>


      </main>
    </>
  )
}

export default App
