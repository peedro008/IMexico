import React, {useState} from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel, { Dots, slidesToScrollPlugin, slidesToShowPlugin} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import {  Container,  HStack, Image, Menu, MenuButton, MenuList, MenuItem, Button, Box, Text } from '@chakra-ui/react'

import { ChevronUpIcon } from '@chakra-ui/icons'
interface DetailsCarouselProps {
   photos: {
        description: string,
        image: string,
    }[],
   

}


export const DetailsCarousel = ({photos}: DetailsCarouselProps) => {
    let mobile = window.innerWidth
    const [value, setValue] = useState(0);
    const onChange = (value: any) => {
        setValue(value);
        }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        dotClass:"slick-dots",
        centerPadding: "38px",
        slidesToShow: 1,
        speed: 500,
       
        
    };
  
    return (
        <>
            {photos?.length > 0 && <>
            <Container  backgroundColor={"white"} minWidth="100%" padding={0} overflow="hidden">
           
          
                <div style={{marginTop:"20px"}}>
                <Slider {...settings}>
                    
            {photos?.map((photo: any, index: number) => {
                        return <Image paddingX="5px" objectFit={"cover"} height="270px"key={index}  src={photo.image} alt={photo.description} />
                   })}
            </Slider></div>
           
           
            </Container></>}
        </>
    )
}
