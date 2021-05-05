import {FC} from "React";
import styled from 'styled-components';


const YourPublicationsBox = styled.div`
float: left;
`;

const YourPublications: FC = () =>{
    return(
        <YourPublicationsBox>
            YourPublications
        </YourPublicationsBox>
    )
}
export default YourPublications;