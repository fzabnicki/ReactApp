import {FC} from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { IState } from "../reducers";
import { IUsersReducer } from '../reducers/usersReducers';
import { IPhotoReducer } from '../reducers/photoreducers';
import { Colors } from "../../styledHelpers/Colors";

const ProfileBox = styled.div`
width: 850px;
float: left;
background-color: white;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:5px;
`;


const Line = styled.div`
height:3px;
background-color: ${Colors.lightgray};
margin-top: 10px;
`

const ProfileSection = styled.div`
height:130px;
`;

const TopIconsBar = styled.div`
padding: 10px;
text-align: right;
width: 850px;
`;

const ProfilePhotoDiv = styled.div`
width: 100px;
padding-left: 30px;
float: left;
color: skyblue;
`;

const ProfileName = styled.div`
float: left;
font-size: 18px;
line-height: 25px;
`;

const EditButton = styled.div`
float: right;
padding-right: 15px;
`;


const MailAndPhone = styled.div`
padding-top: 60px;
`;

const SkillsSection = styled.div`
color: gray;
margin-top: 15px;
padding-left: 30px;
`;


const ExpertiseSection = styled.div`
margin-top: 10px;
margin-bottom: 25px;
`;

const SpecialitiesSection = styled.div`
margin-top: 10px;
margin-bottom: 25px;
`;

const AdmissionSection = styled.div`
margin-top: 10px;
margin-bottom: 25px;
`;

const CountiesSection = styled.div`
margin-top: 10px;
margin-bottom: 25px;
`;

const EditButtonImg = styled.img`
width: 15px;
height: 15px;
float:right;
`;

const MessageIcon = styled.img.attrs({
    src: `./media/icons/speech-bubble.png`
})`
width: 15px;
height: 15px;
padding-right: 5px;
padding-left: 20px;
`;

const RequestImg = styled.img.attrs({
src: `./media/icons/document.png`
})`
width: 15px;
height: 15px;
padding-right: 5px;
padding-left: 20px;
`;

const AddImg = styled.img.attrs({
src: `./media/icons/suitcase.png`
})`
width: 15px;
height: 15px;
padding-right: 5px;
padding-left: 20px;
`;

const XImg = styled.img.attrs({
src: `./media/icons/cross-sign.png`
})`
width: 15px;
height: 15px;
padding-right: 25px;
padding-left: 20px;
`;

const ProfilePicture = styled.img`
border-radius: 50%;
width: 75px;
height: 75px;
`;

const SectionItem = styled.div`
background-color: skyblue;
color: midnightblue; 
padding: 4px;
border-radius: 5%;
border-radius: 3px;
display: inline-block;
margin-right: 15px;
`;

const PanelSection = styled.div`
padding-left: 30px;
`;

const PanelTitleSection = styled.div`
font-size: 19px;
margin-bottom: 15px;
margin-top: 10px;
`;

const PanelSectionItem = styled.div`
color: black;
margin-top: 10px;
margin-bottom: 12px;
font-size: 15px;
`;

const TermsDiv = styled.div`
color: gray;
`;

const HourlyFeeDiv = styled.div`
color: gray;
`;

const FileInput = styled.div`
background-color: lightgrey;
margin-right: 15px;
border-radius: 5%;
border-radius: 3px;
margin-top: -5px;
padding: 4px;
`;

const ServicesDiv = styled.div`
font-size: 17px;
margin-top: 15px;
`;

const InternalDiv = styled.div`

`;

const ThumbnailUserPhoto = styled.img`
border-radius: 50%;
width: 25px;
height: 25px;
`;

const InternalDivElement = styled.div`
background-color: lightgrey;
margin-right: 15px;
border-radius: 5%;
border-radius: 3px;
margin-top: 5px;
padding: 4px;
`;

const InternalElementText = styled.div`
display: inline-block;
`;

const MessagePic = styled.img`
width: 20px;
height: 20px;
display: inline-block;
margin-left: 100px;
`;

const ProfilePic = styled.img`
width: 20px;
height: 20px;
margin-left: 60px;
`;
const ProposalsSection = styled.div`

`;

const Profile: FC = () =>{
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));
    const { photoList } = useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
    }));
    return(
        <ProfileBox>
            <ProfileSection>
                <TopIconsBar>
                    <MessageIcon/>Message <RequestImg/> Create a request <AddImg/> Add to a cluster <XImg/>
                </TopIconsBar>
                <ProfilePhotoDiv>
                    <ProfilePicture src={photoList[1]?.url}/>
                    See profile
                </ProfilePhotoDiv>
                <ProfileName>
                    {usersList[1]?.name}<br/>{ usersList[1]?.company.name}<br/>{usersList[1]?.address.city}
                </ProfileName>
                <EditButton>
                    <EditButtonImg src="./media/icons/pencil.png"/>
                <MailAndPhone>
                    {usersList[1]?.email}<br/>{usersList[1]?.phone}
                </MailAndPhone>
                </EditButton>
            </ProfileSection>
            <Line/>
            <SkillsSection>
                <EditButton>
                    <EditButtonImg src="./media/icons/pencil.png"/>
                </EditButton>
                    Expertise
                <ExpertiseSection>
                    <SectionItem>Mergers and acquisition</SectionItem>
                </ExpertiseSection>

                    Specialties
                <SpecialitiesSection>
                    <SectionItem>Cross border operation</SectionItem>
                    <SectionItem>Transaction over 500M€/$</SectionItem>
                </SpecialitiesSection>

                    Admission to practice law
                <AdmissionSection>
                    <SectionItem>Paris bar association</SectionItem>
                    <SectionItem>Tunisian bar association</SectionItem>
                </AdmissionSection>

                    Counties
                <CountiesSection>
                    <SectionItem>Tunisia</SectionItem>
                </CountiesSection>
            </SkillsSection>
            <Line/>
            <PanelSection>
                <PanelTitleSection>Panel Informations</PanelTitleSection>
                <HourlyFeeDiv>
                    Hourly fee
                    <PanelSectionItem>
                        610€/hour (Negociated)
                    </PanelSectionItem>
                </HourlyFeeDiv>

                <TermsDiv>
                    Terms & conditions
                    <PanelSectionItem>
                        Monthly 10k€ retainer - see with Jeanny Smith
                    </PanelSectionItem>
                    <FileInput>
                            <input type="file" style={{width: "600px"}} />
                    </FileInput>
                </TermsDiv>
                <ServicesDiv>
                    Services & Projects
                    <PanelSectionItem>
                        Corporate M&A and international acquisitions
                    </PanelSectionItem>
                </ServicesDiv>

                <InternalDiv>
                    Internal Correspondants
                    <InternalDivElement>
                        <ThumbnailUserPhoto src={photoList[9]?.url}/> Firstname Lastname <InternalElementText> <MessagePic src="./media/icons/speech-bubble.png"/> Message <ProfilePic src="./media/icons/user.png"/> Profile </InternalElementText>
                    </InternalDivElement>

                    <InternalDivElement>
                        <ThumbnailUserPhoto src={photoList[9]?.url}/> Firstname Lastname <InternalElementText> <MessagePic src="./media/icons/speech-bubble.png"/> Message <ProfilePic src="./media/icons/user.png"/> Profile </InternalElementText>
                    </InternalDivElement>
                </InternalDiv>
            </PanelSection>
            <Line/>
                <ProposalsSection>
                    Proposals
                </ProposalsSection>
        </ProfileBox>
    )
}
export default Profile;