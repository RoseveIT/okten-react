import {createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars:[]
};


const carSlice = createSlice({
   name:'carSlice',
   initialState,
    reducers:{

    }
})

const {reducer:carReducer, action} = carSlice;

const carAction ={

}

export {
    carReducer,
    carAction
}