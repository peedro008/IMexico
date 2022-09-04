import { Container, Text, Button, Spinner, Center } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Feature = (props: any) => {
    return (
        props.loading ? <Center mt="60px" h="200px"><Spinner color="green" /></Center> : (
            props.fetched && props.feature && Object.keys(props.feature).length ? <Container padding="30px 40px" width="100%" maxHeight="400px" backgroundImage={`url("${props.feature?.principalImg}")`} backgroundSize="cover">
                <Container backgroundColor="#fffdfdea" borderRadius="20px" padding="20px">
                        <Link to={`/blog/category/${props.categoryId}`}>
                            <Text fontSize="12px" color="#1D467C">{`#${props.category ? props.category?.toUpperCase() : "CATEGORIA"}`}</Text>
                        </Link>
                        <Text as="h2" fontWeight="bold" fontSize="17px" margin="20px auto" lineHeight="22px">{props.feature?.title}</Text>
                        <Link to={`/blog/post/${props.feature?._id}`}>
                            <Button margin="0 auto" display="flex" fontSize="12px">Seguir leyendo</Button>
                        </Link>
                </Container>
            </Container> : null
        )
    )
}
