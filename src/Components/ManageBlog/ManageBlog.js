import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import DeleteBlog from '../DeleteBlog/DeleteBlog';

const ManageBlog = () => {
    const [blog, setBlog] = useState([])
    // const [_id]=blog;
    // console.log(blog);
    // console.log(_id);
    useEffect(() => {
        fetch('https://frozen-gorge-52195.herokuapp.com/allBlog')
            .then(res => res.json())
            .then(data => setBlog(data))

    }, [])

    const deleteBlog = (id) => {
        fetch(`https://frozen-gorge-52195.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            // Do some stuff...
          })
          .catch(err => console.log(err));
    }

     const renderBlogList= blog.map( blog =>{

       return (<div key={blog._id} > <p>{blog.title} name:{blog.title}<button type="button" className="btn btn-success" ><FontAwesomeIcon icon={faEdit} /></button>  <button type="button" className="btn btn-danger" onClick={()=>deleteBlog(`${blog._id}`)} > <FontAwesomeIcon icon={faTrashAlt} />delete</button> </p> </div>) 
     })

    return (
        <div>
            <h1>total blog {blog.length} </h1>
            {/* {
                blog.map(blog => <DeleteBlog  key={blog._id} deleteBlog={deleteBlog} blog={blog} ></DeleteBlog>)
            } */}
          <div>
              {renderBlogList}
          </div>

        </div>
    );
};

export default ManageBlog;