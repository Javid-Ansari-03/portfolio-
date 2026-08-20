import { Footer } from "./layout/footer"
import { Navebar } from "./layout/Navebar"
import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Experiences } from "./sections/Experiences"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import Skills from "./sections/Skills"
import { Testimonils } from "./sections/Testimonils"

function App() {
return(
 <>
 <div className="min-h-screen overflow-x-hidden">
    <Navebar/>
    <main>
        <Hero/>
        <About/>
        <Projects />
        <Skills/>
        <Experiences/>
        <Testimonils/>
        <Contact/>
    </main>
    <Footer/>
 </div>
 </>
)
}

export default App
