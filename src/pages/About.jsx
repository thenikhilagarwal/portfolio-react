import FontAwesome from "../components/FontAwesome";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div className="md:pt-[100px] pt-[50px] pb-[50px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <motion.div initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 50 }} className="xl:w-1/2 w-full pe-3 xl:ps-0 ps-3" >
                        <div className="md:p-16 p-6 bg-[#06131b] rounded-3xl overflow-hidden relative after:bg-[#139bfd] after:absolute after:h-[474px] after:w-[474px] after:rounded-full after:right-[-150px] after:bottom-[-350px] after:blur-[200px] xl:mb-0 mb-6 ">
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-[#139bfd] md:text-9xl text-7xl   font-bold">05+</h2>
                                <span className="text-white md:text-5xl/14 text-3xl/10 font-bold ">Years of<br />Experience</span>
                            </div>
                            <p className="text-white">Frontend Developer with 5+ years of experience building responsive, highperformance web applications. Strong expertise in React, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS, and WordPress. Proven ability to optimize UI performance, resolve cross-browser issues, and collaborate with backend teams to deliver scalable, user-centric solutions. Experienced in translating UI/UX designs into clean, reusable components with measurable business impact.</p>
                        </div>
                    </motion.div>
                    <motion.div className="xl:w-1/2 w-full xl:ps-3 ps-0 flex flex-wrap" initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 50 }}>
                        <div className="w-1/2 px-3 mb-5">
                            <div className="tmponhover group bg-[#06131b] shadow-[4px_4px_0_0_rgba(20,155,252,.11)] rounded-3xl lg:text-2xl text-lg font-bold text-center p-8 text-white h-full flex flex-col justify-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:border before:border-transparent ">
                                <FontAwesome style="solid" name="code" className="text-5xl mx-auto mb-3 text-[#139bfd]" />
                                <h3 className="mb-3">Web Development</h3>
                                <div className="light-left left-0 top-[130px] size-50 bg-[#139bfd] rounded-full absolute -translate-x-[50%] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <div className="tmponhover group bg-[#06131b] shadow-[4px_4px_0_0_rgba(20,155,252,.11)] rounded-3xl lg:text-2xl text-lg font-bold text-center p-8 text-white h-full flex flex-col justify-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:border before:border-transparent ">
                                <FontAwesome style="solid" name="bezier-curve" className="text-5xl mx-auto mb-3 text-[#139bfd]" />
                                <h3 className="mb-3">UI/UX Design</h3>
                                <div className="light-left left-0 top-[130px] size-50 bg-[#139bfd] rounded-full absolute -translate-x-[50%] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            </div>
                        </div>
                        <div className="w-1/2 px-3">
                            <div className="tmponhover group bg-[#06131b] shadow-[4px_4px_0_0_rgba(20,155,252,.11)] rounded-3xl lg:text-2xl text-lg font-bold text-center p-8 text-white h-full flex flex-col justify-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:border before:border-transparent ">
                                <FontAwesome style="regular" name="lightbulb" className="text-5xl mx-auto mb-3 text-[#139bfd]" />
                                <h3 className="mb-3">Web Research</h3>
                                <div className="light-left left-0 top-[130px] size-50 bg-[#139bfd] rounded-full absolute -translate-x-[50%] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            </div>
                        </div>
                        <div className="w-1/2 px-3">
                            <div className="tmponhover group bg-[#06131b] shadow-[4px_4px_0_0_rgba(20,155,252,.11)] rounded-3xl lg:text-2xl text-lg font-bold text-center p-8 text-white h-full flex flex-col justify-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:border before:border-transparent ">
                                <FontAwesome style="solid" name="envelope-open-text" className="text-5xl mx-auto mb-3 text-[#139bfd]" />
                                <h3 className="mb-3">Marketing</h3>
                                <div className="light-left left-0 top-[130px] size-50 bg-[#139bfd] rounded-full absolute -translate-x-[50%] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default About;