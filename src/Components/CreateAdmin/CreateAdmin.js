import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const CreateAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    const onSubmit = data => {
        const adminEmail={admin:data.email};
        console.log(adminEmail);

        // const url = `http://localhost:5000/addAdmin`;
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
        .post('http://localhost:5000/addAdmin', adminEmail)
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