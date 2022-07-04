import { FormControl, FormGroup, Input, InputLabel, Typography,styled, Button } from "@mui/material"
import { useState } from "react"
import { addUser } from "../service/api.js"
import {  useNavigate } from "react-router-dom"
const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto  0 auto;
    &> div {
        margin-top:20px
    }
`
const defaultValue = {
     Title:"",
     Label:"",
     Note:"",
   
}
const AddUser = ()=>{
    const navigate =useNavigate()
    const [user,setUser]= useState(defaultValue)
    const  onValueChange = (e)=>{
      setUser({...user,[e.target.name]:e.target.value})
        
    }
    const addUserDetailes =async()=>{
        console.log(user)
       await addUser(user) 
       navigate('/all')
    }
    return (
        <>
        <Container>
        <Typography variant="h4">Add User</Typography>
            <FormControl>
             
                <InputLabel>
                Title
                </InputLabel>
                <Input   onChange={(e)=>onValueChange(e)} name="Title"/>
                </FormControl>
                <FormControl>
                <InputLabel>
                  Label
                </InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Label"/>
                </FormControl>
                <FormControl>
                <InputLabel>
                  Note
                </InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Note"/>
                </FormControl>
               
               <FormControl>
                   <Button variant="contained" onClick={()=>addUserDetailes()}>Add User</Button>
               </FormControl>
        </Container>
        </>
    )
}

export default AddUser