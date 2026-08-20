
const experiences=[
       {
        period:"2025-2026",
        role:"Project manager",
        company:"Growth_Today",
        description:"I am the project manager of this team since it was created",
        technologies:["manager"],
        current:true

    },
    {
        period:"2025-2025",
        role:"web developer",
        company:"Growth_Today",
        description:"it was a project about a mount with the Growth_Today team ",
        technologies:["react","node.js","mysql"],
        current:false

    }, {
        period:"2025-2026",
        role:"Frontend Developer",
        company:"Growth_Today",
        description:"it is a project about a company for selling and ranting homes",
        technologies:["react"],
        current:true

    },
     {
        period:"2025-2026",
        role:"Backend Developer",
        company:"team work",
        description:"it is a project for a school",
        technologies:["node.js","mysql"],
        current:true

    },
  
 
]


export const Experiences=()=>{
    return(
       <section id="experiences" className="md:py-32 py-5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10">
            {/*section header */}
            <div className="max-w-3xl mb-16 mx-auto text-center">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career journey</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-daley-100">
                   Experiences that <span className="font-serif italic font-normal text-white"> speaks volumes.</span>
               </h2>
               <p className="text-muted-foreground animate-fade-in animation-daley-200"> A time line of my professional growth, from curious beginner up to now.</p>
            </div>
            {/*time line */}
            <div className="relative">
                <div className="timeline-flow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-liner-to-b from-primary/70 via-primary/70 to-transparent md:-translate-x-1/2 shadow-[0_0_2px_rgba(32,178,166,0.8)]"/>
                {/*experience item */}
                <div className="space-y-12">
                    {experiences.map((exp,idx)=>(

                        <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{
                            animationDelay:`${(idx+1)*150}ms`
                        }}>
                            {/*time line dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary -translate-1/2 ring-4 ring-background z-10">
                            {exp.current && <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>}
                            
                            </div>
                            {/*contant */}
                            <div className={`pl-8 md:pl-0 ${idx % 2===0 ?"md:pr-16 md:text-right":"md:col-start-2 md:pl-16"}`}>
                                <div className={`glss p-2 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                    <span className="text-sm text-primary font-medium ">{exp.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                    <p className="text-muted-foreground">{exp.company}</p>
                                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 ===0 ? "md:justify-end":""}`}>{exp.technologies.map((tech,techidx)=>(
                                        <span key={techidx} className="px-3 py-1 text-xs bg-surface rounded-full text-muted-foreground ">{tech}</span>

                                    ))}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>

       </section> 
    )
}