import {FC} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../reducers";
import { IPhotoReducer } from "../reducers/photoreducers";
import { IPostsReducer } from "../reducers/postsreducers";
import { IUsersReducer } from "../reducers/usersReducers";

const ArticlesSection = styled.div`
width:100%;
margin-top: 20px;
padding: 10px;
`

const MainTitle = styled.div`
font-size:18px;
width: 200px;
float: left;
`
const TopBarDiv = styled.div`
height: 50px;
`;

const FilterInput = styled.div`
float: right;
margin-top: 4px;
margin-right: 30px;
border-radius: 5%;
border-radius:5px;
`

const Followed = styled.div`
margin-right: 20px;
float:right;
`

const FollowedIcon = styled.img`
width:25px;
`

const FollowedText = styled.text`
margin-top: 5px;
vertical-align: super;
margin-left: 5px;
`

const ArticleBox = styled.div`
background-color: white;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:3px;
`;

const ArticleTitle = styled.div`
font-size: 18px;
color: darkblue;
padding: 5px;
padding-left: 10px;
`;

const ArticleContent = styled.div`
font-size: 14px;
color: gray;
padding: 5px;
padding-left: 10px;
`;

const ArticleFooter = styled.div`
padding: 5px;
color: gray;
font-size: 12px;
height: 12px;
`;

const ArticleFooterCompanyThumbnail = styled.img`
width: 10px;
height: 10px;
margin-left: 10px;
margin-right: 8px;
border-radius: 50%;
float: left;
`;

const ArticleFooterThumbnail = styled.img`
width: 10px;
height: 10px;
margin-left: 10px;
margin-right: 8px;
float: left;
`;

const ArticleFooterText = styled.div`
float :left;
`;

const DotDiv = styled.div`
float: left;
padding-left: 10px;
padding-right: 10px;
`;

const Articles: FC = () =>{
    const { postList } = useSelector<IState, IPostsReducer>(globalState => ({
        ...globalState.posts
    }));
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));
    const { photoList } = useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
    }));
return(
        <ArticlesSection>
            <TopBarDiv>
                <MainTitle>
                    Resume Your work
                </MainTitle>
                <Followed><FollowedIcon src={'./media/icons/sensor.png'}/><FollowedText>Followed</FollowedText></Followed>
                <FilterInput>
                    <input type="text" style={{width:"125px", height: "20px", marginTop: "-5px", borderRadius: "5px", borderColor: "gray"}}/>
                    <img src="./media/icons/search.png" style={{marginLeft:" -22px", position: "absolute"}} alt=""></img>
                </FilterInput>
            </TopBarDiv>
            <ArticleBox>
                <ArticleTitle>
                    {postList[1].title.charAt(0).toUpperCase() + postList[1].title.slice(1)}
                </ArticleTitle>
                <ArticleContent>
                    {postList[1].body}
                </ArticleContent>
                <ArticleFooter>
                    <ArticleFooterCompanyThumbnail src={photoList[5].url}/>
                    <ArticleFooterText>
                        Subsid. corp.
                    </ArticleFooterText>
                    <DotDiv>•</DotDiv>
                    <ArticleFooterThumbnail src="./media/icons/entities.png"/>
                    <ArticleFooterText>
                        Corporate
                    </ArticleFooterText>
                    <DotDiv>•</DotDiv>
                    <ArticleFooterText>
                        Updated 3 days ago by {usersList[1].name}
                    </ArticleFooterText>
                </ArticleFooter>
            </ArticleBox>
            
        </ArticlesSection>
    )
}
export default Articles