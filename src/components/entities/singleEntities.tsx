import {FC} from 'react';
import styled from 'styled-components';

const SinglePuzzleDiv = styled.div`
padding: 10px;
height: 55px;
width:240px;
margin: 5px;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:4px;
`;

const PuzzleImgDiv = styled.div`
width: 55px;
height: 55px;
float: left;
margin-right: 5px;
`;

const PuzzleImg = styled.img`
width: 55px;
height: 55px;
float: left;
`;

const PuzzleTitle = styled.div`
color: darkblue;
font-size: 18px;
float: left;
`;

const PuzzleFooter = styled.div`
font-size: 12px;
margin-top: 35px;
color: darkgray;
`;

interface ISinglePuzzle{
    name: string;
    adress: string;
    url: string;
    list: boolean;
}

export const SingleEntities : FC<ISinglePuzzle> = (props) =>{
    return(
        <SinglePuzzleDiv style={{float:`${props.list ? 'left' : ''}` as 'none',
                                width: `${props.list ? '' : '94%'}`,
                                marginBottom:`${props.list ? '' : '15px'}`
                                }}>
            <PuzzleImgDiv>
                <PuzzleImg src={props.url}/>
            </PuzzleImgDiv>
                <PuzzleTitle>{props.name}</PuzzleTitle>
                <PuzzleFooter>{props.adress}</PuzzleFooter>
        </SinglePuzzleDiv>
    )
}