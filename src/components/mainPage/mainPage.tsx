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

type GetUsers = ReturnType<typeof getUsers>

const Content = styled.div`
width: auto;
height: auto;
padding: 20px;
display: inline-block;
position: absolute;
`

const MainPage: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(getUsers());
    },);
    return (
        <Router>
            <Wrapper>
                <NavigationBar/>
                <LeftMenu />
                <Content>
                    <Switch>
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
                    </Switch>
                </Content>
            </Wrapper>
        </Router>
    )
}
export default MainPage;