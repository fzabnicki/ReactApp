import {FC} from "react";
import styled from 'styled-components';

const LatestPublicationsBox = styled.div`
position: relative;
width: 1200px;
height: 220px;
`

const LatestPublicationsList = styled.div`
background-color: white;
width: 400px;
height: 220px;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:4px;
margin-left: -1px;
float: left;
`

const PhotoBox = styled.div`
background-color: green;
width: 220px;
height: 220px;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:4px;
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

MiniPhoto.defaultProps={
    src:'../media/signingsample.jpg',
};

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

const LatestPublications: FC = () =>{
    return(
        <LatestPublicationsBox>
            <PhotoBox/>
            <LatestPublicationsList>
                <TitleBox>
                    <LatestPubText>Latest Publications</LatestPubText>
                </TitleBox>
                <PublicationBox>
                    <MiniPhoto/>
                    <PublicationsTextBox>
                        <PublicationsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </PublicationsText>
                    </PublicationsTextBox>
                        <DateText>7 jan, 2020</DateText>
                </PublicationBox>


                <PublicationBox>
                    <MiniPhoto/>
                    <PublicationsTextBox>
                        <PublicationsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </PublicationsText>
                    </PublicationsTextBox>
                        <DateText>7 jan, 2020</DateText>
                </PublicationBox>


                <PublicationBox>
                    <MiniPhoto/>
                    <PublicationsTextBox>
                        <PublicationsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </PublicationsText>
                    </PublicationsTextBox>
                        <DateText>7 jan, 2020</DateText>
                </PublicationBox>
            </LatestPublicationsList>
        </LatestPublicationsBox>
    )
}
export default LatestPublications