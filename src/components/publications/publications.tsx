import {FC} from "React";
import styled from 'styled-components';


const PublicationsBox = styled.div`
float: left;
`;

const Publications: FC = () =>{
    return(
        <PublicationsBox>
            Publications
        </PublicationsBox>
    )
}
export default Publications;