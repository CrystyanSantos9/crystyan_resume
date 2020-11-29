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
        <div className="container mx-auto bg-network">
            <PageHead />
            <Hero />
            


            <div className="bg-white shadow-lg rounded-lg border-orange border-2 pt-16 py-12 px-8 mx-8 md:mx-0 md:px-16">
                <h3 className="text-orange text-4xl font-bold uppercase text-center text-orange">O que eu faço</h3>
                <p className="text-2xl uppercase py-4 border-dashed border-t">Analista de Sistemas</p>
                <p className="text-2xl uppercase py-4 border-dashed border-t">Full Stack Developer</p>
                <p className="text-2xl uppercase py-4 border-dashed border-t">Analista NOC</p>
                <p className="text-2xl uppercase py-4 border-dashed border-t">Técnico em eletrônica</p>
            </div>

            <div>

            <h3 className="text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange">Educação</h3>
            <div className="bg-white mx-6 md:mx-0 md:grid md:grid-cols-2 pt-16 leading-none rounded-lg shadow-lg border-orange border-2">
               
                    <div className="bg-white border-dashed border-t md:border-t-0 md:border-l  px-6 mx-6 md:mx-0 md:px-12 py-6">
                        <h4 className="text-lg uppercase font-bold mb-2">Graduação</h4>
                        <p className=" text-2xl uppercase">Análise e Desenvolvimento de Sistemas</p>
                        <span className=" text-lg normal-case font-bold">Universidade Veiga de Almenida</span>
                    </div>
                    <div className="bg-white border-dashed border-t md:border-t-0 md:border-l  px-6 mx-6 md:mx-0 md:px-12 py-6">
                    <h4 className="text-lg uppercase font-bold mb-2">Ensino Técnico</h4>
                    <p className=" text-2xl uppercase">Técnico em eletrônica</p>
                    <span className=" text-lg normal-case font-bold">Escola Graham Bell</span>
                </div>
             
            </div>
            <div>
                <h3 className="mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10 mb-5 text-orange">Contribuições</h3>
                <p className="text-center">Github stats: <RiGitRepositoryLine  className="inline-block" /> {user.public_repos} / <GoGist  className="inline-block"/> {user.public_gist} / <FiUsers  className="inline-block"/> {user.followers} </p>

                <div className="md:grid md:grid-cols-3 md:gap-2 md:my-6 rounded-lg border-orange border-2">
                        {repos.map(repo => {
                        return (
                            <div key={repo.id} className="my-3 md:my-0 rounded bg-white shadow-lg p-4 hover:shadow-md">
                                <h3 className="font-bold hover:underline"><a href={'https://github.com/'+ repo.full_name}>{repo.full_name}</a></h3>
                                <p className="">Language: {repo.language} / <GoStar className="inline-block" /> Stars:{repo.stargazers_count}</p>
                                <p></p>
                        
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <p className="text-xs md:text-base text-center my-8 py-4 border-t-2">
                    Você pode acessar o reposítorio deste projeto em: 
                    <a href="" className="underline"> https://github.com/CrystyanSantos9/crystyan_resume</a>
                </p>
            </div>
            </div>

            
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