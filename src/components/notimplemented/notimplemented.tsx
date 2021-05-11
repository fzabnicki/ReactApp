import {FC} from "react";
import styled from 'styled-components';

const ErrorBox = styled.div`
float: left;
font-size: 50px;
color: gray;
`;

const NotImplemented: FC = () =>{
    return(
        <ErrorBox>
            ERROR: Page not found
        </ErrorBox>
    )
}
export default NotImplemented;