import {FC} from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
background-color: darkgray;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:4px;
margin-top: 20px;
padding: 20px;
`;

const UpperSection = styled.div`
width: 100%;
float: left;
`;

const TitleText = styled.div`
float: left;
`;

const HideText = styled.div`
float: right;
`;

const InfoElement = styled.div`
background-color: white;
padding: 10px;
margin: 10px;
width: 235px;
float: left;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:4px;
min-height: 150px;
`;

const DownInfoSection = styled.div`
height: 200px;
`;

const InfoElementThumbnail = styled.img`
height: 40px;
padding-top: 10px;
padding-bottom: 10px;
`;

const InfoElementTitle = styled.div`
font-size: 18px;
padding-bottom: 15px;
`;

const InfoElementContext = styled.div`
font-size: 14px;
`;


const WorkSpaceInfo : FC = () =>{
    return(
        <InfoBox>
            <UpperSection>
                <TitleText>Start working on corporate matters</TitleText>
                <HideText>Hide</HideText>
            </UpperSection>
            {
            //1st
            }
            <DownInfoSection>
                <InfoElement>
                    <InfoElementThumbnail src="./media/icons/entities.png"/>
                    <InfoElementTitle>
                        Expolore your entities
                    </InfoElementTitle>
                    <InfoElementContext>
                    Take a few minutes to look at the most important elements and specificities of your entities.

                    </InfoElementContext>
                </InfoElement>  
                {
                    //2nd
                }
                <InfoElement>
                    <InfoElementThumbnail src="./media/icons/structure.png"/>
                    <InfoElementTitle>
                        Structure the ownership
                    </InfoElementTitle>
                    <InfoElementContext>
                        Get a clear view of the ownershipby looking at the relations between individuals and entities.
                    </InfoElementContext>
                </InfoElement>
                {
                    //3rd
                }
                <InfoElement>
                    <InfoElementThumbnail src="./media/icons/calendar.png"/>
                    <InfoElementTitle>
                        Define the calendar
                    </InfoElementTitle>
                    <InfoElementContext>
                        Prepare future events by creating detailed plans around the like of your entity. 
                    </InfoElementContext>
                </InfoElement>
            </DownInfoSection>
        </InfoBox>
    )
}

export default WorkSpaceInfo;