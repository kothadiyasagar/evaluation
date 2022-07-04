import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";
import { FormControl, FormGroup, Input, InputLabel, Typography,styled, Button } from "@mui/material"


const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto  0 auto;
    &> div {
        margin-top:20px
    }
`

const Loginpage = () => {
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
        fetch("http://localhost:8080/auth/login", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : 'POST',
            body : payload
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res._id)
            if(res.token){
                localStorage.setItem("userid", JSON.stringify(res._id))
                navigate("/all")
            }
            else{
                console.log(res.message)
            }
        })
        .catch((err) => console.log(err))
    }
    // return <div>
    //     <h1>Login page</h1> 
    //     <div>
    //         <div>
    //             <label>UserName</label>
    //         <input type="text" name="username" onChange={handleChange}/>
    //         </div>
    //         <div>
    //          <label>Password</label>
    //         <input type="text" name="password" onChange={handleChange}/>
    //         </div>
            
    //         <button type="submit" onClick={handleSubmit}>Login</button>
    //     </div>
    // </div>

    return (
        <>
         <Container>
        <Typography variant="h4">Login</Typography>
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
                   <Button  type="submit"  variant="contained" onClick={handleSubmit}>Login</Button>
               </FormControl>
        </Container>
        </>
    )
}

export {Loginpage}