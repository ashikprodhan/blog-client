import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBlog = () => {
    const [photo, setPhoto] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newBlog= {
            img:photo,
            title :data.title,
            description :data.details
        }
        axios
      .post('https://frozen-gorge-52195.herokuapp.com/addBlog', newBlog)
      .then(() => console.log('Blog Created'))
      .catch(err => {
        console.error(err);
      });
    
    };


    const handleImgUpload = e =>{
         console.log(e.target.files[0]);
         console.log("somethidgnn");
        const imgData = new FormData();
        imgData.set('key','db78350f6ebd70e767f7750fb1ac2fd3');
        imgData.append('image',e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
        imgData)
          .then(function (response) {
            setPhoto(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return (
        <div className="add-blog container" >
            <h1>add blog</h1>
            <div className="row">
            <form onSubmit={handleSubmit(onSubmit)}>
     <div className="col"><label  htmlFor="">add image</label>  <input  className="form-control" type="file"  {...register("img")} onChange={handleImgUpload} /></div>
    <div className="col"> <label className="col-form-label" htmlFor="">Title</label>  <input  className="form-control " {...register("title")} /></div>
   <br />
   {/* <label className="col" htmlFor="">Details</label> <input  className="col-form-label"{...register("details")} /> */}
      <br />
      
     <textarea className="form-control" name="" id="" cols="30" rows="10"  {...register("details")}></textarea>
     
      <input type="submit" />
      
    </form>
            </div>
    
        </div>
    );
};

export default AddBlog;<h1>add blog</h1>