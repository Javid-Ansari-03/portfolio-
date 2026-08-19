import { Mail,Phone,MapPin, Send, Verified, SendIcon } from "lucide-react"
import {Button} from '../components/Button';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
const contactInfo=[
    {
        icon:Mail,
        lable:"Email",
        value:"javid.poiaa@gmail.com",
        href:"mailto:javid.poiaa@gmail.com"
    },
     {
        icon:Phone,
        lable:"Phone",
        value:"+93 767522854",
        href:"tel:+93767522854"
    },
     {
        icon:MapPin,
        lable:"Location",
        value:"Kabul AFG",
        href:"https://www.google.com/map/search/?api=1query=Kabul,Afghanistan"
    }
]
export const Contact=()=>{
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        massage:""
    })

    const form=useRef();
    const [status,setStatus]=useState('');
    const [statecolor,setStatcolor]=useState(true);

    const sendemail=(e)=>{
        e.preventDefault();
        setStatus(
<div className="flex items-center gap-1 justify-center text-primary text-center ">
  <span>Sending</span>
  <span className="animate-bounce [animation-delay:0ms]">.</span>
  <span className="animate-bounce [animation-delay:150ms]">.</span>
  <span className="animate-bounce [animation-delay:300ms]">.</span>
</div>);
        emailjs.sendForm(
            "service_b645g8c","template_6via1lh",
            form.current,{publicKey:"F4NrRBUKbVXd7dOiQ"})
            .then(
                (result)=>{
                    console.log("success:",result);
                    setStatus(<div className="flex justify-center gap-3.5"><p>Message sent successfully</p><SendIcon/></div>);
                    form.current.reset();},
                    (error)=>{
                        setStatcolor(false);
                        console.log("FAILD...",error);
                        setStatus("Failed to send message check your conection !");
                    }
            )
    }
   
    return(
       <section className="py-32 overflow-hidden relative" id="contact">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        </div>
        <div className="container mx-auto px-6 relative z-10">
             {/*header section */}
                <div className="max-w-3xl mb-16 text-center mx-auto">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">get In touch </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-daley-100">
                    Let's build{" "}<span className="font-serif italic font-normal text-white">something great.</span>
               </h2>
                 <p className="text-muted-foreground animate-fade-in animation-daley-200">Have a project in maind? I'd love to hear about it. Send me massege and let's discusse how we work togather</p>

            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                    <form ref={form} onSubmit={sendemail} action="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block tex-t-sm font-medium mb-2">Name</label>
                            <input name="name" required type="text" id="name" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-0 transition-all" required placeholder="Your Name...." value={formData.name} onChange={(e)=> setFormData({...formData,name:e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block tex-t-sm font-medium mb-2">Email</label>
                            <input name="email" required type="email" id="emial" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-0 transition-all" required placeholder="Your@gmail.com" value={formData.email} onChange={(e)=> setFormData({...formData,email:e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="massage" className="block tex-t-sm font-medium mb-2">Massege</label>
                            <textarea name="massage" required type="text" id="massege" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-0 transition-all" required placeholder="Your Massege...." rows={5} value={formData.massege} onChange={(e)=> setFormData({...formData,massege:e.target.value})}/>
                        </div>
                        <Button className="w-full" size="lg" type="submit">
                            Send Massege
                            <Send/>
                        </Button>
                        {status && <p className={`text-center font-semibold text-primary ${statecolor ? "" : "text-red-500"}`}>{status}</p>}
                    </form>
                </div>
                {/*Contact info */}
                <div className="space-y-8 animate-fade-in animation-dalay-400">
                    <div className="glass rounded-3xl p-8">
                        <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <a href={item.href} key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors grup">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center grup">
                                    <item.icon className="size-5 text-primary"/>

                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">
                                            {item.lable}
                                        </div>
                                        <div className="font-medium">{item.value}</div>
                                    </div>

                                </a>

                            ))}

                        </div>

                    </div>
                    {/*avalaibilty Card */}
                    <div className="glass rounded-3xl p-8 border border-primary/30">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="size-3 bg-green-500 rounded-full animate-pulse"/>
                                <span className="font-medium">Curently Available</span>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                I'm currently open to new opporunities and exciting project.
                                Whehter you need a full-time engineer or a freelance consultant,
                                let's latk!

                            </p>
                    </div>

                </div>
            </div>
        </div>


       </section> 
    )
}



// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { Button } from "../components/Button";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const contactInfo = [
//   {
//     icon: Mail,
//     lable: "Email",
//     value: "javid.poiaa@gmail.com",
//     href: "mailto:javid.poiaa@gmail.com",
//   },
//   {
//     icon: Phone,
//     lable: "Phone",
//     value: "+93 767522854",
//     href: "tel:+93767522854",
//   },
//   {
//     icon: MapPin,
//     lable: "Location",
//     value: "Kabul AFG",
//     href: "#",
//   },
// ];

// export const Contact = () => {
//   const form = useRef();
//   const [status, setStatus] = useState("");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     setStatus("Sending...");

//     try {
//       const result = await emailjs.sendForm(
//         "service_b645g8c",
//         "template_6via1lh",
//         form.current,
//         {
//           publicKey: "F4NrRBUKbVXd7dOiQ",
//         }
//       );

//       console.log("SUCCESS:", result);

//       setStatus("Message sent successfully!");

//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//       });

//       form.current.reset();
//     } catch (error) {
//       console.error("EMAILJS ERROR:", error);
//       console.error("STATUS:", error.status);
//       console.error("TEXT:", error.text);

//       setStatus(
//         `Failed: ${error.text || error.message || "Unknown error"}`
//       );
//     }
//   };

//   return (
//     <section
//       className="py-32 overflow-hidden relative"
//       id="contact"
//     >
//       <div className="absolute top-0 left-0 w-full h-full">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">

//         {/* Header */}
//         <div className="max-w-3xl mb-16 text-center mx-auto">
//           <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
//             Get In Touch
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
//             Let's build{" "}
//             <span className="font-serif italic font-normal text-white">
//               something great.
//             </span>
//           </h2>

//           <p className="text-muted-foreground">
//             Have a project in mind? I'd love to hear about it.
//             Send me a message and let's discuss how we work together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

//           {/* Form */}
//           <div className="glass p-8 rounded-3xl border border-primary/30">

//             <form
//               ref={form}
//               onSubmit={sendEmail}
//               className="space-y-6"
//             >

//               {/* Name */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Name
//                 </label>

//                 <input
//                   name="name"
//                   type="text"
//                   id="name"
//                   className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-0 transition-all"
//                   placeholder="Your Name...."
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       name: e.target.value,
//                     })
//                   }
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Email
//                 </label>

//                 <input
//                   name="email"
//                   type="email"
//                   id="email"
//                   className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-0 transition-all"
//                   placeholder="Your@gmail.com"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       email: e.target.value,
//                     })
//                   }
//                   required
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Message
//                 </label>

//                 <textarea
//                   name="message"
//                   id="message"
//                   className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-0 transition-all"
//                   placeholder="Your Message...."
//                   rows={5}
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       message: e.target.value,
//                     })
//                   }
//                   required
//                 />
//               </div>

//               <Button
//                 className="w-full"
//                 size="lg"
//                 type="submit"
//               >
//                 Send Message
//                 <Send />
//               </Button>

//               {status && <p>{status}</p>}

//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-8">

//             <div className="glass rounded-3xl p-8">
//               <h3 className="text-xl font-semibold mb-6">
//                 Contact Info
//               </h3>

//               <div className="space-y-4">
//                 {contactInfo.map((item, i) => (
//                   <a
//                     href={item.href}
//                     key={i}
//                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
//                   >
//                     <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
//                       <item.icon className="size-5 text-primary" />
//                     </div>

//                     <div>
//                       <div className="text-sm text-muted-foreground">
//                         {item.lable}
//                       </div>

//                       <div className="font-medium">
//                         {item.value}
//                       </div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Availability */}
//             <div className="glass rounded-3xl p-8 border border-primary/30">
//               <div className="flex items-center gap-3 mb-4">
//                 <span className="size-3 bg-green-500 rounded-full animate-pulse" />

//                 <span className="font-medium">
//                   Currently Available
//                 </span>
//               </div>

//               <p className="text-muted-foreground text-sm">
//                 I'm currently open to new opportunities and
//                 exciting projects. Whether you need a full-time
//                 engineer or a freelance consultant, let's talk!
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };