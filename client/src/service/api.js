import axios from 'axios'
const URL ="http://localhost:8080"
export const addUser = async(data)=>{
    try {
        console.log(await axios.post(`${URL}/add`,data))
    return await axios.post(`${URL}/add`,data)
    } catch (error){
        console.log("error add user",error)
    }
}

export  const getUsers = async()=>{
    try {
      return  await axios.get(`${URL}/all`)
    } catch (error){
        console.log("get data",error)
    }
     
}
 export const getUser = async (id)=>{
     try {
         return await axios.get(`${URL}/${id}`)  
     } catch (error){
          console.log("get getuser ",error)
     }
 }

 export const  editUser = async(user,id)=>{
     try{
            return await axios.put(`${URL}/${id}`,user)
     }catch(error){
         console.log("upeded user data", error)
     }
 }
 export const deletUser = async(id)=>{
       try {
           return await  axios.delete(`${URL}/${id}`)
       }catch(error){
         console.log(" delete data", error)
     }
 }