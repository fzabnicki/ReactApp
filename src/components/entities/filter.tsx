import {FC} from 'react';
import styled from 'styled-components';

const FilterDiv = styled.div`
width: 600px;
height: 200px;
position: absolute;
background-color: white;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:5px;
padding: 10px;
`;

const FilterTopText = styled.div`
color: lightgrey;
font-size: 14px;
margin-bottom: 10px;
`;

const SectionRow = styled.div`
height: 45px;
`;

const BottomSectionRow = styled.div`
color: blue;
`;

const XImg = styled.img.attrs({
    src: `./media/icons/cross-sign.png`
    })`
width: 15px;
margin-left: 10px;
margin-right:5px;
float: left;
`;

const AddImg = styled.img`

`;

const DropdownImg = styled.img.attrs({
    src: `./media/icons/sort-down.png`
    })`
width: 10px;
margin-right: 20px;
`;

const ConditionSection = styled.div`
float: left;
margin-right: 20px;
`;

const TextInput = styled.input`
width: 100px;
background-color: lightgray;
border-color: lightgray;
border-radius: 3px;
margin-right:10px;
`;

const SectionText = styled.div`
float: left;
`;

export const Filter : FC = () =>{
    return(
        <FilterDiv>
            <FilterTopText>Rows are filtered by the following conditions starting from the top.</FilterTopText>

            <SectionRow>
                <ConditionSection>
                <XImg/>
                <SectionText>
                    Where
                </SectionText>
                </ConditionSection>
                <SectionText>Company <DropdownImg/> Contains <DropdownImg/><TextInput placeholder={'Type...'}/></SectionText>
            </SectionRow>

            <SectionRow>
                <ConditionSection>
                <XImg/> Where
                </ConditionSection>
                Status <DropdownImg/> Is <DropdownImg/><TextInput placeholder={'Type...'}/> In <DropdownImg/><TextInput placeholder={'Entity...'}/>
            </SectionRow>

            <SectionRow>
                <ConditionSection>
                <XImg/> And
                </ConditionSection>
                Status <DropdownImg/> Ends Before <DropdownImg/><TextInput placeholder={'Date...'}/> In <DropdownImg/><TextInput placeholder={'Entity...'}/>
            </SectionRow>

            <BottomSectionRow>
                <ConditionSection>
                <XImg/> Add filter
                </ConditionSection>
                choose property <DropdownImg/>
            </BottomSectionRow>
        </FilterDiv>
    )
}