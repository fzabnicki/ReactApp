import { ISinglePost } from "../entities/posts";
import * as actionTypes from '../../actions/actionTypes/postTypes';

export interface IPostsReducer{
    postList: ISinglePost[];
}
const defaultState = (): IPostsReducer => ({
    postList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) =>{
    switch(action.type){
        case actionTypes.GET_POSTS:{
            const payload: actionTypes.IPostTypes['GET_POSTS'] = action;
            return{
                ...state,
                postList:payload.postList
            }
        }
        default:{
            return state
        }
    }
}
