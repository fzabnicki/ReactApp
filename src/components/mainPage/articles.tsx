import {FC} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../reducers";
import { IPhotoReducer } from "../reducers/photoreducers";
import { IPostsReducer } from "../reducers/postsreducers";
import { IUsersReducer } from "../reducers/usersReducers";
import { SingleArticle } from "../mainPage/singleArticle";

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
height: 40px;
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
            {postList.map((post) =>(
                <SingleArticle key={post.id} title={post.title} body={post.body} url={photoList[post.id]?.url} username={usersList[post.userID]?.name} />
            ))}
        </ArticlesSection> 
    )
}
export default Articles