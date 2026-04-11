import { motion } from "framer-motion";

const Footer = () => {
    return (
        <div className="bg-[#06131b] py-5 overflow-hidden relative">
            <span className="absolute top-0 left-0 w-full h-px bg-[linear-gradient(90deg,#00000000_0%,#ffffff00_0%,#488bff5b_50%,rgba(0,0,0,0)_100%)] overflow-hidden before:absolute before:w-[7%] before:h-full before:bg-[linear-gradient(90deg,#00000000_0%,#ffffff00_0%,#139bfd_50%,rgba(0,0,0,0)_100%)] before:backdrop-blur-xl before:animate-separateline2"></span>
            <div className="container mx-auto">
                <p className="text-[#BEBEBE] text-center">
                    Design & Developed by <span className="bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)] bg-clip-text text-transparent">Nikhil Agarwal</span>
                </p>
            </div>
        </div>
    )
}

export default Footer;