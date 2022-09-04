import { Container, Image, Text } from '@chakra-ui/react';
import React from 'react'


export const TlCard = (props: any) => {
    let mobile = window.innerWidth
    return (
        <Container margin="80px auto" marginLeft="30px" padding="0" width={mobile < 750 ? "90%" : "35%"}>
            <Image maxHeight="160px" src={props.img} alt={props.name} position="absolute" marginTop="-23px"/>
            <Container paddingY="28px" paddingLeft="70px" width="70%" bgGradient="linear-gradient(180deg, #007BB8 0%, #1D467C 100%);" borderRadius="0px 100px 100px 0px;" shadow="1px 5px 10px 1px #00000061">
                <Text fontSize="20px" fontWeight="700" color="white">{props.name}</Text>
                <Text fontSize="14px" fontWeight="500" color="white">Team Leader</Text>
            </Container>
        </Container>
    )
}
