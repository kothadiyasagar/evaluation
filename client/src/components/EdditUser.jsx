import { FormControl, FormGroup, Input, InputLabel, Typography,styled, Button } from "@mui/material"
import { useState , useEffect } from "react"
import { editUser, getUser } from "../service/api.js"
import {  useNavigate,useParams } from "react-router-dom"
const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto  0 auto;
    &> div {
        margin-top:20px
    }
`
const defaultValue = {
    name:"",
    username:"",
    email:"",
    phone:"",
}
const EdditUser = ()=>{
    const {id}= useParams()
    const navigate =useNavigate()
    useEffect(()=>{
        loadUserDetails()
    },[])
    const [user,setUser]= useState(defaultValue)
    const  loadUserDetails= async()=>{
        const response = await getUser(id)
        setUser(response.data)
         console.log("sagar",user.name)
    }
    const  onValueChange = (e)=>{
        
      setUser({...user,[e.target.name]:e.target.value})
        
    }
    const editUserDetailes =async()=>{
        console.log(user)
       await editUser(user,id) 
      navigate('/all')
    }
    return (
        <>
        <Container>
        <Typography variant="h4">Edit User</Typography>
            <FormControl>
             
                <InputLabel>
                 Title
                </InputLabel>
                <Input  onChange={(e)=>onValueChange(e)}  value={user.name} name="Title"   />
                </FormControl>
                <FormControl>
                <InputLabel>
                 Lable
                </InputLabel>
                <Input onChange={(e)=>onValueChange(e)} value={user.username} name="Lable" />
                </FormControl>
                <FormControl>
                <InputLabel>
                Note
                </InputLabel>
                <Input onChange={(e)=>onValueChange(e)} value={user.email} name="Note"  />
                </FormControl>
            
               <FormControl>
                   <Button variant="contained" onClick={()=>editUserDetailes()}>Edit User</Button>
               </FormControl>
        </Container>
        </>
    )
}

export default EdditUser