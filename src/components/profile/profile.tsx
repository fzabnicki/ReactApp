import {FC} from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { IState } from "../reducers";
import { IUsersReducer } from '../reducers/usersReducers';
import { IPhotoReducer } from '../reducers/photoreducers';
import { Colors } from "../../styledHelpers/Colors";
import { useState } from "react";

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
float: right;
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
margin-bottom: 15px;
margin-top: 10px;
padding-left: 30px;
font-size: 17px;
`;

const ProposalTitle = styled.div`
font-size: 19px;
padding-bottom: 40px;
`;

const SmallLine = styled.div`
height:2px;
background-color: ${Colors.lightgray};
margin-top: 30px;
margin-bottom: 10px;
margin-right: 30px;
`

const NameRow = styled.div`
float: left;
width: 150px;
`;

const EntityRow = styled.div`
float: left;
width: 150px;
`;

const LocationRow = styled.div`
float: left;
width: 100px;
`;

const ExpertiseRow = styled.div`
float: left;
width: 100px;
`;

const DateRow = styled.div`
float: left;
width: 150px;
`;

const FirmRow = styled.div`
float: left;
width: 150px;
`;

const SingleLine = styled.div`
width: 100%;
height: 35px;
font-size: 14px;
`;






const NameLine1 = styled.div`
float: left;
width: 150px;
`;
const NameLine2 = styled.div`
float: left;
width: 150px;
`;
const NameLine3 = styled.div`
float: left;
width: 150px;
`;
const Entity1 = styled.div`
float: left;
width: 150px;
`;
const Entity2 = styled.div`
float: left;
width: 150px;
`;
const Entity3 = styled.div`
float: left;
width: 150px;
`;
const Location1 = styled.div`
float: left;
width: 100px;
`;
const Location2 = styled.div`
float: left;
width: 100px;
`;
const Location3 = styled.div`
float: left;
width: 100px;
`;
const Expertise1 = styled.div`
float: left;
width: 100px;
`;
const Expertise2 = styled.div`
float: left;
width: 100px;
`;
const Expertise3 = styled.div`
float: left;
width: 100px;
`;
const Date1 = styled.div`
float: left;
width: 150px;
`;
const Date2 = styled.div`
float: left;
width: 150px;
`;
const Date3 = styled.div`
float: left;
width: 150px;
`;
const Firm1 = styled.div`
float: left;
width: 150px;
`;
const Firm2 = styled.div`
float: left;
width: 150px;
`;
const Firm3 = styled.div`
float: left;
width: 150px;
`;

const InternalSection = styled.div`
margin-bottom: 15px;
margin-top: 10px;
padding-left: 30px;
font-size: 17px;
`;

const InternalTitle = styled.div`
font-size: 19px;
padding-bottom: 40px;
`;

const AmmountSection = styled.div`
margin-bottom: 15px;
margin-top: 10px;
padding-left: 30px;
font-size: 17px;
`;

const AmmountTitle = styled.div`
font-size: 19px;
padding-bottom: 20px;
`;

const YearRow = styled.div`
float: left;
width:100px;
`;

const CostRow = styled.div`
float: left;
width:150px;
`;

const AmmountRow = styled.div`
float: left;
width:150px;
`;

const LawRow = styled.div`
float: left;
width:150px;
`;

const Year1 = styled.div`
float: left;
min-width:100px;
`;
const Year2 = styled.div`
float: left;
min-width:100px;
`;
const Year3 = styled.div`
float: left;
min-width:100px;
`;
const Cost1 = styled.div`
float: left;
width:150px;
`;
const Cost2 = styled.div`
float: left;
width:150px;
`;
const Cost3 = styled.div`
float: left;
width:150px;
`;
const Cost4 = styled.div`
float: left;
width:150px;
`;
const Cost5 = styled.div`
float: left;
width:150px;
`;
const Ammount1 = styled.div`
float: left;
width:150px;
`;
const Ammount2 = styled.div`
float: left;
width:150px;
`;
const Ammount3 = styled.div`
float: left;
width:150px;
`;
const Ammount4 = styled.div`
float: left;
width:150px;
`;
const Ammount5 = styled.div`
float: left;
width:150px;
`;
const Law1 = styled.div`
float: left;
width:150px;
`;
const Law2 = styled.div`
float: left;
width:150px;
`;
const Law3 = styled.div`
float: left;
width:150px;
`;
const Law4 = styled.div`
float: left;
width:150px;
`;
const Law5 = styled.div`
float: left;
width:150px;
`;


const Profile: FC = () =>{
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));
    const { photoList } = useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
    }));

    let [editable, showEdition] = useState(false);
    const EnableEditable = () => {
        showEdition((editable) => !editable)
        console.log(editable);
    };
    let [name, setName] = useState(usersList[1]?.name)
    let [company, setCompany] = useState(usersList[1]?.company.name)
    let [city, setCity] = useState(usersList[1]?.address.city)
    let [email, setEmail] = useState(usersList[1]?.email)
    let [phone, setPhone] = useState(usersList[1]?.phone)
    
    let [expertise, setExpertise] = useState('Mergers and acquisition');
    let [specialties, setSpecialties] = useState('Cross border operation');
    let [specialties2, setSpecialties2] = useState('Transaction over 500M€/$');
    let [admission, setAdmission] = useState('Paris bar association');
    let [admission2, setAdmission2] = useState('Tunisian bar association');
    let [counties, setCounties] = useState('Tunisia');

    let [fee, setFee] = useState('610€/hour (Negociated)');
    let [terms, setTerms] = useState('Monthly 10k€ retainer - see with Jeanny Smith');
    let [services, setServices] = useState('Corporate M&A and international acquisitions');

    let [name1, setName1] = useState('Operation Ti...');
    let [name2, setName2] = useState('Op. Prometh...');
    let [name3, setName3] = useState('Op.Latandre');
    let [entity1, setEntity1] = useState('Renault Co ...');
    let [entity2, setEntity2] = useState('Renault HQ');
    let [entity3, setEntity3] = useState('Renault Br ...');
    let [location1, setLocation1] = useState('France');
    let [location2, setLocation2] = useState('USA');
    let [location3, setLocation3] = useState('Italia');
    let [expertise1, setExpertise1] = useState('#Tax');
    let [expertise2, setExpertise2] = useState('#M&A');
    let [expertise3, setExpertise3] = useState('#Social');
    let [date1, setDate1] = useState('2021-05-06');
    let [date2, setDate2] = useState('2021-02-16');
    let [date3, setDate3] = useState('2021-12-23');
    let [firm1, setFirm1] = useState('Racine');
    let [firm2, setFirm2] = useState('Clifford chance');
    let [firm3, setFirm3] = useState('SVZ');

    let [intName1, setIntName1] = useState('Operation Ti...');
    let [intName2, setIntName2] = useState('Op. Prometh...');
    let [intName3, setIntName3] = useState('Op.Latandre');
    let [intEntity1, setIntEntity1] = useState('Renault Co ...');
    let [intEntity2, setIntEntity2] = useState('Renault HQ');
    let [intEntity3, setIntEntity3] = useState('Renault Br ...');
    let [intLocation1, setIntLocation1] = useState('France');
    let [intLocation2, setIntLocation2] = useState('USA');
    let [intLocation3, setIntLocation3] = useState('Italia');
    let [intExpertise1, setIntExpertise1] = useState('#Tax');
    let [intExpertise2, setIntExpertise2] = useState('#M&A');
    let [intExpertise3, setIntExpertise3] = useState('#Social');
    let [intDate1, setIntDate1] = useState('2021-05-06');
    let [intDate2, setIntDate2] = useState('2021-02-16');
    let [intDate3, setIntDate3] = useState('2021-12-23');

    let [year1, setYear1] = useState("2019");
    let [year2, setYear2] = useState("2018");
    let [year3, setYear3] = useState("2017");
    let [cost1, setCost1] = useState("CS 153");
    let [cost2, setCost2] = useState("CS 153");
    let [cost3, setCost3] = useState("CS 47");
    let [cost4, setCost4] = useState("CS 153");
    let [cost5, setCost5] = useState("CS 32");
    let [ammount1, setAmmount1] = useState("3 500€");
    let [ammount2, setAmmount2] = useState("9 500€");
    let [ammount3, setAmmount3] = useState("10 500€");
    let [ammount4, setAmmount4] = useState("18 500€");
    let [ammount5, setAmmount5] = useState("15 500€");
    let [law1, setLaw1] = useState("Clifford chance");
    let [law2, setLaw2] = useState("Linklaters");
    let [law3, setLaw3] = useState("Linklaters");
    let [law4, setLaw4] = useState("Linklaters");
    let [law5, setLaw5] = useState("Linklaters");

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
                {editable === true?(
                    <div>
                        <ProfileName>
                            {name}<br/>
                            {company}<br/>
                            {city}
                        </ProfileName>
                        <EditButton onClick={EnableEditable} >
                            <EditButtonImg src="./media/icons/pencil.png"/>
                        </EditButton>
                        <MailAndPhone>
                            {email}<br/>
                            {phone}
                        </MailAndPhone>
                    </div>
                    ):(
                        <div>
                            <ProfileName>
                            <input type="text" value={name} onChange={e => setName(e.target.value)}/><br/>
                            <input type="text" value={company} onChange={e => setCompany(e.target.value)}/><br/>
                            <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
                        </ProfileName>
                        <EditButton onClick={EnableEditable} >
                            <EditButtonImg src="./media/icons/pencil.png"/>
                        </EditButton>
                        <MailAndPhone>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/><br/>
                            <input type="text" value={phone} onChange={e => setPhone(e.target.value)}/>
                        </MailAndPhone>
                        </div>
                    )}
            </ProfileSection>
            <Line/>
            <SkillsSection>
                {editable === true?(
                    <div>
                            Expertise
                        <ExpertiseSection>
                            <SectionItem>{expertise}</SectionItem>
                        </ExpertiseSection>
                            Specialties
                        <SpecialitiesSection>
                            <SectionItem>{specialties}</SectionItem>
                            <SectionItem>{specialties2}</SectionItem>
                        </SpecialitiesSection>
                            Admission to practice law
                        <AdmissionSection>
                            <SectionItem>{admission}</SectionItem>
                            <SectionItem>{admission2}</SectionItem>
                        </AdmissionSection>
                            Counties
                        <CountiesSection>
                            <SectionItem>{counties}</SectionItem>
                        </CountiesSection>
                    </div>
                ):(
                    <div>
                           Expertise
                        <ExpertiseSection>
                            <SectionItem>
                                <select value={expertise} onChange={e => setExpertise(e.target.value)}>
                                    <option value="Neque porro">Neque porro</option>
                                    <option value="est qui dolorem"> Est qui Dolorem</option>
                                    <option value="Lorem ipsum">Lorem ipsum</option>
                                    <option value="Dolor sit">Dolor sit</option>
                                    <option value="Amet, consectetur">Amet, consectetur</option>
                                    <option value="Adipisci velit">Adipisci velit</option>
                                    <option value="Nulla non">Nulla non</option>
                                    <option value="Suspendisse qu">Suspendisse qu</option>
                                </select>
                            </SectionItem>
                        </ExpertiseSection>
                            Specialties
                        <SpecialitiesSection>
                            <SectionItem>
                            <select value={specialties} onChange={e => setSpecialties(e.target.value)}>
                                    <option value="Neque porro">Neque porro</option>
                                    <option value="est qui dolorem"> Est qui Dolorem</option>
                                    <option value="Lorem ipsum">Lorem ipsum</option>
                                    <option value="Dolor sit">Dolor sit</option>
                                    <option value="Amet, consectetur">Amet, consectetur</option>
                                    <option value="Adipisci velit">Adipisci velit</option>
                                    <option value="Nulla non">Nulla non</option>
                                    <option value="Suspendisse qu">Suspendisse qu</option>
                                </select>
                            </SectionItem>
                            <SectionItem>
                            <select value={specialties2} onChange={e => setSpecialties2(e.target.value)}>
                                    <option value="Neque porro">Neque porro</option>
                                    <option value="est qui dolorem"> Est qui Dolorem</option>
                                    <option value="Lorem ipsum">Lorem ipsum</option>
                                    <option value="Dolor sit">Dolor sit</option>
                                    <option value="Amet, consectetur">Amet, consectetur</option>
                                    <option value="Adipisci velit">Adipisci velit</option>
                                    <option value="Nulla non">Nulla non</option>
                                    <option value="Suspendisse qu">Suspendisse qu</option>
                                </select>
                            </SectionItem>
                        </SpecialitiesSection>
                            Admission to practice law
                        <AdmissionSection>
                            <SectionItem>
                            <select value={admission} onChange={e => setAdmission(e.target.value)}>
                                    <option value="Neque porro">Neque porro</option>
                                    <option value="est qui dolorem"> Est qui Dolorem</option>
                                    <option value="Lorem ipsum">Lorem ipsum</option>
                                    <option value="Dolor sit">Dolor sit</option>
                                    <option value="Amet, consectetur">Amet, consectetur</option>
                                    <option value="Adipisci velit">Adipisci velit</option>
                                    <option value="Nulla non">Nulla non</option>
                                    <option value="Suspendisse qu">Suspendisse qu</option>
                                </select>
                            </SectionItem>
                            <SectionItem>
                            <select value={admission2} onChange={e => setAdmission2(e.target.value)}>
                                    <option value="Neque porro">Neque porro</option>
                                    <option value="est qui dolorem"> Est qui Dolorem</option>
                                    <option value="Lorem ipsum">Lorem ipsum</option>
                                    <option value="Dolor sit">Dolor sit</option>
                                    <option value="Amet, consectetur">Amet, consectetur</option>
                                    <option value="Adipisci velit">Adipisci velit</option>
                                    <option value="Nulla non">Nulla non</option>
                                    <option value="Suspendisse qu">Suspendisse qu</option>
                                </select>
                            </SectionItem>
                        </AdmissionSection>
                            Counties
                        <CountiesSection>
                            <SectionItem>
                            <select value={counties} onChange={e => setCounties(e.target.value)}>
                                    <option value="Neque porro">Neque porro</option>
                                    <option value="Est qui dolorem"> Est qui Dolorem</option>
                                    <option value="Lorem ipsum">Lorem ipsum</option>
                                    <option value="Dolor sit">Dolor sit</option>
                                    <option value="Amet, consectetur">Amet, consectetur</option>
                                    <option value="Adipisci velit">Adipisci velit</option>
                                    <option value="Nulla non">Nulla non</option>
                                    <option value="Suspendisse qu">Suspendisse qu</option>
                                </select>
                            </SectionItem>
                        </CountiesSection>
                    </div>
                )}
            </SkillsSection>
            <Line/>
            <PanelSection>
                {editable === true?(
                    <div>
                        <PanelTitleSection>Panel Informations</PanelTitleSection>
                <HourlyFeeDiv>
                    Hourly fee
                    <PanelSectionItem>
                        {fee}
                    </PanelSectionItem>
                </HourlyFeeDiv>

                <TermsDiv>
                    Terms & conditions
                    <PanelSectionItem>
                        {terms}
                    </PanelSectionItem>
                    <FileInput>
                            <input type="file" style={{width: "600px"}} />
                    </FileInput>
                </TermsDiv>
                <ServicesDiv>
                    Services & Projects
                    <PanelSectionItem>
                        {services}
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
                    </div>
                ):(
                    <div>
                        <PanelTitleSection>Panel Informations</PanelTitleSection>
                <HourlyFeeDiv>
                    Hourly fee
                    <PanelSectionItem>
                        <input type="text" value={fee} onChange={e => setFee(e.target.value)}/>
                    </PanelSectionItem>
                </HourlyFeeDiv>
                <TermsDiv>
                    Terms & conditions
                    <PanelSectionItem>
                        <input type="text" value={terms} onChange={e => setTerms(e.target.value)}/>
                    </PanelSectionItem>
                    <FileInput>
                            <input type="file" style={{width: "600px"}} />
                    </FileInput>
                </TermsDiv>
                <ServicesDiv>
                    Services & Projects
                    <PanelSectionItem>
                        <input type="text" value={services} onChange={e => setServices(e.target.value)}/>
                    </PanelSectionItem>
                </ServicesDiv>
                <InternalDiv>
                    Internal Correspondants
                    <InternalDivElement>
                        <ThumbnailUserPhoto src={photoList[9]?.url}/> {usersList[3].name} <InternalElementText> <MessagePic src="./media/icons/speech-bubble.png"/> Message <ProfilePic src="./media/icons/user.png"/> Profile </InternalElementText>
                    </InternalDivElement>

                    <InternalDivElement>
                        <ThumbnailUserPhoto src={photoList[9]?.url}/> {usersList[5].name} <InternalElementText> <MessagePic src="./media/icons/speech-bubble.png"/> Message <ProfilePic src="./media/icons/user.png"/> Profile </InternalElementText>
                    </InternalDivElement>
                </InternalDiv>
                    </div>
                )}
            </PanelSection>
            <Line/>
                <ProposalsSection>
                    <ProposalTitle>Proposals</ProposalTitle>
                    <NameRow>Name</NameRow>
                    <EntityRow>Entity</EntityRow>
                    <LocationRow>Location</LocationRow>
                    <ExpertiseRow>Expertise</ExpertiseRow>
                    <DateRow>Date</DateRow>
                    <FirmRow>Firm</FirmRow>
                    <SmallLine/>
                    {editable === true?(
                        <div>
                            <SingleLine>
                            <NameLine1>{name1}</NameLine1>
                            <Entity1>{entity1}</Entity1>
                            <Location1>{location1}</Location1>
                            <Expertise1>{expertise1}</Expertise1>
                            <Date1>{date1}</Date1>
                            <Firm1>{firm1}</Firm1>
                        </SingleLine>
                        <SingleLine>
                            <NameLine2>{name2}</NameLine2>
                            <Entity2>{entity2}</Entity2>
                            <Location2>{location2}</Location2>
                            <Expertise2>{expertise2}</Expertise2>
                            <Date2>{date2}</Date2>
                            <Firm2>{firm2}</Firm2>
                        </SingleLine>
                        <SingleLine>
                            <NameLine3>{name3}</NameLine3>
                            <Entity3>{entity3}</Entity3>
                            <Location3>{location3}</Location3>
                            <Expertise3>{expertise3}</Expertise3>
                            <Date3>{date3}</Date3>
                            <Firm3>{firm3}</Firm3>
                        </SingleLine>
                        </div>
                    ):(
                        <div>
                        <SingleLine>
                            <NameLine1><input type="text" value={name1} onChange={e => setName1(e.target.value)} style={{width:"100px"}}/></NameLine1>
                            <Entity1><input type="text" value={entity1} onChange={e => setEntity1(e.target.value)} style={{width:"100px"}}/></Entity1>
                            <Location1><input type="text" value={location1} onChange={e => setLocation1(e.target.value)} style={{width:"75px"}}/></Location1>
                            <Expertise1><input type="text" value={expertise1} onChange={e => setExpertise1(e.target.value)} style={{width:"75px"}}/></Expertise1>
                            <Date1><input type="date" value={date1} onChange={e => setDate1(e.target.value)} style={{width:"125px"}}/></Date1>
                            <Firm1><input type="text" value={firm1} onChange={e => setFirm1(e.target.value)} style={{width:"100px"}}/></Firm1>
                        </SingleLine>
                        <SingleLine>
                            <NameLine2><input type="text" value={name2} onChange={e => setName2(e.target.value)} style={{width:"100px"}}/></NameLine2>
                            <Entity2><input type="text" value={entity2} onChange={e => setEntity2(e.target.value)} style={{width:"100px"}}/></Entity2>
                            <Location2><input type="text" value={location2} onChange={e => setLocation2(e.target.value)} style={{width:"75px"}}/></Location2>
                            <Expertise2><input type="text" value={expertise2} onChange={e => setExpertise2(e.target.value)} style={{width:"75px"}}/></Expertise2>
                            <Date2><input type="date" value={date2} onChange={e => setDate2(e.target.value)} style={{width:"125px"}}/></Date2>
                            <Firm2><input type="text" value={firm2} onChange={e => setFirm2(e.target.value)} style={{width:"100px"}}/></Firm2>
                        </SingleLine>
                        <SingleLine>
                            <NameLine3><input type="text" value={name3} onChange={e => setName3(e.target.value)} style={{width:"100px"}}/></NameLine3>
                            <Entity3><input type="text" value={entity3} onChange={e => setEntity3(e.target.value)} style={{width:"100px"}}/></Entity3>
                            <Location3><input type="text" value={location3} onChange={e => setLocation3(e.target.value)} style={{width:"75px"}}/></Location3>
                            <Expertise3><input type="text" value={expertise3} onChange={e => setExpertise3(e.target.value)} style={{width:"75px"}}/></Expertise3>
                            <Date3><input type="date" value={date3} onChange={e => setDate3(e.target.value)} style={{width:"125px"}}/></Date3>
                            <Firm3><input type="text" value={firm3} onChange={e => setFirm3(e.target.value)} style={{width:"100px"}}/></Firm3>
                        </SingleLine>
                        </div>
                    )}
                </ProposalsSection>
                <Line/>
                <InternalSection>
                    <InternalTitle>Internal reviews</InternalTitle>
                    <NameRow>Name</NameRow>
                    <EntityRow>Entity</EntityRow>
                    <LocationRow>Location</LocationRow>
                    <ExpertiseRow>Expertise</ExpertiseRow>
                    <DateRow>Date</DateRow>
                    <SmallLine/>
                    {editable === true?(
                        <div>
                        <SingleLine>
                            <NameLine1>{intName1}</NameLine1>
                            <Entity1>{intEntity1}</Entity1>
                            <Location1>{intLocation1}</Location1>
                            <Expertise1>{intExpertise1}</Expertise1>
                            <Date1>{intDate1}</Date1>
                        </SingleLine>
                        <SingleLine>
                            <NameLine2>{intName2}</NameLine2>
                            <Entity2>{intEntity2}</Entity2>
                            <Location2>{intLocation2}</Location2>
                            <Expertise2>{intExpertise2}</Expertise2>
                            <Date2>{intDate2}</Date2>
                        </SingleLine>
                        <SingleLine>
                            <NameLine3>{intName3}</NameLine3>
                            <Entity3>{intEntity3}</Entity3>
                            <Location3>{intLocation3}</Location3>
                            <Expertise3>{intExpertise3}</Expertise3>
                            <Date3>{intDate3}</Date3>
                        </SingleLine>
                        </div>
                    ):(
                        <div>
                            <SingleLine>
                            <NameLine1><input type="text" value={intName1} onChange={e => setIntName1(e.target.value)} style={{width:"100px"}}/></NameLine1>
                            <Entity1><input type="text" value={intEntity1} onChange={e => setIntEntity1(e.target.value)} style={{width:"100px"}}/></Entity1>
                            <Location1><input type="text" value={intLocation1} onChange={e => setIntLocation1(e.target.value)} style={{width:"75px"}}/></Location1>
                            <Expertise1><input type="text" value={intExpertise1} onChange={e => setIntExpertise1(e.target.value)} style={{width:"75px"}}/></Expertise1>
                            <Date1><input type="date" value={intDate1} onChange={e => setIntDate1(e.target.value)} style={{width:"125px"}}/></Date1>
                        </SingleLine>
                        <SingleLine>
                            <NameLine2><input type="text" value={intName2} onChange={e => setIntName2(e.target.value)} style={{width:"100px"}}/></NameLine2>
                            <Entity2><input type="text" value={intEntity2} onChange={e => setIntEntity2(e.target.value)} style={{width:"100px"}}/></Entity2>
                            <Location2><input type="text" value={intLocation2} onChange={e => setIntLocation2(e.target.value)} style={{width:"75px"}}/></Location2>
                            <Expertise2><input type="text" value={intExpertise2} onChange={e => setIntExpertise2(e.target.value)} style={{width:"75px"}}/></Expertise2>
                            <Date2><input type="date" value={intDate2} onChange={e => setIntDate2(e.target.value)} style={{width:"125px"}}/></Date2>
                        </SingleLine>
                        <SingleLine>
                            <NameLine3><input type="text" value={intName3} onChange={e => setIntName3(e.target.value)} style={{width:"100px"}}/></NameLine3>
                            <Entity3><input type="text" value={intEntity3} onChange={e => setIntEntity3(e.target.value)} style={{width:"100px"}}/></Entity3>
                            <Location3><input type="text" value={intLocation3} onChange={e => setIntLocation3(e.target.value)} style={{width:"75px"}}/></Location3>
                            <Expertise3><input type="text" value={intExpertise3} onChange={e => setIntExpertise3(e.target.value)} style={{width:"75px"}}/></Expertise3>
                            <Date3><input type="date" value={intDate3} onChange={e => setIntDate3(e.target.value)} style={{width:"125px"}}/></Date3>
                        </SingleLine>
                        </div>
                    )}
                </InternalSection>
                <Line/>
                <AmmountSection>
                    <AmmountTitle>Ammount of fees</AmmountTitle>
                    <YearRow>Year</YearRow>
                    <CostRow>Cost center</CostRow>
                    <AmmountRow>Total amount</AmmountRow>
                    <LawRow>Law firm</LawRow>
                    <SmallLine/>
                    {editable === true?(
                        <div>
                            <SingleLine>
                                <Year1>{year1}</Year1>
                                <Cost1>{cost1}</Cost1>
                                <Ammount1>{ammount1}</Ammount1>
                                <Law1>{law1}</Law1>
                            </SingleLine>
                            <SingleLine>
                                <Year2>{year2}</Year2>
                                <Cost2>{cost2}</Cost2>
                                <Ammount2>{ammount2}</Ammount2>
                                <Law2>{law2}</Law2>
                            </SingleLine>
                            <SingleLine>
                                <Year3>{year3}</Year3>
                                <Cost3>{cost3}</Cost3>
                                <Ammount3>{ammount3}</Ammount3>
                                <Law3>{law3}</Law3>
                            </SingleLine>
                            <SingleLine>
                                <Year1>---</Year1>
                                <Cost4>{cost4}</Cost4>
                                <Ammount4>{ammount4}</Ammount4>
                                <Law4>{law4}</Law4>
                            </SingleLine>
                            <SingleLine>
                                <Year1>---</Year1>
                                <Cost5>{cost5}</Cost5>
                                <Ammount5>{ammount5}</Ammount5>
                                <Law5>{law5}</Law5>
                            </SingleLine>
                        </div>
                    ):(
                        <div>
                            <SingleLine>
                                <Year1><input type="text" value={year1} onChange={e => setYear1(e.target.value)} style={{width:"50px"}}/></Year1>
                                <Cost1><input type="text" value={cost1} onChange={e => setCost1(e.target.value)} style={{width:"100px"}}/></Cost1>
                                <Ammount1><input type="text" value={ammount1} onChange={e => setAmmount1(e.target.value)} style={{width:"100px"}}/></Ammount1>
                                <Law1><input type="text" value={law1} onChange={e => setLaw1(e.target.value)} style={{width:"100px"}}/></Law1>
                            </SingleLine>
                            <SingleLine>
                                <Year2><input type="text" value={year2} onChange={e => setYear2(e.target.value)} style={{width:"50px"}}/></Year2>
                                <Cost2><input type="text" value={cost2} onChange={e => setCost2(e.target.value)} style={{width:"100px"}}/></Cost2>
                                <Ammount2><input type="text" value={ammount2} onChange={e => setAmmount2(e.target.value)} style={{width:"100px"}}/></Ammount2>
                                <Law2><input type="text" value={law2} onChange={e => setLaw2(e.target.value)} style={{width:"100px"}}/></Law2>
                            </SingleLine>
                            <SingleLine>
                                <Year3><input type="text" value={year3} onChange={e => setYear3(e.target.value)} style={{width:"50px"}}/></Year3>
                                <Cost3><input type="text" value={cost3} onChange={e => setCost3(e.target.value)} style={{width:"100px"}}/></Cost3>
                                <Ammount3><input type="text" value={ammount3} onChange={e => setAmmount3(e.target.value)} style={{width:"100px"}}/></Ammount3>
                                <Law3><input type="text" value={law3} onChange={e => setLaw3(e.target.value)} style={{width:"100px"}}/></Law3>
                            </SingleLine>
                            <SingleLine>
                                <Year1>---</Year1>
                                <Cost4><input type="text" value={cost4} onChange={e => setCost4(e.target.value)} style={{width:"100px"}}/></Cost4>
                                <Ammount4><input type="text" value={ammount4} onChange={e => setAmmount4(e.target.value)} style={{width:"100px"}}/></Ammount4>
                                <Law4><input type="text" value={law4} onChange={e => setLaw4(e.target.value)} style={{width:"100px"}}/></Law4>
                            </SingleLine>
                            <SingleLine>
                                <Year1>---</Year1>
                                <Cost5><input type="text" value={cost5} onChange={e => setCost5(e.target.value)} style={{width:"100px"}}/></Cost5>
                                <Ammount5><input type="text" value={ammount5} onChange={e => setAmmount5(e.target.value)} style={{width:"100px"}}/></Ammount5>
                                <Law5><input type="text" value={law5} onChange={e => setLaw5(e.target.value)} style={{width:"100px"}}/></Law5>
                            </SingleLine>
                        </div>
                    )}
                </AmmountSection>
        </ProfileBox>
    )
}
export default Profile;