import html from '../assets/images/skills/html.svg'
import css from '../assets/images/skills/css.svg'
import javascript from '../assets/images/skills/javascript.svg'
import jQuery from '../assets/images/skills/jQuery.svg'
import react from '../assets/images/skills/react.svg'
import reactBootstrap from '../assets/images/skills/react-bootstrap.svg'
import redux from '../assets/images/skills/redux.svg'
import nextjs from '../assets/images/skills/nextjs.svg'
import tailwindCss from '../assets/images/skills/tailwind-css.svg'
import vitejs from '../assets/images/skills/vitejs.svg'
import wordpress from '../assets/images/skills/wordpress.svg'
import bootstrap from '../assets/images/skills/bootstrap.svg'
import canva from '../assets/images/skills/canva.svg'
import photoshop from '../assets/images/skills/photoshop.svg'
import figma from '../assets/images/skills/figma.svg'
import git from '../assets/images/skills/git.svg'
import npm from '../assets/images/skills/npm.svg'
import sass from '../assets/images/skills/sass.svg'
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { name: 'HTML', img: html },
        { name: 'CSS3', img: css },
        { name: 'JavaScript', img: javascript },
        { name: 'jQuery', img: jQuery },
        { name: 'React', img: react },
        { name: 'React Bootstrap', img: reactBootstrap },
        { name: 'Redux', img: redux },
        { name: 'Next Js', img: nextjs },
        { name: 'Tailwind CSS', img: tailwindCss },
        { name: 'Vite Js', img: vitejs },
        { name: 'Wordpress', img: wordpress },
        { name: 'Bootstrap', img: bootstrap },
        { name: 'Canva', img: canva },
        { name: 'Photoshop', img: photoshop },
        { name: 'Figma', img: figma },
        { name: 'Git', img: git },
        { name: 'NPM', img: npm },
        { name: 'Sass', img: sass }

    ]

    return (
        <motion.div className="py-[50px]">
            <div className="container mx-auto">
                <h2 className="bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)] bg-clip-text text-transparent uppercase text-md text-center mb-3">Skills That Define Me</h2>
                <h3 className="uppercase text-2xl font-bold text-white mb-[50px] text-center">
                    Crafting Digital Experiences with Modern Technologies
                </h3>
                <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 xl:px-0 px-3">

                    {skills.map((skill, index) => {
                        return (
                            <motion.div initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 50 }}
                                key={index} className="tmponhover group bg-[#06131b] rounded-3xl p-10 text-white h-full flex flex-col justify-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:border before:border-transparent">
                                <div className="light-left left-0 top-0 size-50 bg-[#139bfd] rounded-full absolute -translate-x-[50%] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <div className='flex flex-col gap-3 items-center justify-center'>
                                    <img className='size-14' src={skill.img} width={'124'} height="124" />
                                    <p className="text-lg text-white text-center">{skill.name}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default Skills;