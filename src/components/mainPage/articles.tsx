import {FC} from "react";
import styled from "styled-components";

const ArticlesSection = styled.div`
width:100%;
height: 1000px;
padding: 10px;
background-color: darkgray;
`
const MainTitle = styled.div`
font-size:18px;
width: 200px;
position: absolute;
`

const FilterInput = styled.div`
float: right;
margin-top: 4px;
margin-right: 30px;
border-radius: 5%;
border-radius:5px;
`

const Followed = styled.div`
float:right;
margin-right: 100px;
`
const FollowedIcon = styled.img`
width:25px;
`
const FollowedText = styled.text`
position: absolute;
margin-top: 5px;
margin-left: 5px;
`


const Articles: FC = () =>{
return(
        <ArticlesSection>
            <MainTitle>
                Resume Your work
            </MainTitle>
            <Followed><FollowedIcon src={'./media/icons/sensor.png'}/><FollowedText>Followed</FollowedText></Followed>
            <FilterInput>
                <input type="text" style={{width:"125px", height: "20px", marginTop: "-5px", borderRadius: "5px", borderColor: "gray"}}/>
                <img src="./media/icons/search.png" style={{marginLeft:" -22px", position: "absolute"}} alt=""></img>
            </FilterInput>
        </ArticlesSection>
    )
}
export default Articles