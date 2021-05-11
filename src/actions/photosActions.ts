import {Dispatch} from 'redux';
import * as photoTypes from '../actions/actionTypes/photoTypes';
import {ISinglePhoto} from '../components/entities/photos';

export const getPhotos = (): Promise<ISinglePhoto[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then((photoList: ISinglePhoto[]) => {
        dispatch({
            type: photoTypes.GET_PHOTOS,
            photoList
        })
    })
}) as any;