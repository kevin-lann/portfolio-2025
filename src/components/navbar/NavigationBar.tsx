

const NavigationBar = () => {

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-row rounded-full align-center text-sm font-mono">
      <div className="relative group p-6 cursor-pointer mr-12 font-sans font-[600] text-[12pt] tracking-widest"> 
        KEVIN LAN
      </div>
      <div className="relative group p-6 cursor-pointer"> 
        <a href='#experience' className="text-inherit">Experience</a>
        <span className="absolute bottom-0 left-0 w-full h-0.5 
                  bg-gradient-to-r from-[rgba(170,144,255,0.16)] via-purple-300 to-[rgba(170,144,255,0.16)] 
                   origin-left transform scale-x-0 
                   transition-transform duration-150 
                   group-hover:scale-x-100" />
      </div>
      <div className="relative group p-6 cursor-pointer"> 
        <a href='#projects' className="text-inherit">Projects</a>
        <span className="absolute bottom-0 left-0 w-full h-0.5 
                  bg-gradient-to-r from-[rgba(170,144,255,0.16)] via-purple-300 to-[rgba(170,144,255,0.16)] 
                   origin-left transform scale-x-0 
                   transition-transform duration-150 
                   group-hover:scale-x-100" />
      </div>
      <div className="relative group p-6 cursor-pointer"> 
        <a href='#awards' className="text-inherit">Awards</a>
        <span className="absolute bottom-0 left-0 w-full h-0.5 
                  bg-gradient-to-r from-[rgba(170,144,255,0.16)] via-purple-300 to-[rgba(170,144,255,0.16)] 
                   origin-left transform scale-x-0 
                   transition-transform duration-150 
                   group-hover:scale-x-100" />
      </div>
    </div>
  )

}

export default NavigationBar;