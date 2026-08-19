import { Code2, Lightbulb, Rocket, User } from "lucide-react"

const highlights=[
    {
        icon:Code2,
        title:"Clean Code",
        discribtion:"writing maintainable, scalable code that stands the test of time.",
    },
      {
        icon:Rocket,
        title:"Performance",
        discribtion:"Optimizing for speet and delivering lighting-fast user experinces.",
    },
      {
        icon:User,
        title:"Collobrations",
        discribtion:"Working closely with team to bring ideas to live.",
    },
      {
        icon:Lightbulb,
        title:"Innovation",
        discribtion:"Staying ahead with the latest technologies and practices.",
    },
]
export const About=()=>{
    return(
        <section id="about" className="relative py-32 overflow-hidden">
            <div className="continer mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/*left colums */}
                    <div className="space-y-8">
                      <div className="animate-fade-in">
                          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About ME</span>
                     </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delat-100 text-secondary-foreground">
                          Every thing are depends on you
                         <span className="font-serif italic font-normal text-white">, so just continue. </span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>I’m a Computer Science student and passionate Full-Stack Web Developer with a strong interest in building modern, responsive, and user-friendly web applications. I have experience working with technologies such as HTML, CSS, Tailwind css, JavaScript, React, PHP, MySQL, and Node.js, and I continuously work on improving my programming and problem-solving skills.</p> 
                            <p> I enjoy turning ideas into functional digital experiences and learning new technologies along the way.</p>
                            <p> My goal is to become a skilled software developer, work on meaningful projects, and continue growing through creativity, consistency, and continuous learning.</p>
                           
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">My mission is to creat digital exprince that are just functional, but truly delightful-product that user love to use and developers love to maintin. </p>
                        </div>
                    </div>
                    {/*right column-hilight */}
                    <div className="grid sm:grid-cols-2 gap-6">
                         {highlights.map((item,idx) => (
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{
                                animationDelay:`${(idx+1)*100}ms`
                            }}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"><item.icon className="w-6 h-6 text-primary"/></div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.discribtion}</p>
                            </div>
                            

                         ))}

                    </div>
                </div>
            </div>
        </section>
    )
}