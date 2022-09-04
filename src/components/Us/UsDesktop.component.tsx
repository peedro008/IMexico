import { Box, Button, Container, Divider, Image, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import NOSOTROSD1 from "../../images/NOSOTROSD1.png"
import NOSOTROSD2 from "../../images/NOSOTROSD2.png"

import redPalmera from "../../images/redPalmera.png"
import {TL} from "./TLlist"
import "./Us.css"
import Slider from "react-slick";

import { NavLink } from 'react-router-dom';
import TEAM from "../../images/team/index.js"

interface UsProps {
  agentReducer: any[],
  agents: any
 
}

export const UsDesktop = ({agentReducer, agents}:UsProps) => {

let photos = [NOSOTROSD1, NOSOTROSD2]  

const [value, setValue] = useState(0);
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: false,
};
const settings1 = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
};
const onChange = (value: any) => {
    setValue(value);
    }
    return (
        <>
         <Box display={"flex"} flexDirection={"column"} alignItems="center" >
            <Container filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} minWidth="100%" padding={0} height="auto" overflow="hidden" >
            <Slider {...settings1}>
                {photos?.map((photo: any, index: number) => {
                                return <Image width={"100%"}  key={index}  src={photo}/>
                            })}
                </Slider>
            </Container>
        
            
            <Box filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} paddingBottom={"100px"} justifyContent={"space-between"} marginY="25px"  width="95%" backgroundColor={"white"} display={"flex"} flexDirection={"column"} alignItems="center" borderRadius={"8px"}>
              <Text paddingTop="30px" textAlign="center" paddingX="60px" fontSize={"25px"} fontWeight={700} color={"#1D467C"}>Conocé a nuestros Team Leader</Text>
                  <Box display="flex" flexDirection={"row"} justifyContent="center" width="100%" paddingX="40px" paddingTop="20px" flexWrap={"wrap"}>
                    {/* <NavLink to={{
                          pathname:'/teamleader',
                          state: {id:4, name:"Jose Carlos", lastName:"HERNANDEZ"}  
                        }}> <div className="coinD3"></div></NavLink>
                     <NavLink to={{
                          pathname:'/teamleader',
                          state: {id:3, name:"Oswaldo", lastName:"ORTEGA"}  
                        }}> <div className="coinD2"></div></NavLink>
                     <NavLink to={{
                          pathname:'/teamleader',
                          state: {id:2, name:"Sergio", lastName:"HERNANDEZ"}  
                        }}> <div className="coinD1"></div></NavLink>
                     <NavLink to={{
                          pathname:'/teamleader',
                          state: {id:1, name:"Tatiana", lastName:"RIZZO"}  
                        }}> <div className="coinD"></div></NavLink> */}

                    {/* {agents?.map((agent: any, index: number)=>{
                        return(
                          <NavLink to={{
                            pathname:'/teamleader',
                            state: {agent}  
                          }}>
                            
                          <Box display="flex" flexDirection={"column"} alignItems="center"  className="coinD"  >
                            <Box borderWidth={"2px"} borderColor="#F39400" borderRadius={"50%"} height="220px" width="220px" padding={"8px"} boxShadow="9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35);">
                              <Box background={"linear-gradient(180deg, #FFC803 0%, #F39400 100%);"} filter="drop-shadow(9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35))" borderRadius="50%"    borderStyle={"inherit"} >
                                <Image src={`${agent.img}`} borderRadius={"50%"} borderWidth="2px" borderColor={"black"} />
                              </Box>
                            </Box>
                          <Text fontWeight={700} fontSize="20.6px" marginTop="15px">{agent.name}</Text>
                          </Box></NavLink>
                        )
                    })} */}
                    {TL?.map((agent: any, index: number)=>{
                        return(
                          <NavLink to={{
                            pathname:'/teamleader',
                            state: {agent}  
                          }}>
                            
                          <Box display="flex" flexDirection={"column"} alignItems="center"  className="coinD"  margin="60px 50px">
                            <Box borderWidth={"2px"} borderColor="#F39400" borderRadius={"50%"} minHeight="220px" overflow={"hidden"} minWidth="220px" padding={"8px"} boxShadow="9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35);">
                              <Box background={"linear-gradient(180deg, #FFC803 0%, #F39400 100%);"} display="flex"  justifyContent="center" overflow={"hidden"}  maxWidth="220px" maxHeight="200px" filter="drop-shadow(9.03973px 9.03973px 9.03973px rgba(0, 0, 0, 0.35))" borderRadius="50%"    borderStyle={"inherit"} >
                                
                                <Image src={agent.img}  borderRadius={"50%"} borderWidth="2px"  objectFit={"cover"} height={"300px"} minWidth={"300px"} borderColor={"black"}/>
                              </Box>
                            </Box>
                          <Text textAlign={"center"} fontWeight={700} fontSize="20.6px" marginTop="15px">{agent.name}</Text>
                          </Box></NavLink>
                        )
                    })}


                  </Box>

            </Box>


            <Box display="flex" flexDirection="row" minWidth="100%" height={"max-content"}>
            
            <Box filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} height={"max-content"} width={"100%"} backgroundImage={redPalmera} backgroundSize="cover" display="flex" flexDirection={"column"}>
           
           
            
              
              <Text fontSize="19px" fontWeight={700} textAlign="center" color="white" paddingY="25px">Nuestro equipo</Text>
              <Container minWidth="80%" alignSelf={"center"} padding={0} height="auto" overflow="hidden" paddingBottom={"15px"} >
          
                <Slider {...settings}>
                {TEAM?.map((photo: any, index: number) => {
                                return <Image height={"cpver"} objectFit="cover"  paddingX="10px" key={index}  src={photo}/>
                            })}
                </Slider>
            </Container>
            </Box>
            
            
          </Box>
          
          
          
          </Box>
        </>
    )
}


