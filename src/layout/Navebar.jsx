import { Menu,X} from "lucide-react"
import { Button } from "../components/Button"
import { useEffect, useState } from "react"

const naveLinks=[
    {href:"#about",lable:"About"},
    {href:"#project",lable:"Project"},
    {href:"#experiences",lable:"Experiences"},
    {href:"#testimonils",lable:"Testimonils"},
    
]
export const Navebar =()=>{
    const[isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
    const [scroll,setScroll]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>50){
                setScroll(true);
            }else{setScroll(false)}
        };
        window.addEventListener("scroll",handleScroll);
        return ()=>window.removeEventListener("scroll",handleScroll);


    },[]);
    return(
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500  z-50 ${scroll ? "glass-strong py-3" : "bg-transparent py-5"}`}>
            <nav className="continer mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    JA<span className="text-primary">.</span>
                </a>
                {/*Desktop Nave */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {naveLinks.map((link,index)=>(
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.lable}</a>
                        )

                       )}
                    </div>
                </div>
                {/* CTA button*/}
                <div className="hidden md:flex">
                   <a href="#contact"><Button size="sm">Contact me</Button></a> 
                </div>
                {/* mobile Menu Button */}
                <button className="md:hidden p-2 text-foreground hover:cursor-pointer " onClick={()=>setIsMobileMenuOpen((prev)=>!prev)} >
                    {isMobileMenuOpen ?<X size={24} />: <Menu size={24} />}
                </button>
            </nav>
            {/*mobbile menu */}
            {isMobileMenuOpen &&(<div className="md:hidden glass-strong animate-fade-in">
                <div className="continer mx-auto p-6 flex flex-col gap-4">
                    {naveLinks.map((link,index)=>(
                            <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2" onClick={()=> setIsMobileMenuOpen(false)}>{link.lable}</a>
                    ))}
                    <a href="#contact"><Button onClick={()=> setIsMobileMenuOpen(false)}>Contact me</Button></a>
                </div>

            </div> )}
        </header>
    )
}