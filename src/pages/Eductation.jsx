import FontAwesome from "../components/FontAwesome";
import { motion } from "framer-motion";

const Education = () => {

    const experience = [
        {
            title: 'Frontend Developer',
            company: 'Taggbox Pvt. Ltd',
            starDate: 'Dec 2021',
            endDate: 'Present',
            tagline: 'A company specializing in web solutions',
            desc: [
                'Create the migration of the company\'s core application from PHP to React, improving UI responsiveness and performance. Managed the code rewriting, testing, and development phases while resolving compatibility issues. The migration resulted in a live application with minimal bugs and enhanced performance',
                'Developed and maintained 20+ responsive web interfaces using HTML, CSS, JavaScript, and Tailwind CSS, with exposure to basic React and Next.js components.',
                'Integrated frontend components with backend APIs to deliver dynamic pages serving 10,000+ monthly users.',
                'Resolved 50+ UI, JavaScript, and cross-browser issues, ensuring consistent behavior across Chrome, Firefox, Safari, and Edge.',
                'Improved mobile usability and accessibility, reducing bounce rate by 20-25% across key pages.'
            ]
        },
        {
            title: 'Web Designer',
            company: 'WhyQ Pte. Ltd.',
            starDate: 'Aug 2020',
            endDate: 'Nov 2021',
            tagline: 'A digital solutions provider focused on UI/UX',
            desc: [
                'Built and maintained 30+ user-facing webpages using HTML, CSS, JavaScript, and jQuery',
                'Designed and implemented interactive UI components that increased user engagement by 15–20%.',
                'Debugged and optimized legacy frontend code, reducing UI-related support issues by 20%.',
                'Ensured responsive behavior and visual consistency across devices and screen sizes.'
            ]
        },
        {
            title: 'Web Designer',
            company: 'Ahead Websoft Pvt. Ltd.',
            starDate: 'Mar 2017',
            endDate: 'Jul 2020',
            tagline: 'A web development and design company',
            desc: [
                'Created 15+ wireframes, mockups, and interactive prototypes using Figma and Photoshop',
                'Designed logos, banners, icons, and UI assets for multiple client websites and applications',
                'Converted UI designs into clean HTML/CSS implementations aligned with modern design standards.',
                'Researched and applied current UI/UX trends, improving design quality and client satisfaction.',
                'Provided technical support and design fixes, ensuring timely project delivery'
            ]
        }
    ]



    return (
        <motion.div className="py-[50px] px-3"
        >
            <div className="container mx-auto">
                <h2 className="bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)] bg-clip-text text-transparent uppercase text-md text-center mb-3">Work Experience</h2>
                <h3 className="uppercase text-2xl font-bold text-white mb-[50px] text-center">
                    Delivering Scalable & High-Performance Applications
                </h3>
                <div className="flex flex-col gap-8 ">
                    {experience.map((exp, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 50 }} key={index} className="w-full">
                                <div className="tmponhover group bg-[#06131b] rounded-3xl md:p-10 p-6 text-white h-full flex flex-col justify-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:border before:border-transparent">
                                    <div className="light-left left-0 top-0 size-50 bg-[#139bfd] rounded-full absolute -translate-x-[50%] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                    <div className="flex flex-wrap items-start justify-between">
                                        <div className="">
                                            <h4 className="text-2xl font-bold">{exp.title}</h4>
                                            <p className="bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)] bg-clip-text text-transparent">{exp.company}</p>
                                        </div>
                                        <div className="">{exp.starDate} - {exp.endDate}</div>
                                    </div>
                                    <div className="mt-5 text-[#BEBEBE]">
                                        <p className="mb-3">{exp.tagline}</p>
                                        <ul className="flex flex-col gap-3 text-sm ps-5">
                                            {exp.desc.map((item, i) => {
                                                return (
                                                    <li className="relative"><FontAwesome style="regular" name="circle-check" className="bg-[linear-gradient(312deg,#13fdfd_0%,#139bfd_100%)] bg-clip-text text-transparent absolute left-[-22px] top-[3px]" />{item}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}

                </div>
            </div>
        </motion.div>
    )
}

export default Education;