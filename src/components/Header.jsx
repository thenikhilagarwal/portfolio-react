import { useState } from "react";
import logo from "../assets/white-logo.webp"
import FontAwesome from "./FontAwesome"

export default function Header(){

    const menuDeta = [
        {
            id: 1,
            title: "Home",
            link: '/'
        },
        {
            id: 2,
            title: "About",
            link: '/'
        },
        {
            id: 3,
            title: "Services",
            link: '/'
        },
        {
            id: 4,
            title: "Portfolio",
            link: '/'
        },
        {
            id: 5,
            title: "Blog",
            link: '/'
        }
    ]

   const [activeScroll, setActiveScroll] = useState(false);
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            setActiveScroll(true);
        } else{
            setActiveScroll(false);
        }
    })

    return(
        <div className={`py-2 sticky top-0 w-full z-50 ${`${activeScroll ? 'bg-[#06131b]' : 'bg-transparent'}`} transition duration-300`}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <a href=""><img src={logo}/></a>
                    </div>
                    <div className="">
                        <ul className="flex items-center gap-2">
                            {menuDeta.map((menu) => (
                                <li key={menu.id}>
                                    <a className="block relative font-bold text-white transition duration-300 hover:text-[#139bfd] px-3 py-2 before:content-[''] before:absolute before:w-full before:h-full before:inset-0 before:rounded-sm before:bg-[#139bfd] before:opacity-0 before:scale-70 before:transition before:duration-300 hover:before:opacity-10 hover:before:scale-100" href={menu.link}>
                                        {menu.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex gap-3">
                        <a className="relative w-[40px] h-[40px] flex items-center justify-center rounded-full text-white bg-[rgba(255,255,255,0.063)] overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-[linear-gradient(315deg,#13fdfd_0%,#139bfd_100%)] before:opacity-0 before:scale-0 before:transition before:duration-300 hover:before:opacity-100 hover:before:scale-100" href="https://www.linkedin.com/in/nikhilagarwal702">
                            <FontAwesome style="brands" name="linkedin-in" className="relative"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}