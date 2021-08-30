import React, {useEffect, useState} from 'react'
import getUser from '../utils/getUser'
import Modal from 'react-modal';

import {RiGitRepositoryLine} from 'react-icons/ri'
import {RiBookOpenLine} from 'react-icons/ri'
import {RiCodeBoxFill}from 'react-icons/ri'
import {RiDraftLine}from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {GoGist, GoStar} from 'react-icons/go'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'
import { ToggleButton } from '../components/ToggleButton';
import {RiArrowDownSLine} from 'react-icons/ri'

const customStyles = {
  content: {
   background: "#000",
  },
}

const Index = ({ repos, user }) => {



  let subtitle = "Repositórios";

  const [show, setShow] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  function openModal() {
    setIsOpen(true);
    setShow(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    setShow(false);
  }





    //JSX
    return (
        <div className="font-sans mx-auto">
            <PageHead />
            <Hero />

            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
       style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}  className="text-center text-4xl font-extrabold">Repositórios</h2>
        <div  className="overscroll-contain text-center md:mx-20 bg-black">
        { show ? repos.map(repo => {
                        return (
                            <div key={repo.id} className="overscroll-contain bg-blue-900 border px-5 my-3 mx-2 rounded-lg rounded-r-sm">
                                <p className="break-all font-extrabold"><RiCodeBoxFill className="inline-block mx-1"/><a href={'https://github.com/'+ repo.full_name}>{repo.full_name}</a> </p>
                                {/* <p className="">Language: {repo.language} / <GoStar className="" /> Stars:{repo.stargazers_count}</p> */}
                                <p className="">Language: {repo.language}</p>
                                <p>Última atualização: {repo.updated_at}</p>
                            </div>
                        )
                    }): ""}
        <button className="text-center w-32 h-8 bg-blue-600  border-2 border-blue-600 rounded-full hover:bg-blue-500" onClick={closeModal}>close</button>
        </div>
        
        
      </Modal>

         
            <div className="text-center">
                <h3 className="text-center text-4xl font-extrabold bg-blue-600 border-2 border-blue-600 rounded-full  mx-10 my-5 md:mx-64">Educação</h3>
                <p className="text-xl my-2 ext-left text-justify  mx-5 my-5 md:text-center"><RiDraftLine className="inline-block" /> Análise e Desenvolvimento de Sistemas</p>
                <p className="text-xl my-2 ext-left text-justify  mx-5 my-5 md:text-center"><RiDraftLine className="inline-block" /> Ensino médio Técnico em Eletrônica</p>
            </div>

            <div className="text-center">
                <h3 className="text-center text-4xl font-extrabold  bg-blue-600  border-2 border-blue-600 rounded-full  mx-10 my-5 md:mx-64">Conhecimentos</h3>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Conceitos básicos sobre Docker e utilização de containers para criação de APis e micro serviços</p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Conceitos básicos sobre Kubernetes e gerenciamento de containers </p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Criação de Apis utilizando Runtime NodeJS</p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Criação de páginas web SPA utilizando REACT (Funcional)</p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Criação de páginas web SPA utilizando NEXT JS (Classes)</p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Criação de aplicações Mobile com React-Native (Classes)</p>
                <p  className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Conceitos básicos sobre AWS e Plataformas de Aplicação em Nuvens </p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Criação de processos CI/CD utilizando Jenkins </p>
                
               
            </div>

 
            <div onClick={openModal} className="mx-10  bg-opacity-50  md:mx-64 bg-footer-texture flex">
            <div className="flex flex-col  text-center flex-1">
            <h3 className="text-center text-4xl font-extrabold bg-blue-600 border-2 border-blue-600 rounded-full mx-10 my-5">Github</h3>
                <div className="flex flex-col  self-center bg-blue-300 border bg-blue-600 mx-5 my-5 p-2 rounded-2xl hover:bg-blue-500 lg:w-1/2">
                  <p>Github stats: 
                <RiGitRepositoryLine  className="inline-block" /> {user.public_repos} / <GoGist  className="inline-block"/> {user.public_gist} / <FiUsers  className="inline-block"/> {user.followers} 
                </p>
                <RiArrowDownSLine className="self-center text-2xl"/>
                </div>
            </div>
            </div>

            <div className="flex-2 justify-center text-center py-1 px-1">
                <p className="text-yellow-300 font-semibold">
                    Você pode acessar o reposítorio deste projeto em: 
                </p>
                <p className="text-xs text-align: center"><a className="break-all" href="https://github.com/CrystyanSantos9/crystyan_resume" className="underline text-align: center"> https://github.com/CrystyanSantos9/crystyan_resume</a></p>
            </div>

            <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`}</style>

            
        </div>

        
    )
}

export async function getServerSideProps(context) {

    const { repos, user } = await getUser('CrystyanSantos9')

    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
        }
    }

}

export default Index