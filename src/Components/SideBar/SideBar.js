import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    

    useEffect(() => {
        fetch('https://frozen-gorge-52195.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data =>setIsAdmin(data))
        
    },[])

    return (
        <div className="sidebar">
          { isAdmin && <div>
                <Link to="/admin" className="active" >Dashboard</Link>
                <Link to="/manageblog"> Manage Blog</Link>
                
                <Link to="/addBlog" >Add Blog</Link>
                <Link to="/createAdmin" >Create admin</Link>
                
              
            </div>}

           
            {
                !isAdmin &&  <div>
                    <h1>You are not admin</h1>
                </div>
            }
           
               
        </div>
    );
};

export default SideBar;