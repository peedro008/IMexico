import { Center, Container, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/react'
import React from 'react'
import { PropCardController } from '../../controllers/PropCard'
import PropertyInterface from '../../interfaces/Property'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { DevelopmentCardComponent } from '../DevelopmentCard/DevelopmentCard.component'

interface FeaturedProps {
    featureList: PropertyInterface[],
    loading: boolean,
    title: string,
    dev: boolean
}

export const Featured = ({featureList, loading, title, dev}: FeaturedProps) => {
    return (
        <Container minWidth="100%" backgroundColor="#E5E5E5" padding="30px 10px 60px">
            <ScrollAnimation duration={2} animateIn="animate__fadeIn">
                <Text margin="0 auto" as="h2"  fontSize="20px" lineHeight="20px" textAlign="center" fontWeight="700" color="#000000">{title}</Text>
                </ScrollAnimation>
        <Container minWidth="100%" display="flex" overflowX="scroll" padding="0" paddingY="20px">
            {dev?
                loading ? <Center h="300px" w="100%"><Spinner /></Center> : featureList && featureList?.map((property: any, index: number) => {
                                
                    return (
                        <ScrollAnimation key={index}animateOnce animateIn="animate__flipInX">
                            <Container  maxWidth="90%" width="fit-content" height="fit-content"  padding="10px"><DevelopmentCardComponent property={property}  key={index} />
                            </Container>
                        </ScrollAnimation>)
                })


            :
            
            loading ? <Center h="300px" w="100%"><Spinner /></Center> : featureList && featureList?.map((feature: any, index: number) => {
                return(
                    <ScrollAnimation duration={2} animateIn="animate__fadeInUp"> <PropCardController property={feature} key={index} />
                    </ScrollAnimation>
                    )
            })}
        </Container>
        </Container>
    )
}
