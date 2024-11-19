import { FaDocker, FaGit, FaGitAlt, FaGithub, FaGlobe, FaJava, FaLinkedin, FaNodeJs, FaReact } from 'react-icons/fa'
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
import VerticalTimeline01 from './components/timeline/VerticalTimeline1.tsx'
import { EDUCATION_TIMELINE_ITEMS, WORK_TIMELINE_ITEMS } from './constants/content.ts'
import shape1 from '/imgs/shape1.svg'
import ecom from '/imgs/ecom.png'
import playlistTransfer from '/imgs/playlistTransfer.png'
import portfolio from '/imgs/portfolio.png'
import Footer from './components/footer/footer.tsx'
import BackToTopButton from './components/back-to-top/BackToTopButton.tsx'
import { cubicBezier, easeIn, easeInOut, motion } from "framer-motion";
import BackgroundGrid from './components/grid/grid.tsx'

const TABS = ['Work', 'Education']

function App() {

  const [tab, setTab] = useState<string>(TABS[0])
  
  return (
    <>
      <nav id="navbar" className="absolute left-1/2 -translate-x-1/2 z-1000">
          <NavigationBar/>
      </nav>
      <main className=" min-h-screen w-screen flex flex-col justify-center overflow-hidden 
      bg-[radial-gradient(ellipse_80%_40%_at_50%_-15%,rgba(170,144,255,0.16),rgba(255,255,255,0))]  font-geist">

          <div className="absolute top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-30 pointer-events-none" aria-hidden="true">
            <img src={shape1} className="max-w-none" width={852} height={582} alt="Illustration" />
          </div>
  
          <div className="absolute top-0 right-0 rotate-90 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-40 pointer-events-none" aria-hidden="true">
            <img src={shape1} className="max-w-none" width={852} height={582} alt="Illustration" />
          </div>
          
          <Particles className="absolute inset-0 pointer-events-none" quantity={45} ease={100} />
          <section className="h-screen flex items-center justify-center px-12">

            <motion.div 
              id="top" 
              className="max-w-2xl w-full"
              initial={{opacity: 0, y:50}}
              animate={{opacity: 1, y:0}}
              transition={{ duration: 0.3, delay: 0, ease: cubicBezier(.35,.17,.3,.16)}}>
                <div className="flex flex-col align-center justify-center items-center">
                    <div className="flex flex-row gap-[60px]">
                      {/* image pfp */}
                      <motion.button
                        className="bg-transparent border-none focus:outline-none cursor-grab"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        whileDrag={{ scale: 0.9, rotate: 10 }}
                        drag
                      >
                        <img 
                          src={profileImg} alt="profile-img"
                          className="select-none pointer-events-none bg-slate-800 w-[120px] h-[120px] rounded-full shadow-[0_10px_50px_-20px_rgba(255,255,255,0.3)] p-2 aspect-square object-cover">
                          
                        </img>
                      </motion.button>
                      <div className="flex flex-col text-left mt-8">
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
                          <button className="relative items-center overflow-hidden border-white/10
                          transition-border ease-in-out duration-300 border border-transparent hover:border hover:border-white/30
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
              </motion.div>
          </section>

          <BackToTopButton />

          <section id="tech" className="px-12 py-16">
              <motion.div 
                className="max-w-4xl mx-auto"
                initial={{opacity: 0, y:50}}
                animate={{opacity: 1, y:0}}
                transition={{ duration: 0.3, delay: 0, ease: cubicBezier(.35,.17,.3,.16)}}
              >
                <h1 className="font-extrabold text-3xl md:text-5xl tracking-wide bg-clip-text text-transparent 
                        bg-gradient-to-l from-slate-200/80  via-slate-200 to-slate-200/70 pb-4 mb-6">
                  Technologies I use:
                </h1>
                <p className="text-md font-light text-slate-300 mb-10">
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
              </motion.div>
              
          </section>


          <section id="experience" className="px-12 my-56 relative">
            <div className="absolute top-0 left-0 rotate-120 -translate-x-3/4 -scale-x-100 blur-3xl opacity-20 pointer-events-none" aria-hidden="true">
              <img src={shape1} className="max-w-none" width={852} height={582} alt="Illustration" />
            </div>
    
            <div className="absolute top-0 right-0 rotate-90 -translate-y-1/2 translate-x-2/3 blur-[128px] brightness-150 hue-rotate-[-15deg] saturation-200 opacity-20 pointer-events-none" aria-hidden="true">
              <img src={shape1} className="max-w-none" width={852} height={582} alt="Illustration" />
            </div>
            <motion.div 
                className="max-w-4xl mx-auto"
                initial={{opacity: 0, y:50}}
                animate={{opacity: 1, y:0}}
                transition={{ duration: 0.3, delay: 0, ease: cubicBezier(.35,.17,.3,.16)}}
              >
                <h1 className="font-extrabold text-3xl md:text-5xl tracking-wide bg-clip-text text-transparent 
                        bg-gradient-to-l from-slate-200/80  via-slate-200 to-slate-200/70 pb-4 mb-6">
                  My Experience
                </h1>
                <Tabs setTab={setTab} curTab={tab} tabs={TABS}/>
                <div className="w-full p-7 mt-4 border border-white/15 rounded-[16px]">
                  {tab === TABS[0] ? (
                    <motion.div
                      key={TABS[0]}
                      initial={{opacity: 0.5}}
                      animate={{opacity: 1}}
                      transition={{duration: 0.3, delay: 0, ease: easeInOut}}
                    >
                      <VerticalTimeline01 items={WORK_TIMELINE_ITEMS}/>
                      <p className="w-full text-center pt-8 text-md font-light text-slate-300 mb-2">
                        Download <a className="underline cursor-pointer" href='/resume/Kevin_Lan_Resume_2025.pdf' download target="_blank" rel="noopener noreferrer">my full resume</a> to learn more.
                      </p>
                    </motion.div>
                  ) : tab === TABS[1] ? (
                    <motion.div
                      key={TABS[1]}
                      initial={{opacity: 0.5}}
                      animate={{opacity: 1}}
                      transition={{duration: 0.3, delay: 0, ease: easeInOut}}
                    >
                      <VerticalTimeline01 items={EDUCATION_TIMELINE_ITEMS}/>
                      <p className="w-full text-center pt-8 text-md font-light text-slate-300 mb-2">
                        Download <a className="underline cursor-pointer" href='/resume/Kevin_Lan_Resume_2025.pdf' download target="_blank" rel="noopener noreferrer">my full resume</a> to learn more.
                      </p>
                    </motion.div>
                  ) : <></>}
                </div>
                
            </motion.div>
          </section>

          <section id="projects" className="px-12 mb-60">
              <motion.div 
                className="max-w-4xl mx-auto"
                initial={{opacity: 0, y:50}}
                animate={{opacity: 1, y:0}}
                transition={{ duration: 0.3, delay: 0, ease: cubicBezier(.35,.17,.3,.16)}}
              >
                <h1 className="font-extrabold text-3xl md:text-5xl tracking-wide bg-clip-text text-transparent 
                        bg-gradient-to-l from-slate-200/80  via-slate-200 to-slate-200/70 pb-4 mb-6">
                  Featured Projects
                  {/* Paypal Ecom store, playlist transfer, Vnembassy, this portfolio*/}
                </h1>
                <p className="text-md font-light text-slate-300 mb-10">
                  Here are some of my favourite projects, designed & developed with a variety of tools, frameworks, and languages.
                </p>
                <div className="w-full flex flex-row flex-wrap gap-[60px] justify-center">
                  <div className="bg-[#121212] w-[98%] rounded-[16px] p-8">
                    <p className="font-bold text-xl">Paypal-Integrated E-commerce Store</p>
                    <img src={ecom} className="rounded-[8px] my-8"/>
                    <div className="flex flex-row gap-[8px] my-4 text-sm">
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">React</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">TailwindCSS</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">Redux</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">NodeJS</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">ExpressJS</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">MongoDB</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">Paypal API</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">Vite</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">Postman</div>
                    </div>
                    <p className="font-light text-gray-400">Full scale e-commerce application complete with JWT auth, product search, admin dashboards, and Paypal intgration using Paypal's Developer API.</p>
                    <button className="relative items-center overflow-hidden border-white/10 mt-8
                          transition-border ease-in-out duration-200 border border-transparent hover:border hover:border-white/30 
                          transition hover:bg-[#303030]">
                            <a href="https://github.com/kevin-lann/EcommStore"  target="_blank" rel="noopener noreferrer">
                              <div className="flex flex-row align-center gap-4 items-center relative z-10 text-white">
                                <FaGithub size={20}/> <div className="">Source code</div>
                              </div>
                            </a>
                    </button>
                  </div>
                  <div className="bg-[#121212] w-[98%] rounded-[16px] p-8">
                    <p className="font-bold text-xl">Playlist Transfer</p>
                    <img src={playlistTransfer} className="rounded-[8px] my-8"/>
                    <div className="flex flex-row gap-[8px] my-4 text-sm">
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">Python</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">SpotiPy (Spotify API)</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">YT music API</div>
                    </div>
                    <p className="font-light text-gray-400">Two way Spotify/Youtube music playlist converter tool, built with third party APIs.</p>
                    <button className="relative items-center overflow-hidden border-white/10 mt-8
                          transition-border ease-in-out duration-200 border border-transparent hover:border hover:border-white/30 
                          transition hover:bg-[#303030]">
                            <a href="https://github.com/kevin-lann/PlaylistTransfer"  target="_blank" rel="noopener noreferrer">
                              <div className="flex flex-row align-center gap-4 items-center relative z-10 text-white">
                                <FaGithub size={20}/> <div className="">Source code</div>
                              </div>
                            </a>
                    </button>
                  </div>
                  <div className="bg-[#121212] w-[98%] rounded-[16px] p-8">
                    <p className="font-bold text-xl">Portfolio 2025</p>
                    <img src={portfolio} className="rounded-[8px] my-8"/>
                    <div className="flex flex-row gap-[8px] my-4 text-sm">
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">React</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">TailwindCSS</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">Vite</div>
                      <div className="text-center bg-[#202020] rounded-[8px] py-1 px-3">Vercel</div>
                    </div>
                    <p className="font-light text-gray-400">Simple personal portoflio site with modern UI/UX. (And cool effects)</p>
                    <button className="relative items-center overflow-hidden border-white/10 mt-8 mr-4
                          transition-border ease-in-out duration-200 border border-transparent hover:border hover:border-white/30 
                          transition hover:bg-[#303030]">
                              <a href="https://github.com/kevin-lann/portfolio-2025"  target="_blank" rel="noopener noreferrer">
                                <div className="flex flex-row align-center gap-4 items-center relative z-10 text-white">
                                  <FaGithub size={20}/> <div className="">Source code</div>
                                </div>
                              </a>
                    </button>
                    <button className="relative items-center overflow-hidden border-white/10 mt-8
                          transition-border ease-in-out duration-200 border border-transparent hover:border hover:border-white/30 
                          transition hover:bg-[#303030]">
                              <a href="https://github.com/kevin-lann/portfolio-2025"  target="_blank" rel="noopener noreferrer">
                                <div className="flex flex-row align-center gap-4 items-center relative z-10 text-white">
                                  <FaGlobe size={20}/> <div className="">Visit site</div>
                                </div>
                              </a>
                    </button>
                  </div>
                </div>
                
            </motion.div>
          </section>

          <section id="awards" className="px-12 mb-60 relative">
            <div className="z-0 absolute top-0 left-0 rotate-[60deg] -translate-y-[0px] translate-x-[100px] blur-[128px] brightness-150 hue-rotate-[15deg] opacity-30 pointer-events-none" aria-hidden="true">
              <img src={shape1} className="max-w-none h-[300px]" width={852} height={582} alt="Illustration" />
            </div>
            <motion.div 
                  className="relative max-w-4xl mx-auto"
                  initial={{opacity: 0, y:50}}
                  animate={{opacity: 1, y:0}}
                  transition={{ duration: 0.3, delay: 0, ease: cubicBezier(.35,.17,.3,.16)}}
                >
                <h1 className="font-extrabold text-3xl md:text-5xl tracking-wide bg-clip-text text-transparent 
                        bg-gradient-to-l from-slate-200/80  via-slate-200 to-slate-200/70 pb-4 mb-6">
                  Achievements & Awards
                </h1>
                <div className="w-full flex flex-row flex-wrap gap-[40px] justify-center">
                <div className="flex flex-col bg-[#121212] w-[98%] rounded-[16px] p-8">

                      <div className="flex flex row gap-[8px]">
                        <img 
                          src='/imgs/microsoft.png'
                          className="object-contain mr-4 bg-slate-800 w-[60px] h-[60px] rounded-full p-0.5 aspect-square object-cover">
                        </img>
                        <div className="">
                          <div className="w-full flex justify-between">
                            <p className="font-bold text-xl">Microsoft OPS Phenomenal Hackathon</p>
                            <time className="items-center px-2 py-1 font-bold text-sm text-[#6e62b6] bg-[#101010] rounded-full">Jan 2024</time>
                          </div>
                          <p className="text-md font-bold text-slate-900 dark:text-white py-2">2nd place category award</p>
                          <p className="font-light text-gray-400">Developed a generative AI chatbot on Microsoft Copilot Studio that produced answers to questions about internal learning and development.</p>
                            </div>
                      </div>

                    </div>
                    <div className="flex flex-col bg-[#121212] w-[98%] rounded-[16px] p-8">

                      <div className="flex flex row gap-[8px]">
                        <img 
                          src='/imgs/ontario_logo.png'
                          className="mr-4 bg-slate-800 w-[60px] h-[60px] rounded-full p-0.5 aspect-square object-cover">
                        </img>
                        <div className="">
                          <div className="w-full flex justify-between">
                            <p className="font-bold text-xl">OPS LTC Student Hackathon</p>
                            <time className="items-center px-2 py-1 font-bold text-sm text-[#6e62b6] bg-[#101010] rounded-full">Mar 2024</time>
                          </div>
                          <p className="text-md font-bold text-slate-900 dark:text-white py-2">2nd place overall</p>
                          <p className="font-light text-gray-400">Designed a peer-to-peer smart parking space sharing app using full product design process, to improve parking situations near schools.</p>
                        </div>
                      </div>

                    </div>
                </div>
            </motion.div>
          </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
