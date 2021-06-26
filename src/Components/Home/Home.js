import React, { useState } from 'react';
import { useEffect } from 'react';

const allBlog =[
    {
        id:1,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sptdUZBc6GBauO_aSbIGu0OdhljkhDtXfw&usqp=CAU',
        title:'Title one ',
        details:' fljljfjdfjfjsjdffjlfjlsjfjf '
    },
    {
        id:2,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sptdUZBc6GBauO_aSbIGu0OdhljkhDtXfw&usqp=CAU',
        title:'Title two ',
        details:' fljljfjdfjfjsjdffjlfjlsjfjf '
    },
    {
        id:3,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sptdUZBc6GBauO_aSbIGu0OdhljkhDtXfw&usqp=CAU',
        title:'Title three ',
        details:' fljljfjdfjfjsjdffjlfjlsjfjf '
    },
    
]
const Home = () => {

    const [blog, setBlog] = useState([])

    const renderBlog = blog.map(blog => {
         const {img,title, details} =blog;
        return (
            <div key={blog.id} >
                <div>{title}</div>
            </div>
        )
    })
    // console.log(blog);
    useEffect(()=> {
        setBlog(allBlog);
    },[])
    return (
        <div>
            <h1>Home</h1>
            {renderBlog}
        </div>
    );
};

export default Home;