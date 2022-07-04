import { Table,TableHead,TableCell, TableBody, TableRow ,styled,Button} from "@mui/material"
import {getUsers,deletUser} from "../service/api.js"
import { Component, useEffect,useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const StyledTable = styled(Table)`
    width:90%;
    margin: 50px auto  0 auto;
    
`
const THead = styled(TableRow)`
    background:#000000;
    & > th {
        color : #ffff;
       font-size:20px;
    }
`
 const TBody = styled(TableRow)`
  &> td {
    font-size:20px;
  }
 `
const AllUsers = ()=>{
    const navigate=useNavigate()
    const [users , setUser] = useState([])
    useEffect(()=>{
        getAllUsers()
    },[])
    const getAllUsers = async()=>{
        let getdata=  await getUsers()
        setUser(getdata.data)
        console.log(getdata.data)
        navigate("/all")
    }
    const  deleteUserrrr=  async (id)=>{
         await deletUser(id)
         getAllUsers()
    }
    return (
        <>
         <StyledTable>
             <TableHead>
            <THead>
                <TableCell>Id</TableCell>
                <TableCell>Tilte</TableCell>
                <TableCell>Lable</TableCell>
                <TableCell>Note</TableCell>
               
                <TableCell></TableCell>
            </THead>
            </TableHead>
            <TableBody>
                {
                    users.map(user =>(
                        <TBody  key={user._id}>
                           
                 <TableCell>{user._id}</TableCell>
                <TableCell>{user.Title}</TableCell>
                <TableCell>{user.Lable}</TableCell>
                <TableCell>{user.Note}</TableCell>
                <TableCell>
                    <Button variant="contained" style={{marginRight:"10px"} } component={Link} to={`/edit/${user._id}`}>Edit</Button>
                    <Button variant="contained" color="secondary" onClick={()=>deleteUserrrr(user._id)}>Delete</Button>
                </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
         </StyledTable>
        </>
    )
}
export default AllUsers