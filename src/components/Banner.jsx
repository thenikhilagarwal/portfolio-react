import { useState, useEffect } from 'react';
import Button from './Button'
import light from '../assets/images/banner-shape-light.svg';
import resume from '../assets/resume.pdf';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, damping: 20 }
    }
};

export default function Banner() {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ['React Developer', 'Web Designer', 'Freelancer'];

    useEffect(() => {
        const text = texts[currentIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(prev => text.substring(0, prev.length + 1));
                if (displayText === text) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayText(prev => text.substring(0, prev.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex]);

    return (
        <div className="relative before:content-[''] before:absolute before:w-full before:h-full before:bg-[linear-gradient(white,transparent_1px),linear-gradient(to_right,white,transparent_1px)] before:bg-[length:100%_100px,100px_100%] before:opacity-10 before:bg-fixed before:-top-[56px]">
            <div className="container mx-auto relative">
                <motion.div
                    className="w-full flex flex-col text-center py-[150px] gap-6 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span variants={itemVariants} className="text-xl text-white uppercase">Hello</motion.span>
                    <motion.h1 variants={itemVariants} className="text-6xl/18 font-bold text-white">I’m Nikhil Agarwal<br />
                        A
                        <span className="relative ms-3 text-start bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)] bg-clip-text text-transparent after:content-[''] after:absolute after:w-[2px] after:h-full after:bg-white">{displayText}</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-[#bebebe] text-base/8 max-w-3xl mx-auto">A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth. It serves as</motion.p>
                    <motion.div variants={itemVariants} className=''>
                        <Button href={resume} value="View Resume" />
                    </motion.div>
                </motion.div>
                <div className='absolute right-[20%] -top-[56px] -scale-x-[1]'>
                    <motion.img
                        src={light}
                        className="w-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                </div>
                <div className="slider-bg-dot-shape absolute top-0 right-[40%] pointer-events-none">
                    <div className="h-[600px] w-[300px] overflow-hidden wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order ">
                        <div className="blocksync-stars w-px h-px bg-transparent animate-animStar after:content-[''] after:absolute after:w-px after:h-px after:top-[2000px] after:bg-transparent "></div>
                        <div className="blocksync-stars2 w-[2px] h-[2px] bg-transparent animate-animStar2 after:content-[''] after:absolute after:w-[2px] after:h-[2px] after:top-[2000px] after:bg-transparent"></div>
                        <div className="blocksync-stars3 w-[3px] h-[3px] bg-transparent animate-animStar3 after:content-[''] after:absolute after:w-[3px] after:h-[3px] after:top-[2000px] after:bg-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}