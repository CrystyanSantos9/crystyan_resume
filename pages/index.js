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
        <div className="font-sans">
            <PageHead />
            <Hero />

            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}  className="text-center text-4xl font-extrabold">Repositórios</h2>
        <div  className="overscroll-contain text-center md:mx-20">
        { show ? repos.map(repo => {
                        return (
                            <div key={repo.id} className="overscroll-contain bg-gray-200 border px-5 my-3 mx-2 rounded-lg rounded-r-sm">
                                <p className="break-all text-yellow"><RiCodeBoxFill className="inline-block"/><a href={'https://github.com/'+ repo.full_name}>{repo.full_name}</a> </p>
                                {/* <p className="">Language: {repo.language} / <GoStar className="" /> Stars:{repo.stargazers_count}</p> */}
                                <p className="">Language: {repo.language}</p>
                                <p>Última atualização: {repo.updated_at}</p>
                                <p></p>
                        
                            </div>
                        )
                    }): ""}
        <button className="text-center w-32 h-8 border-yellow border bg-red-400  rounded-2xl hover:bg-red-200" onClick={closeModal}>close</button>
        </div>
        
        
      </Modal>

         
            <div className="text-center">
                <h3 className="text-center text-4xl font-extrabold border-b-2 border-yellow rounded-b-md mx-10 my-5 md:mx-64">Educação</h3>
                <p className="text-xl my-2 ext-left text-justify  mx-5 my-5 md:text-center"><RiDraftLine className="inline-block" /> Análise e Desenvolvimento de Sistemas</p>
                <p className="text-xl my-2 ext-left text-justify  mx-5 my-5 md:text-center"><RiDraftLine className="inline-block" /> Ensino médio Técnico em Eletrônica</p>
            </div>

            <div className="text-center">
                <h3 className="text-center text-4xl font-extrabold border-b-2 border-yellow rounded-b-md mx-10 my-5 md:mx-64">Conhecimentos</h3>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Conceitos básicos sobre Docker e utilização de containers para criação de APis e micro serviços</p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Conceitos básicos sobre Kubernetes e gerenciamento de containers </p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Criação de Apis utilizando Runtime NodeJS</p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Criação de páginas web SPA utilizando REACT (Funcional)</p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Criação de páginas web SPA utilizando NEXT JS (Classes)</p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Criação de aplicações Mobile com React-Native (Classes)</p>
                <p  className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Conceitos básicos sobre AWS e Plataformas de Aplicação em Nuvens </p>
                <p className="text-xl my-2 text-left text-justify mx-5 my-5 md:text-center"><RiBookOpenLine  className="inline-block"/> Criação de processos CI/CD utilizando Jenkins </p>
                
               
            </div>

            <div onClick={openModal} className="text-center border-gray-400 border bg-gray-100 mx-10 rounded-2xl bg-opacity-50 hover:bg-gray-200 md:mx-64">
            <div className="text-center flex-1">
            <h3 className="text-center text-4xl font-extrabold border-b-2 border-yellow rounded-b-md mx-10 my-5">Github</h3>
                <p className="text-center border-yellow border bg-red-400 mx-5 my-5 rounded-2xl">Github stats: <RiGitRepositoryLine  className="inline-block" /> {user.public_repos} / <GoGist  className="inline-block"/> {user.public_gist} / <FiUsers  className="inline-block"/> {user.followers} </p>
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