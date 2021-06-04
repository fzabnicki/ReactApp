import { FC, useState} from "react";
import styled from 'styled-components';

const EntitiesComponent = styled.div`
background-color: white;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:5px;
`;

const EntitiesUpperTopBar = styled.div`
height: 50px;
`;

const EntitiesTitle = styled.div`
float: left;
padding-top:15px;
padding-left:15px;
font-size: 20px;
`;

const Gear = styled.img`
height: 15px;
width: 15px;
float: left;
padding: 15px;
`;

const EntitiesTopBar = styled.div`
height: 50px;
padding:15px;
font-size: 14px;
`;

const EntitiesLayout = styled.div`
float: right;
padding: 15px;
`;

const AllButton = styled.div`
float: left;
border-radius: 5px;
background-color: lightblue;
padding:5px;
`;

const AllButtonImg = styled.img`
width:15px;
height: 15px;
float: left;
margin-right:5px;
`;

const AllButtonSortDownImg = styled.img`
height: 10px;
width:10px;
margin-left:5px;

`;

const DotsButton = styled.div`
float: left;
padding: 5px;
`;

const Divider = styled.div`
padding: 5px;
float: left;
`;

const DividerRight = styled.div`
padding: 5px;
float: right;
`;

const SortButton = styled.div`
padding: 5px;
float: left;
`;

const FiltersButton = styled.div`
padding: 5px;
float: left;
`;

const FullscreenButton = styled.img`
width: 15px;
height:15px;
float: left;
padding: 5px;
`;

const ShareButton = styled.img`
width: 15px;
height:15px;
float: left;
margin-left: 5px;
margin-right: 10px;
`;

const ShareButtonDiv = styled.div`
padding:5px;
float: left;
`;

const SearchInputDiv = styled.div`
padding: 5px;
float: right;
`;
const SearchInputField = styled.input`
float:right;
width:120px;
`;

const FollowDiv = styled.div`
float: right;
padding: 5px;
border: 1px solid lightblue;
border-radius: 5px;
`;

const FollowImg = styled.img`
float: left;
width: 15px;
height:15px;
margin-right: 5px;
`;

const PuzzleSection = styled.div`

`;

const SinglePuzzleDiv = styled.div`

`;

const PuzzleImg = styled.div`

`;

const PuzzleTitle = styled.div`

`;

const PuzzleFooter = styled.div`

`;

const Entities: FC = (props) =>{
    const copy = () =>{
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert("Skopiowano adres strony.")
    }
    var [fullscreen, setFullScreen] = useState(false);
    const MakeFullScreen = () =>{
        setFullScreen((prev) => !prev)
    }
    return(
        <EntitiesComponent style=   {{  width:`${fullscreen ? '100%': 'auto'}`,
                                        height:`${fullscreen ? '100%': 'auto'}`,
                                        left:`${fullscreen ? '0': 'auto'}`,
                                        top:`${fullscreen ? '0': 'auto' }`,
                                        position:`${fullscreen ? 'absolute' : '' }` as 'fixed'
                                    }}> 
            <EntitiesUpperTopBar>
                <EntitiesTitle>Entities</EntitiesTitle>
                <Gear src="./media/icons/gear.png"/>
                <EntitiesLayout>Mosaic</EntitiesLayout>
            </EntitiesUpperTopBar>
            <EntitiesTopBar>
                <AllButton>
                    <AllButtonImg src="./media/icons/button.png"/> All
                    <AllButtonSortDownImg src="./media/icons/sort-down.png"/>
                </AllButton>
                <DotsButton>•••</DotsButton>
                <Divider>|</Divider>
                <SortButton>Sort</SortButton>
                <FiltersButton>Filters</FiltersButton>
                <Divider>|</Divider>
                <FullscreenButton onClick={MakeFullScreen} src="./media/icons/fullscreen.png" />
                <Divider>|</Divider>
                <ShareButtonDiv onClick={copy}>
                    <ShareButton src="./media/icons/share.png"/>Share
                </ShareButtonDiv>
                <FollowDiv>
                    <FollowImg src="./media/icons/sensor.png"/>Followed
                    <AllButtonSortDownImg src="./media/icons/sort-down.png"/>
                </FollowDiv>
                <DividerRight>|</DividerRight>
                <SearchInputDiv>
                    <SearchInputField type="text" placeholder="Search..."/>
                </SearchInputDiv>
            </EntitiesTopBar>
            <PuzzleSection>

            </PuzzleSection>
        </EntitiesComponent>
    )
}
export default Entities;