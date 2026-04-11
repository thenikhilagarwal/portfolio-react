import Banner from "../components/Banner";
//import Header from "../components/Header";
import About from "./About";
import ContactForm from "./ContactFrom";
import Education from "./Eductation";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

export default function Home() {
    return (
        <>
            {/* <Header/> */}
            <Banner />
            <About />
            <Skills />
            <Education />
            <Portfolio />
            <ContactForm />
            <Footer />
        </>
    )
}