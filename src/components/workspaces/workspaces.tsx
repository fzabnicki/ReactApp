import {FC} from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

const WorkspacesBox = styled.div`
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:4px;
`;

const WorkspacesTopBox = styled.div`
background-color: white;
height: 400px;
border-radius: 4px;;

`;

const WorkspacesBackground = styled.img`
height: 300px;
width: 100%;
border-top-left-radius: 4px ;
border-top-right-radius: 4px ;
`;

const WorkspacesThunbnail = styled.img`
float: left;
padding: 20px;
height: 50px;
`;

const Title = styled.div`
font-size: 20px;
padding: 10px;
`;

const Text = styled.div`
padding: 10px;
font-size: 14px;
color: gray;
`;

const Gear = styled.img`
height: 15px;
width: 15px;
float: right;
padding: 10px;
`;

interface IPassed{
    title: string;
    background: string;
    thumbnail: string;
}

const Workspaces: FC = () => {
    const location = useLocation();
    let passed = {title:"", background:"", thumbnail:""}
    passed = location.state as IPassed;
    console.log(passed);
    return(
        <WorkspacesBox>
            <WorkspacesTopBox>
                    <WorkspacesBackground src={passed.background}/>
                <WorkspacesThunbnail src={passed.thumbnail}/>
                <Gear src="./media/icons/gear.png"/>
                <Title>
                    {passed.title}
                </Title>
                <Text>
                    Workspaces purpouse and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.
                </Text>
            </WorkspacesTopBox>
        </WorkspacesBox>
    )
}
export default Workspaces;