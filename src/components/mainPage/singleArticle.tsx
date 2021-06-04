import {FC} from "react";
import styled from "styled-components";

const ArticleBox = styled.div`
background-color: white;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:3px;
margin-bottom: 10px;
`;

const ArticleTitle = styled.div`
font-size: 18px;
color: darkblue;
padding: 5px;
padding-left: 10px;
`;

const ArticleContent = styled.div`
font-size: 14px;
color: gray;
padding: 5px;
padding-left: 10px;
`;

const ArticleFooter = styled.div`
padding: 5px;
color: gray;
font-size: 12px;
height: 12px;
`;

const ArticleFooterCompanyThumbnail = styled.img`
width: 10px;
height: 10px;
margin-left: 10px;
margin-right: 8px;
border-radius: 50%;
float: left;
`;

const ArticleFooterThumbnail = styled.img`
width: 10px;
height: 10px;
margin-left: 10px;
margin-right: 8px;
float: left;
`;

const ArticleFooterText = styled.div`
float :left;
`;

const DotDiv = styled.div`
float: left;
padding-left: 10px;
padding-right: 10px;
`;

interface ISingleArticle{
    title:string;
    body:string;
    url:string;
    username:string;
}

export const SingleArticle: FC<ISingleArticle> = (props) =>{
    return(
        <ArticleBox>
        <ArticleTitle>
            {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
        </ArticleTitle>
        <ArticleContent>
            {props.body}
        </ArticleContent>
        <ArticleFooter>
            <ArticleFooterCompanyThumbnail src={props.url}/>
            <ArticleFooterText>
                Subsid. corp.
            </ArticleFooterText>
            <DotDiv>•</DotDiv>
            <ArticleFooterThumbnail src="./media/icons/entities.png"/>
            <ArticleFooterText>
                Corporate
            </ArticleFooterText>
            <DotDiv>•</DotDiv>
            <ArticleFooterText>
                Updated 3 days ago by {props.username}
            </ArticleFooterText>
        </ArticleFooter>
    </ArticleBox>
    )
}