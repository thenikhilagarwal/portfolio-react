import socialwalls from '../assets/images/portfolio/socialwalls-thumbnail.png';
import socialwallsFull from '../assets/images/portfolio/socialwalls.png';
import taggbox from '../assets/images/portfolio/taggbox-thumbnail.png';
import taggboxFull from '../assets/images/portfolio/taggbox.png';
import tagembed from '../assets/images/portfolio/tagembed-thumbnail.png';
import tagembedFull from '../assets/images/portfolio/tagembed.png';
import badassbacklinks from '../assets/images/portfolio/badassbacklinks-thumbnail.png';
import badassbacklinksFull from '../assets/images/portfolio/badassbacklinks.png';
import FontAwesome from '../components/FontAwesome'
import { motion } from "framer-motion";
import ImageCarousel from '../components/ImageCarousel';

const Portfolio = () => {

    const portfolio = [
        {
            title: 'Socialwalls',
            href: 'https://socialwalls.com/',
            images: [socialwalls, socialwallsFull],
            description: [
                "Developed responsive, pixel-perfect user interfaces from Figma designs.",
                "Built reusable and modular frontend components for better scalability.",
                "Implemented dynamic social media feed layouts with responsive grid and carousel views.",
                "Created interactive landing pages focused on user engagement and lead generation.",
                "Optimized website performance using lazy loading, code splitting, and image optimization.",
                "Ensured cross-browser compatibility and mobile-first responsive design.",
                "Improved accessibility by following semantic HTML and modern CSS practices."
            ],
            tags: [
                'HTML5',
                'CSS3',
                'Tailwind CSS',
                'JavaScript',
                'Jquery',
                'Wordpress'
            ],
        },
        {
            title: 'Taggbox',
            href: 'https://taggbox.com/',
            images: [taggbox, taggboxFull],
            description: [
                "Developed responsive, pixel-perfect user interfaces from Figma designs.",
                "Built reusable and modular frontend components for better scalability.",
                "Implemented dynamic social media feed layouts with responsive grid and carousel views.",
                "Created interactive landing pages focused on user engagement and lead generation.",
                "Optimized website performance using lazy loading, code splitting, and image optimization.",
                "Ensured cross-browser compatibility and mobile-first responsive design.",
                "Improved accessibility by following semantic HTML and modern CSS practices."
            ],
            tags: [
                'HTML5',
                'CSS3',
                'Tailwind CSS',
                'JavaScript',
                'Jquery',
                'Wordpress'
            ],
        },
        {
            title: 'Tagembed',
            href: 'https://tagembed.com/',
            images: [tagembed, tagembedFull],
            description: [
                "Developed responsive, pixel-perfect user interfaces from Figma designs.",
                "Built reusable and modular frontend components for better scalability.",
                "Implemented dynamic social media feed layouts with responsive grid and carousel views.",
                "Created interactive landing pages focused on user engagement and lead generation.",
                "Optimized website performance using lazy loading, code splitting, and image optimization.",
                "Ensured cross-browser compatibility and mobile-first responsive design.",
                "Improved accessibility by following semantic HTML and modern CSS practices."
            ],
            tags: [
                'HTML5',
                'CSS3',
                'Tailwind CSS',
                'JavaScript',
                'Jquery',
                'Wordpress'
            ],
        },
        {
            title: 'Badass Backlinks',
            href: 'https://badassbacklinks.com/',
            images: [badassbacklinks, badassbacklinksFull],
            description: [
                "Developed responsive, pixel-perfect user interfaces from Figma designs.",
                "Built reusable and modular frontend components for better scalability.",
                "Implemented dynamic social media feed layouts with responsive grid and carousel views.",
                "Created interactive landing pages focused on user engagement and lead generation.",
                "Optimized website performance using lazy loading, code splitting, and image optimization.",
                "Ensured cross-browser compatibility and mobile-first responsive design.",
                "Improved accessibility by following semantic HTML and modern CSS practices."
            ],
            tags: [
                'HTML5',
                'CSS3',
                'Tailwind CSS',
                'JavaScript',
                'Jquery',
                'Wordpress'
            ],
        }
    ]

    return (
        <motion.div className="pt-[50px] pb-[100px] md:px-0 px-3">
            <div className="container mx-auto">
                <h2 className="bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)] bg-clip-text text-transparent uppercase text-md text-center mb-3">Latest Portfolio</h2>
                <h3 className="uppercase text-2xl font-bold text-white mb-[50px] text-center">
                    Showcasing My Recent Work & Projects
                </h3>
                <div className="flex flex-wrap items-start gap-8 ">
                    {portfolio.map((port, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 50 }} key={index} className="lg:w-[48%] w-full flex flex-col gap-5 tmponhover group bg-[#06131b] border-2 border-[#0c1f2e] rounded-3xl lg:p-5 p-3 text-white relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:border before:border-transparent mb-5">
                                <div className="light-left left-0 top-0 size-50 bg-[#139bfd] rounded-full absolute -translate-x-[50%] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <ImageCarousel images={port.images} />
                                <div className='flex flex-col gap-5'>

                                    <div className='flex items-center justify-between gap-3'>

                                        <h4 className='md:text-2xl text-lg font-bold text-white'>
                                            {port.title}
                                        </h4>
                                        
                                        <a className='group cursor-pointer border-2 px-4 py-3 border-[#0c1f2e] flex items-center justify-center rounded-lg text-white hover:bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)]' href={port.href}>
                                            <span className='me-2'>Visit website</span>
                                            <FontAwesome style="solid" name="arrow-right" className="transform -rotate-45 group-hover:rotate-0 duration-300" />
                                        </a>
                                    </div>
                                    
                                    {port.description ? 
                                    <ul className='flex flex-col gap-3 text-sm ps-5 text-[#BEBEBE]'>
                                        {port.description?.map((item, index) => {
                                            return (
                                                <li key={index} className='relative'><FontAwesome style="regular" name="circle-check" className="bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)] bg-clip-text text-transparent absolute left-[-22px] top-[3px]" />{item}</li>
                                            )
                                        })}
                                    </ul>
                                    : null }

                                    {port.tags ? 
                                     <p className='flex gap-2 text-[#BEBEBE] flex-wrap'>
                                        {port.tags?.map((tag, index) => {
                                            return (
                                                <span key={index} className='bg-[#0c1f2e] border border-[#0c1f2e] rounded-md px-4 py-1 bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)] bg-clip-text text-transparent'>{tag}</span>
                                            )
                                        })}
                                    </p>
                                    : null}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default Portfolio;
