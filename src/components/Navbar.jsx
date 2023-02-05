import {Link} from 'react-router-dom'
import styled, { keyframes } from "styled-components";
import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';




export default function Navbar(props) {
   // console.log('the props of the NavBar::', props)
   //if the user is logged in
   const loggedIn = (
    <>
        <Link to="/profile">- <Avatar src="/broken-image.jpg" sx={{ width: 40, height: 40 }}/></Link>
        <Link to="/"> <LogoutIconDiv onClick={props.handleLogout}><LogoutIcon color="#4C5474" sx={{ fontSize: 40 }}/></LogoutIconDiv> </Link>
    </>
   )
   const loggedOut =(
    <>
        <Link to="/login"><SignIn> Sign In </SignIn></Link>
        <Link to="/register">Create New Account</Link>
    </>
   )
    return (
        <Stack>
            <Link to="/">
                <HomeIconDiv>

                    <HomeIcon sx={{ fontSize: 40 }}/>
                
                </HomeIconDiv>
            </Link>

            <CenterNav>
                <div>
                    
                </div>
                <div></div>
            </CenterNav>

            <LoginWrap>

            {props.currentUser ? loggedIn : loggedOut}
            </LoginWrap>
                {/* if the user is logged in */}
                {/* <Link to="/profile">- Profile👤 --</Link>
                <Link to="/"> <span onClick={props.handleLogout}>- Logout🚪 --</span> </Link> */}

                {/* if the user is logged out */}
                {/* <Link to="/login">- Login here 📲 --</Link>
                <Link to="/register">- Create New Account 🆕 </Link> */}
        </Stack>
    )
}
// const cloud = keyframes`
//     0% {
//         background-position: 0 50%;
//     }
//     50% {
//         background-position: 100% 50%;
//     }
//     100% {
//         background-position: 0 50%;
//     }
// `
// display: flex;
// flex-direction: row;
// justifyContent: space-between;
const Stack = styled.nav`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    background: linear-gradient(
        to right,
        #121D36,
        #1C2445,
        #121D36,
        #121D36
  );
  background-size: 400% 400%;
  `
//   animation: ${cloud} 10s infinite ease-in-out;

const SignIn = styled.nav`
    font-size: 15px;
    width: 20px;
    height: 20px;
    color: #4C5474;
    `
const LoginWrap=styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`
const LogoutIconDiv=styled.nav`

    margin: 15px 5px 0px 10px;    
`
const HomeIconDiv=styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 10px 0px 0px 10px

`
const CenterNav=styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`