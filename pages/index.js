import React from 'react'
import getUser from '../utils/getUser'


const Index = ({repos,user}) =>{
    //JSX
    return(
        <div className="container mx-auto">
            <h1 className="text-5xl">Bem-Vindo!</h1>
            <p>Public repos:{user.public_repos} / public_gists:{user.public_gist} / followers: {user.followers} </p>
            <h2 className="font-bold text-3xl">Meus Repositórios no GitHub</h2>
            {repos.map(repo=>{
                return(
                    <div className="rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md"key={repo.id}>
                        <h3>{repo.full_name}</h3>
                        <p>Language: {repo.language} / Stars:{repo.stargazers_count} </p>
                        <p><a href={repo.html_url}>{repo.html_url}</a></p>
                        <p></p>
                    </div>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(context){

    const {repos,user} = await getUser('CrystyanSantos9')

    return{
        props:{
            currentDate: new Date().toString(),
            repos,
            user
        }
    }
    
}

export default Index