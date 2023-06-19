import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: JSON.parse(localStorage.getItem("uzum-heart")) || []
}

const heartSlice = createSlice({
    name: "heart",
    initialState,
    reducers:{
        addToHeart: (state, action)=>{
            let index = state.value.findIndex(i => i.id === action.payload.id)
            if(index < 0){
                state.value = [...state.value, action.payload]
                localStorage.setItem("uzum-heart", JSON.stringify(state.value))
            }
        },
        removeFromHeart: (state, action)=>{
            state.value = state.value.filter(i => i.id !== action.payload.id)
            localStorage.setItem("uzum-heart", JSON.stringify(state.value))

        }
    }
})

export const { addToHeart, removeFromHeart } = heartSlice.actions
export default heartSlice.reducer;