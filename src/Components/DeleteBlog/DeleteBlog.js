import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const DeleteBlog = ({blog,deleteBlog}) => {
    // console.log(blog);


    return (
        <div>
            <h1>delete here</h1>
            {/* <div> <p>{blog.title} name:{blog.title}<button type="button" className="btn btn-success" ><FontAwesomeIcon icon={faEdit} /></button>  <button type="button" className="btn btn-danger" onClick={()=>deleteBlog(`${blog._id}`)} > <FontAwesomeIcon icon={faTrashAlt} />delete</button> </p> </div> */}
        </div>
    );
};

export default DeleteBlog;