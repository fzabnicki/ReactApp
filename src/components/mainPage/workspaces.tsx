import {FC} from "react";
import styled from 'styled-components';
import WorkspaceSlider from '../Slider/slider'

const WorkspacesBox = styled.div`
position: relative;
`;

const WorkspacesBoxTitle = styled.div`
padding:20px;
`;

const WorkspacesTitle = styled.text`
font-size: 18px;
`

const WorkspacesItem = styled.div`

`

const Workspaces: FC = () =>{
    return(
        <WorkspacesBox>
            <WorkspacesBoxTitle>
                <WorkspacesTitle>Workspaces</WorkspacesTitle>
            </WorkspacesBoxTitle>
            <WorkspaceSlider></WorkspaceSlider>
        </WorkspacesBox>
    )
}
export default Workspaces;