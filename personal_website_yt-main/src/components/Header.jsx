import { useState } from "react";
import toogle_light from '../assets/night.png'
import toogle_dark from '../assets/day.png'
import './Header.css'

const Header = ({theme,setTheme}) => {

  const toggle_mode=()=>{
    theme='light' ? setTheme('dark') : setTheme('light');
  }

  const [brandName, setBrandName] = useState("Usha Ravasaheb Hipparkar");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/About",
      id: 2,
    },
    {
      title: "Resume",
      link: "/Skills",
      id: 3,
    },
    {
      title: "Skills",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Project",
      link: "/Contact",
      id: 4,
    },
    {
      title: "Contact",
      link: "/About",
      id: 4,
    },
  ]);

  // const [actionButton, setActionButton] = useState({
  //   title: "Download CV",
  //   link: "/hire-me",
  // });

  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
         
        <div className="space-x-6">
          {/* menu links */}

          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}

          {/* 
          <a href="/about" className="hover:text-orange-600">
            About
          </a>

          <a href="/skills" className="hover:text-orange-600">
            Skills
          </a>

          <a href="/Portfolio" className="hover:text-orange-600">
            Portfolio
          </a>

          <a href="/contact" className="hover:text-orange-600">
            Contact
          </a> */}
        </div>

        <div>
          {/* buttons */}
          {/* <a
            href={actionButton.link}
            className="px-4 py-2 bg-orange-500 shadow  rounded-full text-1xl "
          >
            {actionButton.title}
          </a> */}

          <img onClick={()=>{toggle_mode()}} src={theme=='light' ? toogle_light:toogle_dark} alt="icon " className='toggle-icon'/>
        </div>
      </div>
    </>
  );
};

export default Header;
