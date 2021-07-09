import {Link} from 'react-router-dom'


export default function Navbar(props) {
   // console.log('the props of the NavBar::', props)
   //if the user is logged in
   const loggedIn = (
    <> 
    <Link to="/profile">- Profile👤 --</Link>
    <Link to="/"> <span onClick={props.handleLogout}>- Logout🚪 --</span> </Link>
    </>
   )
   const loggedOut =(
       <>
    <Link to="/login">- Login here 📲 --</Link>
    <Link to="/register">- Create New Account 🆕 </Link>
       </>
   )
    return (
        <nav>
            <Link to="/">Home🏠 -- </Link>
            {props.currentUser ? loggedIn : loggedOut}
            {/* if the user is logged in */}
            {/* <Link to="/profile">- Profile👤 --</Link>
            <Link to="/"> <span onClick={props.handleLogout}>- Logout🚪 --</span> </Link> */}

            {/* if the user is logged out */}
            {/* <Link to="/login">- Login here 📲 --</Link>
            <Link to="/register">- Create New Account 🆕 </Link> */}
        </nav>
    )
}