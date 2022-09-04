import React from 'react'
import { Image } from '@chakra-ui/image'
import { Container, Text } from '@chakra-ui/layout'
import PostCard from './PostCard'
import chalitalg from "../../images/chalitalg.svg"

export const MayInterestPosts = (props: any) => {
    let mobile = window.innerWidth
    return (
        <Container bgGradient="linear(to-r, #154383 0%, #2954A1 100%)" width="100%" paddingY="20px" paddingX="0">
        <Text as="h2" margin="0 auto" display="flex" color="white" flexDirection="row" justifyContent="center" alignItems="center" fontSize="20px" fontWeight="700">Te sugerimos estas notas</Text>
        <Container paddingX="0" width="100%" overflow="auto" paddingY="20px">
            <Container paddingX="0" width={ mobile < 750 ? "300%" : "100%"} justifyContent="space-evenly" display="flex" flexDirection={ mobile < 750 ? "row" : "column"} overflow="auto" alignItems="center" maxW="60ch">
                {Symbol.iterator in Object(props.relatedPosts) && props.relatedPosts.map((post: any, index: number) => {
                    return (
                        <Container key={index} display="flex" justifyContent="center" width="100%" margin="0 auto" padding="0" paddingBottom="10px">
                        <PostCard
                            category={post.category?.name}
                            categoryId={post.category?._id}
                            title={post.title}
                            image={post.principalImg}
                            postId={post._id}
                        />
                        </Container>
                    )
                })}
            </Container>
        </Container>
    </Container>
    )
}
