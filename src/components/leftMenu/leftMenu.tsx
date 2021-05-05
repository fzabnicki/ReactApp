import  { FC } from 'React';
import styled from 'styled-components';
import {
    Link
}from "react-router-dom";
import { useSelector } from 'react-redux';
import { IState } from '../reducers'
import { IUsersReducer } from '../reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';

const LeftPanel = styled.div`
    height: 500px;
    width: 250px;
    background-color:${Colors.lightgray};
    display: inline-block;
`;

const Box = styled.div`
width: 200px;
height: 175px;
margin-left:20px;
margin-top:20px;
background-color: ${Colors.white};
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
padding-top:15px;
border-radius:5px;
`;

const ProfilePicture = styled.div`
display: block;
margin: auto;
padding-top: 10px;
text-align: center;
`;

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

const ProfilePic = styled.img`
border-radius: 50%;
width: 50px;
height: 50px;
`;

ProfilePic.defaultProps={
    src:'../media/samplePhoto.jpg',
};


const LeftMenu: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));
    return(
        <LeftPanel>
            
            <Box>
                <ProfilePicture>
                    <Link to="/profile"><ProfilePic/></Link>
                </ProfilePicture>
                <ProfileName>
                    {console.log(usersList)}
                    Userlist:{usersList[0]?.name}
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