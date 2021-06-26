import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = ({ blog }) => {
    const { img, title, details, _id } = blog;
    return (
        <div>
            <Link className="cardDesign" to={`/allBlog/${_id}`}> 
                
            <div className="col-md-3 p-5">
            <div class="card m-1 " style={{ width: '300px' }} >
                <img src={img} alt="" />

                <div class="card-body">
                    <h5 class="card-title">{title}</h5>

                </div>
            </div>
            
        </div>
    
        </Link>

              


           
        </div >
    );
};

export default Blog;