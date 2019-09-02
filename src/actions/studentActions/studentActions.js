import {ADD_STUDENT,DElETE_STUDENT, UPDATE_STUDENT} from './studentActionTypes';
export const addStudent=(student)=>{
    return{
        type:ADD_STUDENT,
        payload:student
    }
}

export const deletestudent=(Id)=>{
    return{
        type:DElETE_STUDENT,
        payload:Id
    }
}
export const updatestudent=(student)=>{
    return{
        type:UPDATE_STUDENT,
        payload:student
    }
}
