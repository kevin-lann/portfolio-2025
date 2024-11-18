import { FaGithub, FaLinkedin } from "react-icons/fa"
import { GrDocumentText } from "react-icons/gr"
import { MdEmail } from "react-icons/md"

const Footer = () => {

  return (
    <>
      <div className="w-full flex flex-row gap-[24px] items-center justify-center pb-20">

        <div className="text-[#6e62b6]">
          Kevin Lan &#169; 2024
        </div>
        
        <div className="flex flex-row gap-[24px]">
          <a className="cursor-pointer" href='/resume/Kevin_Lan_Resume_2025.pdf' download target="_blank" rel="noopener noreferrer"> 
              <GrDocumentText size={20}/>
          </a>
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
    </>
  )
}

export default Footer