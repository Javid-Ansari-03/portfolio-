import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

const testimonils=[
    {
        quote:"M javid ansari is programmer and a good devloper at that much I know hem",
        aouthor:"Alli",
        roale:"PRT_TECh, manager",
         avatar:'/src/assets/images/milad.jpeg',
    },
      {
        quote:"M javid Ansari is a good and same time serious manager since I work with him",
        aouthor:"Aziz",
        roale:"Growth_Today team, frontent developer",
        avatar:'/src/assets/images/aziz.JPG',
    },
      {
        quote:"His work is always appreciated, and he work in team as good and kindly with others ",
        aouthor:"Azghar",
        roale:"front developer",
         avatar:'/src/assets/images/javid1.png',
    },
    
]
export const Testimonils=()=>{
    const[activeIdx,setActiveIdx]=useState(0);
    const next= ()=>{
        setActiveIdx((prev) => (prev+1) % testimonils.length)
    }
    const pervious= ()=>{
        setActiveIdx((prev) => (prev-1 +testimonils.length) % testimonils.length)
    }
    return(
        <section id="testimonils" className="py-32 overflow-hidden relative">
            <div className=" absolute top-1/2 left-1/2 w-220 h-220 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>
            <div className="continer mx-auto px-6 relative z-10">
                {/*header section */}
                <div className="max-w-3xl mb-16 text-center mx-auto">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">What people say</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-daley-100">
                    kinds word from{" "}<span className="font-serif italic font-normal text-white"> amazing people.</span>
               </h2>
            </div>

            {/*testimonils carousel */}
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/*main testimonial */}
                    <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-dalay-200">
                        <div className="absolute -top-4 left-8 size-12 rounded-full bg-primary flex items-center justify-center ">
                            <Quote className="size-6 text-primary-foreground"/>
                        </div>
                        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                            "{testimonils[activeIdx].quote}"
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <img src={testimonils[activeIdx].avatar} alt=""
                             className="size-14 rounded-full object-cover ring-2 ring-primary/20"/>
                            <div>
                                <div className="font-semibold">{testimonils[activeIdx].aouthor}</div>
                                    <div className="text-sm text-muted-foreground">{testimonils[activeIdx].roale}</div>
                            </div>
                        </div>
                    </div>

                    {/*testimonils navegations*/}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={pervious}>
                            <ChevronLeft/>
                        </button>
                        <div className="flex gap-2">{testimonils.map((_,idx)=>(
                            <button key={idx} onClick={()=> setActiveIdx(idx)} className={`size-2 rounded-full transition-all duration-300 ${idx===activeIdx ? "w-8 bg-primary": "bg-muted-foreground/30 hover:bg-muted-foreground/50"} `}/>
                        ))}</div>
                         <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next }>
                            <ChevronRight/>
                        </button>
                    </div>

                </div>
            </div>
            </div>
        </section>
    )
}