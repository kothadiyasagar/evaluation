import {AppBar,Toolbar,styled} from "@mui/material"
import { NavLink } from "react-router-dom"
import { Loginpage } from "./Loginpage"
import { Signuppage } from "./Signuppage"

 const Header = styled(AppBar)`
   background:#111111  
 `
 const Tabs = styled(NavLink)`
    font-size:20px ;
    margin-right:20px;
    color:inherit;
    text-decoration:none
 `
const NavBar = ()=>{
    return(
        <>
         <Header position="static">
             <Toolbar>
              <Tabs to="/">Home page</Tabs>
              <Tabs to="/signup">signup</Tabs>
              <Tabs to="/login">login</Tabs>
               <Tabs to="/all"> note page to  Users</Tabs>
              <Tabs to="/add">Add note User</Tabs> 
            
             </Toolbar>
         </Header>
        </>
    )
}

export default NavBar