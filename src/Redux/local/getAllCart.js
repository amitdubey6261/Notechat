import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import { apiConfig, backendUrl, handleApiError } from "../../static";
import { toast } from "react-toastify";

const initialState = {
    status : false , 
    res : [] , 
    error : null , 
}

export const getAllFromCart = createAsyncThunk( 'Cart/all' , async( fields , {rejectWithValue})=>{
    try{
        const res = axios.get( `${backendUrl()}/api/v1/cart/getAll/${fields.uid}` , {...apiConfig()} );
        return res ; 
    }
    catch(e){
        toast.error( e.message );
        return handleApiError( e , rejectWithValue ) ; 
    }
})

export const getAllFromCartReducer = createReducer( initialState , {
    [getAllFromCart.pending] : ( state , action )=>{
        state.status = false ; 
    }
    ,
    [getAllFromCart.fulfilled] : ( state , action )=>{
        state.status = true ; 
        state.res = action.payload ; 
    }
    ,
    [getAllFromCart.rejected] : ( state , action )=>{
        state.status = false ; 
        state.res = action.payload ; 
    }
})