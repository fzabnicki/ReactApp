import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import styled from 'styled-components';

const Sampleimage = "../media/signingsample.jpg";

const SliderBox = styled.div`

`

const SliderElement = styled.div`
width: 250px;
height: 150px;
margin:20px;
background-color: white;
justify-content: center;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:5px;
`

const WorkspacePhoto = styled.img`
width: 250px;
height: 70px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`

const Icon = styled.img`
width:40px;
height:40px;
padding: 5px;
`
const IconBox = styled.div`
background-color: white;
width: 50px;
height:50px;
border-radius: 5%;
box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:5px;
margin-left: 10px;
margin-top: -25px;
position: absolute;
`


const WorkspaceTitle = styled.div`
margin-left: 75px;
margin-top: 5px;
font-size:18px;
`
const BottomText = styled.div`
font-size: 12px;
margin-top: 15px;
margin-left: 20px;
`
const DateText = styled.div`
font-size: 10px;
color:gray;
margin-left: 20px;
margin-top: 10px;
`

export default class WorkspaceSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <Slider {...settings}>
          <SliderBox>
          <Link to={{ pathname: "/workspaces",
                        state: {
                          title: "Client Contract",
                          thumbnail: "../media/icons/house2.png",
                          background:Sampleimage
                        }
          }} style={{textDecoration: 'none', color: 'black'}}>
            <SliderElement >
              <WorkspacePhoto src={Sampleimage} />
              <IconBox>
                <Icon src="../media/icons/house2.png"/>
              </IconBox>
              <WorkspaceTitle>
                Client Contract
              </WorkspaceTitle>
              <BottomText>
                IMG Contract | IMG 150 users
              </BottomText>
              <DateText>
                Last update 2 days ago
              </DateText>
            </SliderElement>
            </Link>
          </SliderBox>

          <SliderBox>
            <Link to={{ pathname: "/workspaces",
                        state: {
                          title: "Corporate Contract",
                          thumbnail: "../media/icons/entities.png",
                          background: "../media/icons/skyscrapers.jpg"
                        }
          }} style={{textDecoration: 'none', color: 'black'}}>
              <SliderElement >
                <WorkspacePhoto src="../media/icons/skyscrapers.jpg" />
                <IconBox>
                  <Icon src="../media/icons/entities.png"/>
                </IconBox>
                <WorkspaceTitle>
                  Corporate Contract
                </WorkspaceTitle>
                <BottomText>
                  IMG Contract | IMG 150 users
                </BottomText>
                <DateText>
                  Last update 2 days ago
                </DateText>
              </SliderElement>
            </Link>
          </SliderBox>

          <SliderBox>
          <Link to={{ pathname: "/workspaces",
                        state: {
                          title: "Ecosystem Contract",
                          thumbnail: "../media/icons/ecosystem.png",
                          background: "../media/icons/corporate.jpg"
                        }
          }} style={{textDecoration: 'none', color: 'black'}}>
            <SliderElement >
              <WorkspacePhoto src="../media/icons/corporate.jpg" />
              <IconBox>
                <Icon src="../media/icons/ecosystem.png"/>
              </IconBox>
              <WorkspaceTitle>
                Ecosystem Contract
              </WorkspaceTitle>
              <BottomText>
                IMG Contract | IMG 150 users
              </BottomText>
              <DateText>
                Last update 2 days ago
              </DateText>
            </SliderElement>
            </Link>
          </SliderBox>

          <SliderBox>
            <SliderElement >
              <WorkspacePhoto src={Sampleimage} />
              <IconBox>
                <Icon src="../media/icons/house2.png"/>
              </IconBox>
              <WorkspaceTitle>
                Client Contract
              </WorkspaceTitle>
              <BottomText>
                IMG Contract | IMG 150 users
              </BottomText>
              <DateText>
                Last update 2 days ago
              </DateText>
            </SliderElement>
          </SliderBox>
          
          <SliderBox>
            <SliderElement >
              <WorkspacePhoto src={Sampleimage} />
              <IconBox>
                <Icon src="../media/icons/house2.png"/>
              </IconBox>
              <WorkspaceTitle>
                Client Contract
              </WorkspaceTitle>
              <BottomText>
                IMG Contract | IMG 150 users
              </BottomText>
              <DateText>
                Last update 2 days ago
              </DateText>
            </SliderElement>
          </SliderBox>

          <SliderBox>
            <SliderElement >
              <WorkspacePhoto src={Sampleimage} />
              <IconBox>
                <Icon src="../media/icons/house2.png"/>
              </IconBox>
              <WorkspaceTitle>
                Client Contract
              </WorkspaceTitle>
              <BottomText>
                IMG Contract | IMG 150 users
              </BottomText>
              <DateText>
                Last update 2 days ago
              </DateText>
            </SliderElement>
          </SliderBox>

          <SliderBox>
            <SliderElement >
              <WorkspacePhoto src={Sampleimage} />
              <IconBox>
                <Icon src="../media/icons/house2.png"/>
              </IconBox>
              <WorkspaceTitle>
                Client Contract
              </WorkspaceTitle>
              <BottomText>
                IMG Contract | IMG 150 users
              </BottomText>
              <DateText>
                Last update 2 days ago
              </DateText>
            </SliderElement>
          </SliderBox>
        </Slider>
      </div>
    );
  }
}