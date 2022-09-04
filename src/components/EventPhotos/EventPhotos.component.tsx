import { Box, Container, Image,  SimpleGrid,  Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import REVIVE from "../../images/REVIVE.png"
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import "./style.css"
import rooms from '../../images/rooms.svg'
import baths from '../../images/baths.svg'
import beds from '../../images/beds.svg'
import mts from '../../images/mts.svg'
import gps from '../../images/gps.svg'

import VIDEOINICIAL1 from "../../images/VIDEOINICIAL1.mp4"
import { FullscreenModal } from "../Modals/FullscreenModal";
import  EVENT  from "../../images/event/index.js"

export const EventPhotosComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ src, setSrc ] = useState({})

    const handleFullscreen = (src:any) => {
        setSrc(src)
        onOpen()
    }
    
    return (
        <Container minWidth="100%" padding="0" display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box display="flex" flexDirection={"row"} alignItems={"center"}>
                <Box position="absolute" left="3">
                    <Link to="/events"><MdOutlineArrowBackIosNew color="#545454"  size={"20px"}/></Link>
                </Box>
                <Text fontSize={"15px"} fontWeight={500} marginY="15px" color="#545454">Eventos</Text>
            </Box>    
            <Box width="100%" height="52px" backgroundColor={"#154383"} marginBottom="5px" display={"flex"} alignItems={"center"} paddingX="35px">
                <Text textAlign={"center"} fontWeight={700} fontSize={"15px"} color="#FFFFFF">Revive Las 5 mejores opciones para invertir en este paraiso</Text>
            </Box>
            <SimpleGrid className="gridM" gridTemplateRows="masonry" >
            
                 {EVENT.map((src, index) => !src.includes("mp4")?(
               <Box >
               <Image
                onClick={()=>handleFullscreen(src)}
                  
                    key={src}
                    w="100%"
                    
                    borderRadius="5px"
                   
                    
                    
                    src={src}
                    alt="Alt"
                    padding="2px"
                /></Box>
                ):
                <video  controls  >
                    
                    <source src={src} type="video/mp4"/>
                    </video>
                
                )}
            </SimpleGrid>
            
            <FullscreenModal src={src} isOpen={isOpen} onClose={onClose}  />
            <Text fontSize={"15px"} textAlign={"center"} paddingX="15px" fontWeight={700} marginY="15px" color="#6A1D32">Gracias por vivir estos momentos con nosotros. Vamos por muchos mas.</Text>
        </Container>

    )
}