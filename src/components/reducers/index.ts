import { combineReducers } from 'redux';
import users, { IUsersReducer } from './usersReducers';
import photos, {IPhotoReducer} from './photoreducers';
import posts, { IPostsReducer } from './postsreducers';

export default combineReducers({
    users,
    photos,
    posts
})

export interface IState{
    users: IUsersReducer;
    photos: IPhotoReducer;
    posts: IPostsReducer;
}