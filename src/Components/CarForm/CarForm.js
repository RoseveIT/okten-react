import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();
    const submit = (data)=>{
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)} >
                <div><label>Model:<input type={"text"} {...register('model')}/></label></div>
                <div><label>Price:<input type={"text"} {...register('price', {valueAsNumber:true} )}/></label></div>
                <div><label>Year:<input type={"text"} {...register('year', {valueAsNumber:true})}/></label></div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export {CarForm};