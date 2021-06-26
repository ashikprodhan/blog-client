import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const BlogDetails = () => {
    const { _id } = useParams();
    const [bDetails, setBDetails] = useState({})
    console.log(bDetails);
    const {img,title, description}= bDetails;
    useEffect(()=>{
    fetch(`https://frozen-gorge-52195.herokuapp.com/allBlog/${_id}`)
    .then(res => res.json())
    .then(data => setBDetails(data) )
    // axios
    // .post(`https://frozen-gorge-52195.herokuapp.com/allBlog/${_id}`)
    // .then(res => res.json())
    // .then(data => console.log(data) )
    // .catch(err => {
    //   console.error(err);
    // })
    },[_id])

    return (
        <div>
           <h1>{title}</h1>
           <img src={img} alt="" />
           <p className="fw-bolder" >{description}</p>
        </div>
    );
};

export default BlogDetails;