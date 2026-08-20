
import { random } from 'mathjs'
import bg1 from '../assets/images/bg-1.jpg'
import { ArrowLeft, ArrowRight, ChevronDown, Code2, Download} from 'lucide-react';
import img from '../assets/images/javid.png';
import { Button } from '../components/Button';
import { FaGithub,FaFacebook,FaLinkedin,FaTwitter } from "react-icons/fa";
const skills=[
    "HTML",
    "Css",
    "Tailwind Css",
    "JS",
    "Node.js",
    "React",
    "Gite",
    "Gitehub action",];


export const Hero=()=>{
    return(
       <section className='relative min-h-screen flex items-center overflow-hidden'>
        {/*BG */}
        <div className='absolute inset-0'>
            <img src={bg1} alt="Hero Image" className='w-full h-full object-cover opacity-40'/>
        </div>
        <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'/>
        {/*Green dote */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {[...Array(20)].map((_,i)=>(
                <Code2 size={20} className='absolute text-primary text-sm'  style={{
                    left: `${Math.random()*100}%` ,
                    top:`${Math.random()*100}%`,
                    animation:`slow-drift ${15+Math.random()*20}s ease-in-out infinite`,
                    animationDelay:`${Math.random()*5}s`

                }} key={i}/>
            
            ))}

        </div>
        {/*Contant */}
        <div className='container mx-auto px-6 py-32 md:pb-10 pb-5 relative z-10'>
            <div className='grid lg:grid-cols-2 items-center gap-12'>
                {/* left-contant */}
                <div className='space-y-8'>
                    <div className='animate-fade-in'>
                        <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                            <span className='w-2 h-2 bg-primary rounded-full animate-puls'/>
                                Software Engineer * React Spacialist
                            
                        </span>
                    </div>
                    {/*head line */}
                    <div className='space-y-4'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                            Building the <span className='text-primary glow-text'>future</span>
                            <span className='font-serif italic font-normal text-white'>
                            ,one line of code at a time.
                            </span>
                        </h1>
                        <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                            Hi! I'm Mohammad Javid Ansari -- a Software engineer. I build scalable, performant web aplication that user love.
                        </p>
                    </div>
                    {/*CTA s */}
                    <div className='flex md:gap-4 gap-0.5 animate-fade-in animation-delay-300 '>
                       <a href="#contact"> <Button size='lg'>Contact Me <ArrowRight className='w-5 h-5'/> </Button></a>
                          <a href='/Javid_cv.png' download="M Javid Ansari Cv" className='animated-border py-3 px-6 rounded-full grup'>
                           <span className='relative z-10 flex items-center justify-center gap-2'><Download/> Download CV</span>

                           </a>
                    </div>
                    {/*social links */}
                    <div>
                        <span>Fllow Me :</span>
                        <div className='flex gap-2.5 pt-5'>
                        {[{icon:FaGithub,href:"https://github.com/Javid-Ansari-03"},
                         {icon:FaLinkedin ,href:"https://www.linkedin.com/in/m-javid-ansari"},
                        ].map((social,idx)=>(
                            
                            <a key={idx} href={social.href}>{<social.icon size={30}/>}</a>
                           
                        ))}
                         </div>
                       
                    
                       
                    </div>
                </div>
                {/* right-profile-img */}
                <div className='relative animate-fade-in animation-delay-300'>
                        {/*profile image */}
                        <div className='relative max-w-md mx-auto'>
                            <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse'/>
                            <div className='relative glass rounded-3xl p-2 glow-border'>
                           <img src={img} className='w-full object-cover rounded-2xl '/>
                           {/*floating batch*/}
                           <div className='absolute -bottom-4 -right-4 rounded-xl px-4 py-3 animate-float'>
                            <div className='flex items-center gap-3'>
                                <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                                <span className='text-sm font-medium'>Available for work</span>
                            </div>
                           </div>
                           {/*State batch */}
                           <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                            <div className='text-2xl font-bold text-primary'>1+</div>
                            <div className='text-xs text-muted-foreground'>Years Exp.</div>
                           </div>
                            </div>
                        </div>
                </div>
            </div>
            {/*Skils Section*/}
            <div className='mt-20 animate-fade-in animation-delay-600'>
                <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with   </p>
                <div className='relative overflow-hidden'>
                    <div className='flex animate-marqee'>
                        {[...skills,...skills].map((skil,idx)=>(
                            <div key={idx} className='flex shrink-0 px-8 py-4'>
                                <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skil}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
                          
        </div>
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800'>
             <a href="#about" className='felx flex-col  gap-2 text-muted-foreground hover:text-primary'>
             <span className='text-xs uppercase tracking-wider text-center'>Scroll</span>
             <ChevronDown className='h-6 w-6 animate-bounce'/>
             </a>

        </div>

       </section>

    )
}