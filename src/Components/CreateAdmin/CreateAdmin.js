import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const CreateAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    const onSubmit = data => {
        const adminEmail={admin:data.email};
        console.log(adminEmail);

        // const url = `https://frozen-gorge-52195.herokuapp.com/addAdmin`;
        // console.log(adminEmail)

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(adminEmail)
        // })
        //     .then(res => console.log('server side response', res))

        axios
        .post('https://frozen-gorge-52195.herokuapp.com/addAdmin', adminEmail)
        .then(() => console.log('Admin Created'))
        .catch(err => {
          console.error(err);
        })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
     
      <label htmlFor="">Add email</label> <input {...register("email")} />
     
      
      <input type="submit" />
    </form>
        </div>
    );
};
export default CreateAdmin;