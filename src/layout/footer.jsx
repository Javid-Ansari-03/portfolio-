import { FaGithub,FaFacebook, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { LinkedinIcon } from "@sanity/icons";
export const Footer= ()=>{


    const socials=[
        {    
            icon:<BiLogoGmail />,
            href:"mailto:javid.poiaa@gmail.com",
        },
         {    
            icon:<FaGithub />,
            href:"https://github.com/Javid-Ansari-03",
        },
        {
            icon:<FaFacebook/>,
            href:"http:/www.facebook.com/M Javid Ansari"
        },
        {
            icon:<FaLinkedin/>,
            href:"https://www.linkedin.com/in/m-javid-ansari"
        }
    ]
   const naveLinks=[
    {href:"#about",lable:"About"},
    {href:"#project",lable:"Project"},
    {href:"#ecperiences",lable:"Experiences"},
    {href:"#testimonils",lable:"Testimonils"},
    
]
    return(
        <section>
            <div className="flex justify-between p-8 glass rounded-3xl m-6 flex-col md:flex-row items-center ">
                <div className="flex items-center justify-center text-4xl md:text-5xl font-semibold">JA <span className="text-primary">.</span></div>
                <div className="flex flex-row justify-center items-center m-3 flex-wrap">
                    {naveLinks.map((item,idx)=>(
                        <div key={idx} className="bg-primary/10 px-4 py-2 m-2 rounded-xl text-muted-foreground">
                            <a href={item.href}>{item.lable}</a>
                        </div>

                    ))}
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap">
                    {socials.map((item,idx)=>(
                        <div className="bg-primary/10 p-2 rounded-full m-2 text-primary">
                            <a href={item.href}>{item.icon}</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}