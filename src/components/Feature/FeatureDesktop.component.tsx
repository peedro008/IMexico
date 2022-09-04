import { Button } from '@chakra-ui/button'
import { Container, Text } from '@chakra-ui/layout'
import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
//import featurebackdesktop from "../../images/featurebackdesktop.png"

export const FeatureDesktop = (props: any) => {
    console.log(props.feature)
    return (
        props.loading ? <Center mt="60px" h="200px"><Spinner color="green" /></Center> : (
            props.fetched && props.feature && Object.keys(props.feature).length ? <Container padding="30px 40px" minWidth="100%" height="fit-content" backgroundImage={`url("${props.feature.principalImg}")`} backgroundPosition="center" backgroundSize="cover">
                <Container backgroundColor="#fffdfdea" borderRadius="20px" padding="20px" marginTop="20%">
                        <Link to={`/blog/category/${props.categoryId}`}>
                            <Text fontSize="18px" color="#1D467C">{`#${props?.category?.toUpperCase()}`}</Text>
                        </Link>
                        <Text as="h2" fontWeight="bold" fontSize="30px" margin="20px auto" lineHeight="35px">{props.feature.title}</Text>
                        <Link to={`/blog/post/${props.feature._id}`}>
                            <Button margin="0 auto" display="flex" fontSize="20px">Seguir leyendo</Button>
                        </Link>
                </Container>
            </Container> : null
        )
    )
}
