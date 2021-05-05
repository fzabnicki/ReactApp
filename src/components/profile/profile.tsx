import {FC} from "React";
import styled from 'styled-components';

const ProfileBox = styled.div`
float: left;
`;

const Profile: FC = () =>{
    return(
        <ProfileBox>
            Profile
        </ProfileBox>
    )
}
export default Profile;