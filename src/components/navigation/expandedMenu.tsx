import React, { FC, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import {fontSize} from '../../styledHelpers/FontSizes';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { IState } from '../reducers';
import { IUsersReducer } from '../reducers/usersReducers';
import { IPhotoReducer } from '../reducers/photoreducers';


const ExpandedMenuWraper = styled.div`
background-color: ${Colors.white};
border: 1px solid darkgrey;
position: absolute;
`;

const SectionsWraper = styled.div`
`;

const MenuItem = styled.div`
user-select: none;
margin-left:5px;
&:hover{
    background-color: gray;
}
`;

const Line = styled.div`
    height: 0.5px;
    width: auto;
    background-color: gray;
    display:flex;
`;

const CategoryName = styled.div`
text-align: center;
margin-top: 10px;
margin-bottom: 10px;
color: #909090;
font-size: ${fontSize[14]};
`;

const Logout = styled.div`
text-align: center;
margin-top: 10px;
margin-bottom: 4px;
color: #909090;
`;

const SearchInputBox = styled.div`
width: auto;
margin-right: 10px;
margin-top: 5px;
margin-left: 5px;
`;

const ProfileDiv = styled.div`

`;

const ProfilePic = styled.img`
border-radius: 50%;
width: 25px;
height: 25px;
float: left;
margin-right: 8px;
`;
const ProfileName = styled.div`
font-size: 16px;
`;
const ProfileLinkText=styled.div`
color: darkblue;
font-size: 14px;
`;

export const ExpandedMenu: FC = () =>{

    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text)
    }
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));
    const { photoList } = useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
    }));
    return(
        <ExpandedMenuWraper>
            <SectionsWraper>
                <SearchInputBox>
                <input style={{width:"160px"}} type="text" value = {inputText} onChange={inputHandler} placeholder="Search..."/>
                </SearchInputBox>
                
                <CategoryName>Platrorm</CategoryName>

                <MenuItem>
                {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='/mainpage' style={{textDecoration: 'none', color: Colors.black}} >
                            <img src="../media/icons/house2.png" alt=""/> Home
                    </Link>}
                </MenuItem>

                <MenuItem>
                {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='/publications' style={{textDecoration: 'none', color: Colors.black}} >
                        <img src="../media/icons/publications.png" alt=""/> Publications
                    </Link>}
                </MenuItem>

                <MenuItem>
                {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='/notimplemented' style={{textDecoration: 'none', color: Colors.black}} >
                        <img src="../media/icons/people.png" alt=""/> People
                    </Link>}
                </MenuItem>

                <MenuItem>
                {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='/entities' style={{textDecoration: 'none', color: Colors.black}} >
                        <img src="../media/icons/entities.png" alt=""/> Entities
                    </Link>}
                </MenuItem>

                <MenuItem>
                {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='/notimplemented' style={{textDecoration: 'none', color: Colors.black}} >
                        <img src="../media/icons/administration.png" alt=""/> Administration
                    </Link>}
                </MenuItem>

                <CategoryName>Workspaces</CategoryName>

                <MenuItem>
                {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to={{ pathname: "/workspaces",
                    state: {
                        title: "Client Contract",
                        thumbnail: "../media/icons/house2.png",
                        background:"../media/signingsample.jpg"
                    }
                    }} style={{textDecoration: 'none', color: Colors.black}}>
                        <img src="../media/icons/house2.png" alt=""/> Client contract
                    </Link>}
                </MenuItem>

                <MenuItem>
                {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to={{ pathname: "/workspaces",
                    state: {
                        title: "Supplier Contract",
                        thumbnail: "../media/icons/publications.png",
                        background:"../media/icons/suppliers.jpg"
                    }
                    }} style={{textDecoration: 'none', color: Colors.black}}>
                        <img src="../media/icons/publications.png" alt=""/> Supplier contract
                    </Link>}
                </MenuItem>

                <MenuItem>
                {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to={{ pathname: "/workspaces",
                    state: {
                        title: "Corporate Contract",
                        thumbnail: "../media/icons/entities.png",
                        background:"../media/icons/corporate.jpg"
                    }
                    }} style={{textDecoration: 'none', color: Colors.black}}>
                        <img src="../media/icons/people.png" alt=""/> Corporate
                    </Link>}
                </MenuItem>

                <MenuItem>
                {'Group Norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='/notimplemented' style={{textDecoration: 'none', color: Colors.black}} >
                        <img src="../media/icons/entities.png" alt=""/> Group Norms
                    </Link>}
                </MenuItem>

                <MenuItem>
                {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                    <Link to='/notimplemented' style={{textDecoration: 'none', color: Colors.black}} >
                        <img src="../media/icons/administration.png" alt=""/> Real estate contracts
                    </Link>}
                </MenuItem>

                <Line />
                <CategoryName>Account</CategoryName>
                <MenuItem>
                <ProfileDiv>
                            <ProfilePic src={photoList[1]?.url}/>
                            <ProfileName>{usersList[1]?.name}</ProfileName>
                        <Link to='/profile' style={{textDecoration: 'none'}}>
                            <ProfileLinkText>See Profile</ProfileLinkText>
                        </Link>
                    </ProfileDiv>
                </MenuItem>

                <MenuItem>
                    <Link to="/privacy" style={{textDecoration: 'none', color: Colors.black}}>
                        <img src="./media/icons/privacy.png" alt=""/>
                        Privacy
                        </Link>
                </MenuItem>

                <MenuItem>
                    <Link to="/settings" style={{textDecoration: 'none', color: Colors.black}}>
                        <img src="./media/icons/settings.png" alt=""/>
                        Settings
                    </Link>
                </MenuItem>

                <Line />
                <Logout>
                    <img src="./Media/icons/logout.png" alt=""/>
                </Logout>
            </SectionsWraper>
        </ExpandedMenuWraper>
    )
}