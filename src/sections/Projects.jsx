import { ArrowRight, ArrowUpRight, Scale  } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import img1 from '../assets/images/project1.png';
import img2 from '../assets/images/project2.png';

const projects=[
    {
        title:"Javid store",
        discribtion:"it is a project about a store it is so scalable and efactive for shoping",
        img:'/src/assets/images/project2.png',
        tags:["Html","Css","js"],
        link:"https://github.com/Javid-Ansari-03",
        github:"",
    }, {
        title:"Home_set",
        discribtion:"it is a project for sale and renting homes in every part of Afghanistan",
        img:'../src/assets/images/project1.png',
        tags:["react","node.js","mysql"],
        link:"https://github.com/Javid-Ansari-03",
        github:"#",
    }, {
        title:"Asra Book store",
        discribtion:"it is a management system for a book store, it so beneficial for managing the store",
        img:'../src/assets/images/project1.png',
        tags:["Html","tailwind Css","php","mysql "],
        link:"https://github.com/Javid-Ansari-03",
        github:"#",
    },
   
]
export const Projects=()=>{
    return(
    <section id="project" className="relative py-32 overflow-hidden">
        {/*bg-glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
        <div className="absolute bootom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        <div></div>
         <div className="continer mx-auto px-6 relative z-10">
            {/*sectiom header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Project that 
                    <span className="font-serif italic font-normal text-white"> make and impact.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">A selection of my recent work, from complex web aplications to innvative tools that solve real world problems.</p>
            </div>
            {/*project Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                 
                {projects.map((project,idx)=>(
                    <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" 
                    style={{
                            animationDelay:`${(idx+1)*100}ms`
                    }}>
                        {/*image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.img} alt={project.title} className="w-full h-full boject-cover transition-transform duration-700 group-hover:scale-110 "/>
                            <div className='absolute inset-0 from-card via-card/50 to-transparent opacity-60'/>
                            {/*overlay-link */}
                            <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0  group-hover:opacity-100 transition-opacity duration-300'>
                                <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                                    <ArrowUpRight className='w-5 h-5 '/>
                                </a>
                                <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'><FaGithub /> </a>
                            </div>
                        </div>
                          
                          {/*contant */}
                          <div className='p-6 space-y-4'>
                            <div className='flex items-start justify-between'>
                                <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                                <ArrowUpRight className='text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'/>
                            </div>
                            <p className='text-muted-foreground text-sm'>{project.discribtion}</p>
                            <div className='flex flex-wrap gap-2'>{project.tags.map((tag,tagIdx)=>(
                                <span key={tagIdx} className='px-5 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 '>{tag}</span>
                            ))}</div>
                          </div>
                    </div>
           
                ))}
            </div>
            {/*vive all project btn */}
            <div className='flex justify-center items-center mt-8 '>
                <button className='px-9 py-4 border-2 border-border rounded-full hover:bg-primary/50 font-normal transition-colors duration-300'>See All Project</button>
            </div>
         </div>
   </section>
    )
}