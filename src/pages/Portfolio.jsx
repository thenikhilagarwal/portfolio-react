import socialwalls from '../assets/images/portfolio/socialwalls.png';
import taggbox from '../assets/images/portfolio/taggbox.png';
import tagembed from '../assets/images/portfolio/tagembed.png';
import badassbacklinks from '../assets/images/portfolio/badassbacklinks.png';
import jsonformatterpro from '../assets/images/portfolio/jsonformatterpro.png';
import FontAwesome from '../components/FontAwesome'
import { motion } from "framer-motion";

const Portfolio = () => {

    const portfolio = [
        {
            title: 'Socialwalls',
            href: 'https://socialwalls.com/',
            url: socialwalls
        },
        {
            title: 'Taggbox',
            href: 'https://taggbox.com/',
            url: taggbox
        },
        {
            title: 'Tagembed',
            href: 'https://tagembed.com/',
            url: tagembed
        },
        {
            title: 'Badass Backlinks',
            href: 'https://badassbacklinks.com/',
            url: badassbacklinks
        },
        {
            title: 'Json Formatter Pro',
            href: 'https://jsonformatterpro.com/',
            url: jsonformatterpro
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
                                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 50 }} key={index} className="md:w-[48%] w-full">
                                <div className="tmponhover group flex bg-[#06131b] border-2 border-[#0c1f2e] rounded-3xl p-5 text-white h-full flex-col justify-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:border before:border-transparent mb-5">
                                    <div className="light-left left-0 bottom-0 size-50 bg-[#139bfd] rounded-full absolute -translate-x-[50%] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                    <div className='overflow-hidden h-[500px] rounded-3xl group'>
                                        <img className='rounded-3xl object-cover object-top transition-transform duration-[5000ms] ease-linear group-hover:-translate-y-[80%]' src={port.url} width={'100%'} height={'500'} alt='socialwalls' />
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h4 className='group-hover:bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)] group-hover:bg-clip-text group-hover:text-transparent text-2xl font-bold text-white'>
                                        {port.title}
                                    </h4>
                                    <a className='group cursor-pointer border-2 border-[#0c1f2e] size-12 flex items-center justify-center rounded-lg text-white hover:bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)]' href={port.href}>
                                        <FontAwesome style="solid" name="arrow-right" className="transform -rotate-45 group-hover:rotate-0 duration-300" />
                                    </a>
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