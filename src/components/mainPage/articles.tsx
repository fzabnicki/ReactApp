import {FC} from "react";
import styled from "styled-components";

const ArticlesSection = styled.div`
width:100%;
height: 1000px;
margin-top:20px;
background-color: gray;
`
const MainTitle = styled.div`

`
const FilterInput = styled.div`

`
const Followed = styled.div`

`


const Articles: FC = () =>{
return(
        <ArticlesSection>
            <MainTitle>

            </MainTitle>
            <FilterInput/>
            <Followed/>
        </ArticlesSection>
    )
}
export default Articles