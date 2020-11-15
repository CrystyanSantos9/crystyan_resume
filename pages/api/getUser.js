import getUser from '../../utils/getUser'

const apiGetUser = async({req,res})=>{
    const data = await getUser('CrystyanSantos9')

    res.send(data)
}

export default apiGetUser