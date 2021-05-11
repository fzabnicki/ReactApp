import { combineReducers } from 'redux';
import users, { IUsersReducer } from './usersReducers';
import photos, {IPhotoReducer} from './photoreducers';

export default combineReducers({
    users,
    photos,
})

export interface IState{
    users: IUsersReducer;
    photos: IPhotoReducer;
}