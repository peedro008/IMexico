import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/image'
import { Box, Container, Text } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import cam from "../../images/cam.svg"

export const PostMainImage = (props: any) => {
    let mobile = window.innerWidth
    return (
        <Container height="fit-content" minWidth="100%" padding="0" position="relative">
            <Image src={props.image} height={mobile > 750 ? "600px" : "auto"} width="100%" objectFit="cover"/>
            <Box position="absolute" bottom="0" left="10%" bgColor="white">
                <Link to={`/blog/category/${props.category?._id}`}>
                    <Text color="#1D467C" fontSize={mobile < 750 ? "14px" : "22px"} p="3px 5px">{`#${props.category?.name.toUpperCase()}`}</Text>
                </Link>
            </Box>
            <Box position="absolute" bottom="5%" left="90%"  zIndex="3">
                <Tooltip hasArrow label="@instagramfotógrafo" placement="left" aria-label="A tooltip">
                <Image src={cam} cursor="pointer"/>
                </Tooltip>
            </Box>
        </Container>
    )
}
