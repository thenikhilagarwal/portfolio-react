import light from '../assets/images/banner-shape-light.svg';
import { motion } from "framer-motion";

const ContactForm = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
            className="bg-[#06131b] md:py-[100px] py-[50px] overflow-hidden relative"
        >
            <span className="absolute top-0 left-0 w-full h-px bg-[linear-gradient(90deg,#00000000_0%,#ffffff00_0%,#488bff5b_50%,rgba(0,0,0,0)_100%)] overflow-hidden before:absolute before:w-[7%] before:h-full before:bg-[linear-gradient(90deg,#00000000_0%,#ffffff00_0%,#139bfd_50%,rgba(0,0,0,0)_100%)] before:backdrop-blur-xl before:animate-separateline"></span>
            <div className="container mx-auto relative z-10">
                <div className="flex flex-wrap items-center justify-between md:px-0 px-3">
                    <div className="md:w-1/3 w-full md:mb-0 mb-5">
                        <h2 className="bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)] bg-clip-text text-transparent uppercase text-md mb-3">GET IN TOUCH</h2>
                        <h3 className="uppercase text-2xl font-bold text-white mb-8">Elevate your brand with Me</h3>
                        <p className="text-[#BEBEBE]">Have a project in mind, a question, or just want to say hello? Feel free to reach out!I’m always open to discussing.</p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <form className="flex flex-wrap">
                            <div className="w-1/2 pe-3 mb-4">
                                <input type="text" placeholder="Your Name" className="bg-[#06131b] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#139bfd] w-full" />
                            </div>
                            <div className="w-1/2 pe-3 mb-4">
                                <input type="text" placeholder="Phone Number" className="bg-[#06131b] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#139bfd] w-full" />
                            </div>
                            <div className="w-full mb-4">
                                <input type="email" placeholder="Your Email" className="bg-[#06131b] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#139bfd] w-full" />
                            </div>
                            <div className="w-full mb-4">
                                <textarea placeholder="Your Message" className="bg-[#06131b] border border-gray-700 rounded-lg p-3 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#139bfd] w-full"></textarea>
                            </div>
                            <div className="w-full">
                                <button type="submit" className="bg-[#139bfd] text-white font-bold py-4 px-6 rounded-full w-full cursor-pointer relative hover:-translate-y-[2px] transition duration-300">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='absolute right-0 top-0 -scale-x-[1]'>
                <img src={light} className="w-full" />
            </div>
            <div className="slider-bg-dot-shape absolute -top-[28px] right-[10%] pointer-events-none">
                <div className="h-[600px] w-[300px] overflow-hidden wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order ">
                    <div className="blocksync-stars w-px h-px bg-transparent animate-animStar after:content-[''] after:absolute after:w-px after:h-px after:top-[2000px] after:bg-transparent "></div>
                    <div className="blocksync-stars2 w-[2px] h-[2px] bg-transparent animate-animStar2 after:content-[''] after:absolute after:w-[2px] after:h-[2px] after:top-[2000px] after:bg-transparent"></div>
                    <div className="blocksync-stars3 w-[3px] h-[3px] bg-transparent animate-animStar3 after:content-[''] after:absolute after:w-[3px] after:h-[3px] after:top-[2000px] after:bg-transparent"></div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactForm;