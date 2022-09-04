import React from 'react'
import { Button } from '@chakra-ui/button'
import { Container, Divider, Text } from '@chakra-ui/layout'
import PostCard from '../Post/PostCard'
import chalita from "../../images/chalita.svg"
import { Image } from '@chakra-ui/image'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'


export const CategoryCarrousel = (props: any) => {
    let postReducer = useSelector((state: any) => state.postReducer);
    const history = useHistory();

    return (
        <>
        {props.categoryList.map((category: any, index: number) => {
            const postsList = Symbol.iterator in Object(postReducer.data) ? postReducer?.data?.filter((group: any) => group.items[0]?.category === category._id) : null
            return (
                <React.Fragment key={index}>
                    <Container width="100%" paddingY="20px" paddingX="0">
                        <Text as="h2" margin="0 auto" display="flex" flexDirection="row" justifyContent="center" alignItems="center" fontSize="20px" fontWeight="700">{category.name}</Text>
                        <Container paddingX="0" width="100%" overflow="scroll" paddingY="20px" display="flex">
                            <Container paddingX="0" width="300%" justifyContent="space-evenly" display="flex">
                                {postsList && postsList.constructor === Array && postsList[0]?.items.map((post: any, index: number) => {
                                    return (
                                        <PostCard
                                            key={index}
                                            category={category.name}
                                            categoryId={category._id}
                                            title={post.title}
                                            image={post.principalImg}
                                            postId={post._id}
                                        />
                                    )
                                })}
                            </Container>
                        </Container>
                        {/* {postsList && postsList.constructor === Array && postsList[0]?.count > 3 &&
                            <Button size="lg" margin="10px auto" fontSize="12px" display="flex" onClick={() => history.push(`/category/${category._id}`)}>Ver más</Button>
                        } */}
                    </Container>
                    <Divider width="80%" margin="0 auto"/>
                </React.Fragment>)
                }
            )
        }
        </>
    )
}
