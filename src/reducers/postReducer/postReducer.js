import {POST_LIST} from '../../actions/postActions/postActionTypes';

const initialState = {
    dataLoading:false,
    successfullyloaded:false,
    postList:[]
}

const postReducer = (state=initialState, action) => {

    switch(action.type){
        case POST_LIST:
            return {...state, ...action.payload}
        default:
            return state
    }

}
export default postReducer;