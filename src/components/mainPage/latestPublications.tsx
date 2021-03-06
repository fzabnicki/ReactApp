import {FC} from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { IState } from "../reducers";
import { IPhotoReducer } from "../reducers/photoreducers";
import { IUsersReducer } from "../reducers/usersReducers";

const LatestPublicationsBox = styled.div`
position: relative;
width: 850px;
height: 270px;
padding: 20px;
`

const LatestPublicationsList = styled.div`
background-color: white;
width: 560px;
height: 270px;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-top-right-radius:4px;
border-bottom-right-radius:4px;
margin-left: -1px;
float: left;
`

const PhotoBox = styled.div`
width: 270px;
height: 270px;
border-radius: 5%;
float: left;
`
const PhotoBoxImg = styled.img`
width: 272px;
height: 270px;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-top-left-radius:4px;
border-bottom-left-radius:4px;
float: left;
`

const LatestPubText = styled.text`
font-size: 18px;
`

const PublicationBox = styled.div`
height: 50px;
margin-top: 5px;
margin-bottom: 5px;
width: 100%;
`
const TitleBox = styled.div`
margin-top: 10px;
margin-left:10px;
`
const MiniPhoto = styled.img`
width:50px;
height: 50px;
margin-left: 10px;
float: left;
margin-right: 10px;
`
const PublicationsText = styled.text`
font-size: 16;
`
const PublicationsTextBox = styled.div`
padding:5px;
`
const DateText = styled.text`
font-size: 10px;
float: left;
`
const Writer = styled.text`
font-size: 10px;
float: left;
margin-left: 3px;
`

const WriterPhoto = styled.img`
width: 10px;
float: left;
margin-left: 20px;
height: 10px;
border-radius: 50%;
` 

const LatestPublications: FC = () =>{
    const { photoList } = useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
    }));
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));
    const Current = usersList[Math.floor(Math.random() * usersList.length)]?.id;
    return(
        <LatestPublicationsBox>
            <PhotoBox>
                <PhotoBoxImg src={photoList[Math.floor(Math.random() * photoList.length)]?.url}/>
            </PhotoBox>
            <LatestPublicationsList>
                <TitleBox>
                    <LatestPubText>Latest Publications</LatestPubText>
                </TitleBox>


                <PublicationBox>
                    <MiniPhoto src={photoList[Current]?.url} />
                    <PublicationsTextBox>
                        <PublicationsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </PublicationsText>
                    </PublicationsTextBox>
                        <DateText>7 jan, 2020</DateText>
                        <WriterPhoto src={photoList[Current]?.url}/>
                        <Writer>{usersList[Current]?.name}</Writer>
                </PublicationBox>


                <PublicationBox>
                    <MiniPhoto src={photoList[Current]?.url} />
                    <PublicationsTextBox>
                        <PublicationsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </PublicationsText>
                    </PublicationsTextBox>
                        <DateText>7 jan, 2020</DateText>
                        <WriterPhoto src={photoList[Current]?.url}/>
                        <Writer>{usersList[Current]?.name}</Writer>
                </PublicationBox>


                <PublicationBox>
                    <MiniPhoto src={photoList[Current]?.url} />
                    <PublicationsTextBox>
                        <PublicationsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </PublicationsText>
                    </PublicationsTextBox>
                        <DateText>7 jan, 2020</DateText>
                        <WriterPhoto src={photoList[Current]?.url}/>
                        <Writer>{usersList[Current]?.name}</Writer>
                </PublicationBox>

                <PublicationBox>
                    <MiniPhoto src={photoList[Current]?.url} />
                    <PublicationsTextBox>
                        <PublicationsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </PublicationsText>
                    </PublicationsTextBox>
                        <DateText>7 jan, 2020</DateText>
                        <WriterPhoto src={photoList[Current]?.url}/>
                        <Writer>{usersList[Current]?.name}</Writer>
                </PublicationBox>
            </LatestPublicationsList>
        </LatestPublicationsBox>
    )
}
export default LatestPublications