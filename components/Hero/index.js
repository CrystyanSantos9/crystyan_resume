import React from 'react'

import {FiLink} from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaYoutube} from 'react-icons/fa'

const Hero=()=>{
    return(
        <div className="pt-32 md:grid md:grid-cols-2 md:pt-16 leading-none">
                <div className="pt-16 md:pt-32">
                    <h1 className="text-4xl uppercase pl-16">Olá, eu sou o Crystyan Santos</h1>
                    <h2 className="text-4xl font-bold md:text-5xl uppercase pl-16">Full Stack Developer</h2>
                    <div className="mx-8 px-8 relative border-yellow border-2 rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6">
                    <h3 className="text-white absolute bg-yellow py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase">Contato</h3>
                       <p className="text-center md:text-left">
                           <FaLinkedin className="text-5xl md:text-6xl inline-block md:mr-6" />
                           <FaGithub className="text-5xl md:text-6xl inline-block md:mr-6" />
                           <FaYoutube className="text-5xl md:text-6xl inline-block md:mr-6" />
                           <FiLink className="text-5xl md:text-6xl inline-block" />
                        <br />
                        <span className="font-bold inline-block mt-4 shadow-inner">Ou deixe uma mensagem: cryssantos9@gmail.com</span>
                       </p>
                    </div>
                    
                </div>

                <div className="my-5  mb-0 sm:pt-48 mx-8 px-8 md:mx-auto"><img src="/images/avatar3.png" /></div>

               
            </div>
    )
}

export default Hero