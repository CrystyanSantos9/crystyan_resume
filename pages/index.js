import React from 'react'
import getUser from '../utils/getUser'

import {RiGitRepositoryLine} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {GoGist, GoStar} from 'react-icons/go'
import PageHead from '../components/PageHead'
import Hero from '../components/Hero'


const Index = ({ repos, user }) => {
    //JSX
    return (
        <div className="font-sans">
            <PageHead />
            <Hero />
            


            <div className="text-center">
                <h3 className="text-center text-4xl font-extrabold border-b-2 border-yellow rounded-b-md mx-10 my-5">Educação</h3>
                <p className="text-xl my-2">Análise e Desenvolvimento de Sistemas</p>
                <p className="text-xl my-2">Ensino médio Técnico em Eletrônica</p>
            </div>

            <div className="text-center">
                <h3 className="text-center text-4xl font-extrabold border-b-2 border-yellow rounded-b-md mx-10 my-5">Conhecimentos</h3>
                <p className="text-xl my-2">Conceitos básicos sobre Docker e utilização de containers para criação de APis e micro serviços</p>
                <p className="text-xl my-2">Conceitos básicos sobre Kubernetes e gerenciamento de containers </p>
                <p className="text-xl my-2">Criação de Apis utilizando Runtime NodeJS</p>
                <p className="text-xl my-2">Criação de páginas web SPA utilizando REACT (Funcional)</p>
                <p className="text-xl my-2">Criação de páginas web SPA utilizando NEXT JS (Classes)</p>
                <p className="text-xl my-2">Criação de aplicações Mobile com React-Native (Classes)</p>
                <p className="text-xl my-2">Conceitos básicos sobre AWS e Plataformas de Aplicação em Nuvens </p>
                
                <p className="text-xl my-2">Criação de processos CI/CD utilizando Jenkins </p>
                
               
            </div>

            <div>
            <div className="text-center flex-1">
            <h3 className="text-center text-4xl font-extrabold border-b-2 border-yellow rounded-b-md mx-10 my-5">Github</h3>
                <p className="text-center border-yellow border bg-red-400 mx-10 rounded-2xl">Github stats: <RiGitRepositoryLine  className="inline-block" /> {user.public_repos} / <GoGist  className="inline-block"/> {user.public_gist} / <FiUsers  className="inline-block"/> {user.followers} </p>

     
                        {repos.map(repo => {
                        return (
                            <div key={repo.id} className="bg-gray-200 border px-5 my-3 mx-2 rounded-lg rounded-r-sm">
                                <p className="break-all"><a href={'https://github.com/'+ repo.full_name}>{repo.full_name}</a></p>
                                {/* <p className="">Language: {repo.language} / <GoStar className="" /> Stars:{repo.stargazers_count}</p> */}
                                <p className="">Language: {repo.language}</p>
                                <p>Última atualização: {repo.updated_at}</p>
                                <p></p>
                        
                            </div>
                        )
                    })}
         
            </div>
            <div className="flex-2 justify-center text-center py-1 px-1">
                <p className="text-yellow-300 font-semibold">
                    Você pode acessar o reposítorio deste projeto em: 
                </p>
                <p className="text-xs text-align: center"><a className="break-all" href="https://github.com/CrystyanSantos9/crystyan_resume" className="underline text-align: center"> https://github.com/CrystyanSantos9/crystyan_resume</a></p>
            </div>
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