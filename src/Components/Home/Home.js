import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import Blog from '../Blog/Blog';
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
        const { img, title, details, _id } = blog;
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4 rounded-3"  >
                <div className="col">
                    <div class="card m-1 " style={{ width: '300px' }} >
                        <img src={img} alt="" />

                        <div class="card-body">
                            <h5 class="card-title">Medical Support</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <Link to="/donate" class="btn btn-primary">see Now</Link >
                        </div>
                    </div>
                </div>
                {/* <Link to={`/allBlog/${_id}`} className="card">
                <h3>{title}</h3>
                <h1>{title}</h1>
                </Link> */}


            </div>
        )
    })
    // console.log(blog);
    useEffect(() => {
        fetch('https://frozen-gorge-52195.herokuapp.com/allBlog')
            .then(res => res.json())
            .then(data => setBlog(data))

    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 rounded-3">
            {
                blog.map( blog => <Blog key={blog._id}  blog={blog}  ></Blog> )
             }
        </div>
    );
};

export default Home;