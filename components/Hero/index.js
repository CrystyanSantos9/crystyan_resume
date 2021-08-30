import React, { useState } from "react";

import {FiLink} from 'react-icons/fi'
import {RiMailLine}from 'react-icons/ri'
import { FaLinkedin, FaGithub, FaYoutube} from 'react-icons/fa'
import { ToggleButton } from '../ToggleButton'
import Image from 'next-images'

const Hero=()=>{
    const [selected, setSelected] = useState(false);
    const[underline, setUnderline] = useState("_");
    const sendMail = e=>{
        console.log('enviando email ')
    }

    const underlineShowNotShow = (underline) =>{
   console.log(underline)
   setTimeout(()=>{
            if(underline){
                setUnderline(false)
            }else{
                setUnderline('_')
            }
        },1200)
    }

    underlineShowNotShow(underline);

    
    return(

        <div class="sm:bg-blue-100 md:bg-green-300 lg:bg-red-600 xl:bg-yellow-700 lg:flex lg:flex-row lg:justify-between"
        style={{
            backgroundImage: "url('/images/cedric-frixon-QiJp6dWw1oE-unsplash.jpg')",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
        >

   

                <div className="pt-16 md:pt-32  lg:w-3/6 lg:p-10 ">
                    <h1 className="text-4xl uppercase pl-16 lg:text-4xl">Olá, eu sou o Crystyan Santos</h1>
                    <h2 className="text-3xl font-bold uppercase pl-16 lg:text-4xl lg:pb-10">Javascript dev<span className="text-4xl font-bold uppercase">{underline}</span></h2>
                    <div className="mx-8 px-8 relative border-blue-600 border-2 rounded md:mx-10  md:px-16 pb-4 pt-10 mt-6 lg:p-16">
                    <h3 className="text-white absolute bg-blue-600 py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase lg:text-4xl lg:-mt-5">Contato</h3>
                       <div className="flex  justify-between flex-wrap">
                           <div>
                           <FaLinkedin className="text-5xl sm:text-5xl md:text-5xl" />
                           </div>
                           <div>
                           <FaGithub className="text-5xl sm:text-5xl md:text-5xl"/>
                           </div>
                         <div>
                         <FaYoutube  className="text-5xl sm:text-5xl md:text-5xl"/>
                         </div>
                         
                         <div>
                         <RiMailLine className="text-5xl sm:text-5xl md:text-5xl" onClick={sendMail}/>
                         </div>

                       </div>
                    </div>   
                </div>


                <div className="flex flex-row content-center justify-center lg:w-3/6 lg:p-32 lg:pl-24">
                   
                    <img  className="w-48 lg:w-48 lg:h-48"src="/images/avatar.png" />
               
       
        </div>

{/* fim */}
            </div>

            
    )
}

export default Hero