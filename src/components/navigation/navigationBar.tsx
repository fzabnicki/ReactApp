import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import useDropdown from 'react-dropdown-hook';
import { ExpandedMenu } from './expandedMenu';
import {
    Link
} from "react-router-dom";


const TopBar = styled.div`
width: 98vw;
display: flex;
background: ${Colors.white};
padding-top: 5px;
padding-bottom: 5px;
max-height: 50px;
`;

const SearchInput = styled.div`
padding-top: 15px;
margin: 0 auto;
`;

const RightCornerIcons = styled.div`
position: absolute;
right: 30px;
`;

const Logo = styled.img`
float: left;
padding: 5px;
width: 30px;
height:40px;
`;
Logo.defaultProps={
    src:'../media/logo.png',
};

const Home = styled.img`
    width: 24px;
    height: 22px;
    padding-top: 14px;
    padding-left: 15px;
    padding-right: 15px;
`
Home.defaultProps={
    src:'../media/icons/house2.png',
};


const NavigationBar : FC = props =>{
    const [wrappedRef, dropdownOpen, toogleDropdown] = useDropdown();
    return(
            <TopBar>
                <Link to="/"><Logo/></Link>
                    <div ref={wrappedRef}>
                        <div onClick={toogleDropdown}>
                            <Home/>
                            Rozwiń
                        </div>
                        {dropdownOpen &&
                            <ExpandedMenu/>
                        }
                    </div>
                <SearchInput>
                    <div>
                    <input type="text" style={{width:"300px"}}></input>
                    <img src="./media/icons/search.png" style={{paddingLeft:" 10px", }} alt=""></img>
                    </div>
                </SearchInput>
                <RightCornerIcons>
                    <img src="./media/icons/house.png" style={{ padding:"10px" }} alt="" ></img> 
                    <img src="./media/icons/comments.png" style={{ padding:"10px" }} alt="" ></img> 
                    <img src="./media/icons/bell.png" style={{ padding:"10px" }} alt="" ></img>
                </RightCornerIcons>
            </TopBar>
    )
}
export default NavigationBar;
