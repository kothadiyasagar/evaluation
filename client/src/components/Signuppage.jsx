import React, { useEffect, useState } from "react"
import { FormControl, FormGroup, Input, InputLabel, Typography,styled, Button } from "@mui/material"
import {useNavigate} from "react-router-dom";

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto  0 auto;
    &> div {
        margin-top:20px
    }`

const Signuppage = () => {
    const [user, setUser] = useState({})

    const navigate = useNavigate();
    const handleChange = (e) => {
        let {name, value} = e.target
        setUser( {
            ...user,
            [name] : value
        })
    }

    const handleSubmit = () => {
        let payload = JSON.stringify(user)
        fetch("http://localhost:8080/auth/signup", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : 'POST',
            body : payload
        })
        .then((res) => res.json())
        .then((res) => navigate("/login"))
        .catch((err) => console.log(err))
    }
    return (
        <>
          <Container>
        <Typography variant="h4">Signup</Typography>
            <FormControl>
             
                <InputLabel>
                Name
                </InputLabel>
                <Input   onChange={handleChange} type="text" name="name"/>
                </FormControl>
                <FormControl>
             
             <InputLabel>
             UserName
             </InputLabel>
             <Input   onChange={handleChange} type="text" name="username"/>
             </FormControl>
                <FormControl>
                <InputLabel>
                Password
                </InputLabel>
                <Input onChange={handleChange} type="text" name="password"/>
                </FormControl>
                <FormControl>
             
             <InputLabel>
             Email
             </InputLabel>
             <Input   onChange={handleChange} type="text" name="email"/>
             </FormControl>
               
               <FormControl>
                   <Button  type="submit"  variant="contained" onClick={handleSubmit}>Login</Button>
               </FormControl>
        </Container>
        </>
    )
    
}

export {Signuppage}