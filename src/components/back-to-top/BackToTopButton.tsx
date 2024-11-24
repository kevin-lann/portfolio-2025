import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"

const BackToTopButton = () => {

    const [isVisible, setIsVisible] = useState(false)

    // Toggle visibility based on scroll position
    useEffect(() => {
      const toggleVisibility = () => {
        // Show button when page is scrolled more than 300px
        if (window.scrollY > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
  return (
    <>
      {isVisible && 
          <a href="#navbar" className="fixed bottom-12 right-16 cursor-pointer">
            <button className="flex flex-row align-center gap-4 items-center overflow-hidden border-white/10 mt-8 rounded-full text-slate-100
                              transition-border ease-in-out duration-200 border border-transparent hover:border hover:border-white/30 
                              transition hover:bg-[#303030]">
                <div>Back to top</div>
                <FaArrowUp size={20}/>
            </button>
          </a>
      }
    </>
  )
}

export default BackToTopButton