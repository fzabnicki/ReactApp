import  { FC } from 'react';
import styled from 'styled-components';
import { Link }from "react-router-dom";
import { useSelector } from 'react-redux';
import { IState } from '../reducers'
import { IUsersReducer } from '../reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';
import { IPhotoReducer } from '../reducers/photoreducers';

const LeftPanel = styled.div`
    width: 250px;
    background-color:${Colors.lightgray};
    display:inline-block;
    margin-left:5%;
    margin-right:5%;
    vertical-align: top;
`;

const Box = styled.div`
width: 200px;
height: 175px;
margin-left:20px;
margin-top:20px;
background-color: ${Colors.white};
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:5px;
padding-top:15px;
`;

const ProfilePictureDiv = styled.div`
display: block;
margin: auto;
padding-top: 10px;
text-align: center;
`;

const ProfilePicture = styled.img`
border-radius: 50%;
width: 50px;
height: 50px;
`

const ProfileName = styled.div`
text-align: center;
`;
const YourNetwork = styled.div`
padding-top: 10px;
text-align: center;
`;

const YourPublications = styled.div`
padding-top: 10px;
text-align: center;
`;

const Line = styled.div`
height:3px;
background-color: ${Colors.lightgray};
margin-top: 10px;
`
const Publications = styled.div`
height: 35px;
padding-left: 20px;
padding-top: 20px;
`;

const EcoSystem = styled.div`
height: 35px;
padding-left: 20px;
`;

const Entities = styled.div`
height: 35px;
padding-left: 20px;
`;

const LeftMenu: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));
    const { photoList } = useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
    }));
    return(
        <LeftPanel>
            <Box>
                <ProfilePictureDiv>
                        <Link to="/profile"><ProfilePicture src={photoList[1]?.url}/></Link>
                </ProfilePictureDiv>
                <ProfileName>
                    {usersList[0]?.name}
                </ProfileName>
                <Line></Line>
                <YourNetwork>
                    <img src="./media/icons/network.png" alt=""/>
                    <Link to='/yournetwork' style={{textDecoration: 'none', color: Colors.black}} >Your Network</Link>
                </YourNetwork>
                <YourPublications>
                    <img src="./media/icons/publications.png" alt=""/>
                    <Link to='/yourpublications' style={{textDecoration: 'none', color: Colors.black}}>Your Publications</Link>
                </YourPublications>
            </Box>
            <Publications>
                <img src="./media/icons/publications.png" alt=""/>
                <Link to='/publications' style={{textDecoration: 'none', color: Colors.black}}>Publications</Link>
            </Publications>
            <EcoSystem>
                <img src="./media/icons/ecosystem.png" alt=""/>
                <Link to='/ecosystem' style={{textDecoration: 'none', color: Colors.black}}>Ecosystem</Link>
            </EcoSystem>
            <Entities>
                <img src="./media/icons/entities.png" alt=""/>
                <Link to='/entities' style={{textDecoration: 'none', color: Colors.black}}>Entities</Link>
            </Entities>
        </LeftPanel>
    )
}
export default LeftMenu;