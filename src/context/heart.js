import { CreateSlice, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : []

}

const heartSlice = createSlice({
    name:"heart",
    initialState,
    reducers:{
        addTooHeart: (state, action)=>{
            let index = state .value.findIndex(i => i.id === action.payload.id)
            if(index< 0 ){
                state.value = [...state.value, action.payload]
            }
        },
        removeFromHeart: (state,action)=>{
            state.value = state.value.filter(i => i.id  !== action.payload.id)
        },
    }
})

export const { addTooHeart,removeFromHeart} = heartSlice.actions
export default heartSlice.reducer