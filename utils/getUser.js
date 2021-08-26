import moment from "moment"
moment.locale('pt-br');  


const  getUser = async(username)=>{
    const resUser = await fetch('https://api.github.com/users/'+username)
    //const userx = await resUser
   // console.log(userx.status === 403)

    const user = await resUser.json()



    const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    const origianalrepos = await resRepos.json()
 
  

    const isNotFork = repo => !repo.fork
    const dontShowRepos = ['CrystyanSantos9/next10-handson','CrystyanSantos9/convert_money']
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) ===-1
    const extractData = repo => ({
        id:repo.id,
        full_name:repo.full_name,
        language:repo.language,
        updated_at: moment(repo.updated_at).format('LL'),
    })
    const repos = origianalrepos
                    .filter(isNotFork)
                    .filter(dontShowFilter)
                    .map(extractData)


    return{
       repos, user
    }
}

export default getUser