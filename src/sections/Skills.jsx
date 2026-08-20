import React from 'react';
const skills=[ "HTML5","CSS3","Tailwind Css","Java Script","React.js","Node.js","php","Java","python","mysql","git & github",
]
;
function Skills() {
  return (
     <section id="experiences" className=" py-5 relative overflow-hidden mx-5">
          <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Skills</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Skills make every thing 
                    <span className="font-serif italic font-normal text-white"> possible.</span>
                </h2>
            </div>

            <div className='group glass px-4 md:py-6 rounded-md glow-border mx-2.5 duration-300 animate-fade-in animation-delay-100'>
                <div className='flex justify-between flex-wrap'>
                {
                    skills.map((skill,idx)=>(
                        <div key={idx} className='md:px-5 px-2.5 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-foreground/150 hover:border-primary/150 hover:text-primary transition-all duration-300 animate-fade-in animation-delay-100'>{skill}</div>
                    ))
                }
                </div>

            </div>


    </section>
  )
}

export default Skills