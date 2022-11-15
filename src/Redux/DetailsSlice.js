import {createSlice} from "@reduxjs/toolkit"
import data from "../data.json"


const initialState = {
 userData:data
}

const DetailsSlice =   createSlice({
    name:"details",
    initialState,
    reducers:{
        ADD_DATA:(state,action)=>{
           state.userData.push(action.payload)
        }
    }
})

export const {ADD_DATA} = DetailsSlice.actions

export default DetailsSlice.reducer