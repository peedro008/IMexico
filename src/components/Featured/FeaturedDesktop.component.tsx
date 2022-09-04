import { Center, Container, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { PropCardController } from '../../controllers/PropCard'
import PropertyInterface from '../../interfaces/Property'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

interface FeaturedProps {
    featureList: PropertyInterface[],
    loading: boolean,
    title: string
}

export const FeaturedDesktop = ({featureList, loading, title}: FeaturedProps) => {
    return (
        <Container minWidth="100%" backgroundColor="#E5E5E5" padding="70px 10px 60px">
            <ScrollAnimation duration={2} animateIn="animate__fadeIn"><Text margin="0 auto" as="h2" width="60%" fontSize="25px" lineHeight="20px" textAlign="center" fontWeight="700" >{title}</Text></ScrollAnimation>
            <Container minWidth="100%" display="flex" padding="50px 180px" justifyContent="space-evenly">
                {loading ? <Center h="300px" w="100%"><Spinner /></Center> : featureList && featureList?.slice(0, 5)?.map((feature: any, index: number) => {
                    return (
                        <ScrollAnimation duration={2} animateIn="animate__fadeInUp">
                            <PropCardController property={feature} key={index} />
                            </ScrollAnimation>
                    )
                })}
            </Container>
        
        </Container>
    )
}