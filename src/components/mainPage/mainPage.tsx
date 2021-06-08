import React, {FC, useEffect} from 'react';
import styled from 'styled-components';
import NavigationBar from '../navigation/navigationBar';
import LeftMenu from '../leftMenu/leftMenu';
import Profile from '../profile/profile'
import Entities from '../entities/entities'
import Ecosystem from '../ecosystem/ecosystem'
import Publications from '../publications/publications'
import YourNetwork from '../yourNetwork/yourNetwork'
import YourPublications from '../yourPublications/yourPublications'
import NotImplemented from '../notimplemented/notimplemented'
import { Wrapper } from '../../styledHelpers/Components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/usersActions';
import { getPhotos } from '../../actions/photosActions';
import { getPosts } from '../../actions/postsActions';
import LatestPublications from './latestPublications';
import Slider from '../Slider/slider';
import Articles from './articles';
import WorkSpaces from '../workspaces/workspaces';
import WorkSpaceInfo from '../workspaces/workspacesInfo';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPosts = ReturnType<typeof getPosts>

const Content = styled.div`
width: 870px;
padding: 20px;
display: inline-block;
`

const MainPage: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetPosts>(getPosts());
    },);
    return (
        <Router>
            <Wrapper>
                <NavigationBar/>
                <LeftMenu />
                <Content>
                    <Switch>
                        <Route path="/mainpage">
                            <LatestPublications/>
                            <Slider/>
                            <Articles/>
                        </Route>
                        <Route path="/profile">
                            <Profile/>
                        </Route>
                        <Route path="/entities">
                            <Entities/>
                        </Route>
                        <Route path="/publications">
                            <Publications/>
                        </Route>
                        <Route path="/yourpublications">
                            <YourPublications/>
                        </Route>
                        <Route path="/ecosystem">
                            <Ecosystem/>
                        </Route>
                        <Route path="/yourNetwork">
                            <YourNetwork/>
                        </Route>
                        <Route path="/notimplemented">
                            <NotImplemented/>
                        </Route>
                        <Route path="/workspaces">
                            <WorkSpaces/>
                            <WorkSpaceInfo/>
                            <Articles/>
                        </Route>
                    </Switch>
                </Content>
            </Wrapper>
        </Router>
    )
}
export default MainPage;