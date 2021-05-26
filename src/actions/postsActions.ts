import {Dispatch} from 'redux';
import * as postTypes from '../actions/actionTypes/postTypes';
import {ISinglePost} from '../components/entities/posts';

export const getPosts = (): Promise<ISinglePost[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((postList: ISinglePost[]) => {
        dispatch({
            type: postTypes.GET_POSTS,
            postList
        })
    })
}) as any;