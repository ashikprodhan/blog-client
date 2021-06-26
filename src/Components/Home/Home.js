import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    Link
  } from "react-router-dom";
// const allBlog =[
//     {
//         id:1,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sptdUZBc6GBauO_aSbIGu0OdhljkhDtXfw&usqp=CAU',
//         title:'Title one ',
//         details:' fljljfjdfjfjsjdffjlfjlsjfjf '
//     },
//     {
//         id:2,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sptdUZBc6GBauO_aSbIGu0OdhljkhDtXfw&usqp=CAU',
//         title:'Title two ',
//         details:' fljljfjdfjfjsjdffjlfjlsjfjf '
//     },
//     {
//         id:3,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sptdUZBc6GBauO_aSbIGu0OdhljkhDtXfw&usqp=CAU',
//         title:'Title three ',
//         details:' fljljfjdfjfjsjdffjlfjlsjfjf '
//     },
    
// ]

const Home = () => {

    const [blog, setBlog] = useState([])

    const renderBlog = blog.map(blog => {
         const {img,title, details,_id} =blog;
        return (
            <div key={_id} >
                <Link to={`/allBlog/${_id}`} className="card">
                <h3>{title}</h3>
                <h1>{title}</h1>
                </Link>


            </div>
        )
    })
    // console.log(blog);
    useEffect(()=> {
        fetch('http://localhost:5000/allBlog')
        .then(res => res.json())
        .then(data =>setBlog(data))
       
    },[])
    return (
        <div>
            <h1>Home</h1>
            {renderBlog}
        </div>
    );
};

export default Home;