import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import {Instagram,Twitter,Facebook,Github,Linkedin,Phone,Layers,Youtube,Home,Code} from 'lucide-react'
import {FC} from 'react'
import { IconHolder } from './IconHolder'

export type SidebarProps={}
export const Sidebar:FC<SidebarProps>=()=>{
return(
    <div className="h-screen hidden md:block p-4 sticky top-0 left-0">
       <p className="relative before:absolute h-5 w-5 bg-green-600 rounded-3xl mb-4  after:absolute after:h-5 after:w-5 after:bg-green-400 after:rounded-full after:left-8"></p>
       <div className=" bg-secondary  p-6  flex flex-col gap-3 w-fit">
        <ul className="flex flex-col p-6 gap-6">
                        <IconHolder link='/home'>
                        <Home size={20} color='gray'/>
                        <span> Home</span>
                        </IconHolder>
                            <IconHolder link="dashboard#projects">
                            <Code size={20} color='blue' />
                            <span> Projects</span>
                        </IconHolder>
                        <IconHolder link="#">
                            <Phone color='royalblue' size={20} />
                            <span>Contact me </span>
                        </IconHolder>
                    </ul>
                    <p className=''>
                        Socials
                    </p>
                    <ul className="flex p-6 bg-secondary flex-col gap-6">
                        <IconHolder link='https://www.linkedin.com/in/magdum-pirjade-981955215/'>
                            <Linkedin size={20} color='green' />
                            <span> LinkedIn</span>
                        </IconHolder>
                        <IconHolder link="https://www.instagram.com/magdum._pirjade">
                            <Instagram size={20} color='#FFC914' />
                            <span>Instagram</span>
                        </IconHolder>

                        <IconHolder link="https://twitter.com/iampirjade" >
                            <Twitter size={20} color='royalblue' />
                            <span >Twitter</span>

                        </IconHolder>
                        <IconHolder link='https://github.com/pirjademl'>
                            <Github size={20} color='purple' />
                            <span>Github</span>

                        </IconHolder>
                        <IconHolder link='#'>
                            <Layers size={20} color='#565b99' />
                            <span >StackOverflow</span>
                        </IconHolder>
                        <IconHolder link='#' >
                            <Youtube size={20} color='red' />
                            <span >Youtube</span>
                        </IconHolder>
                    </ul>  

                    </div>
                    </div>

            )
    }
