import { DOCTOR_FAILURE, DOCTOR_REQUEST, GET_DOCTOR_SUCCESS } from "./actionType"
import axios from "axios"

export const getDoctor=(paramObj)=>(dispatch)=>{
    dispatch({type:DOCTOR_REQUEST})
    axios.get('http://localhost:8080/doctors',paramObj)
    .then((response)=>{

     //console.log(response.data)
     dispatch({type:GET_DOCTOR_SUCCESS,payload:response.data})   
    })
    .catch((error)=>{
        console.log(error)
        dispatch({type:DOCTOR_FAILURE})
    })

