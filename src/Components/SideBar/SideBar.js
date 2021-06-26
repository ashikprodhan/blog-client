import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)
    console.log(isAdmin,'from admin');
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
        
    },[])

    return (
        <div className="sidebar">
          { isAdmin && <div>
                <Link to="/admin" className="active" >Dashboard</Link>
                <Link to="/manageblog"> Manage Blog</Link>
                <Link to="/allOrder" >All Order</Link>
                <Link to="/addBlog" >Add Blog</Link>
                <Link to="/addAdmin" >Create admin</Link>
                
              
            </div>}

           
            <Link to="/addReview" >Review</Link>
            <Link to="/orderList" >Order List</Link>
            <Link to="/order" >Order now</Link>
            <Link to="/" >Home</Link>
           
               
        </div>
    );
};

export default SideBar;