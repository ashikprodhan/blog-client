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
      .post('http://localhost:5000/addBlog', newBlog)
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
        <div>
            <h1>add blog</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
     <input type="file"  {...register("img")} onChange={handleImgUpload} />
      <input {...register("title")} />
      <input {...register("details")} />
      
      
     
     
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddBlog;<h1>add blog</h1>