import { POST_LIST } from './postActionTypes';
import axios from 'axios';

export const updateComponentState = (type, payload) => {
    return {
        type,
        payload
    }
}

export const getPostList = () => dispatch => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    axios.get(url)
    .then(res => {
        dispatch(updateComponentState(POST_LIST, {
            dataLoading:false,
            successfullyloaded:true,
            postList:res.data
        }))
    } ).catch(error => {
        console.log(error)
    })
}