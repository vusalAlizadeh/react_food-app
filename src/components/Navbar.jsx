import React,{useState} from 'react'
import Sidebar from './Sidebar';
import { faHome,faList,faCog } from '@fortawesome/free-solid-svg-icons';
import { Link,useLocation } from 'react-router-dom';
const Navbar = () => {

   const [showSidebar,setShowSidebar]=useState(false);
   let location = useLocation();


   const closeSidebar=()=>{
       setShowSidebar(false)
   }
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]
  return (
    <>
     <div className='navbar'>
        <div className='navbar-logo'>
            <h1>F<span>oo</span>diesHub</h1>
        </div>
        <div className='navbar-links'>
            {links.map(link=>(
                <Link to={link.path} className={location.pathname === link.path ? 'nav-link active':'nav-link'} key={link.name}>{link.name}</Link>
            ))}
        </div>
        <div className={showSidebar ? 'sidebar-btn active':'sidebar-btn '} onClick={()=>setShowSidebar(!showSidebar)}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </div>
    {showSidebar && <Sidebar links={links} closeSidebar={closeSidebar}/>}
    </>
  )
}
export default Navbar;