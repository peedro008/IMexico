import React from 'react'
import { Button } from '@chakra-ui/button'
import { Container, Divider, Text } from '@chakra-ui/layout'
import PostCardHomeDesktop from '../Post/PostCardHomeDesktop'
import chalita from "../../images/chalita.svg"
import { Image } from '@chakra-ui/image'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'


export const CategoryCarrouselDesktop = (props: any) => {
    let postReducer = useSelector((state: any) => state.postReducer);
    const history = useHistory();

    return (
        <>
        {props.categoryList.map((category: any, index: number) => {
            const postsList = Symbol.iterator in Object(postReducer.data) ? postReducer?.data?.filter((group: any) => group.items[0]?.category === category._id) : null;
            return (
                <React.Fragment key={index}>
                    <Container maxWidth="80%" paddingY="20px" paddingX="0" display="flex" flexDirection="column" justifyContent="center" >
                        <Text as="h2" margin="0 auto" display="flex" flexDirection="row" justifyContent="center" alignItems="center" fontSize="20px" fontWeight="700">{category.name}</Text>
                            <Container paddingX="0" maxWidth="100%" justifyContent="flex-start" display="flex" margin="20px auto" overflowX="scroll" paddingBottom="20px">
                            {postsList && postsList.constructor === Array && postsList[0]?.items.map((post: any, index: number) => {
                                    return (
                                        <PostCardHomeDesktop
                                            key={index}
                                            category={category.name}
                                            categoryId={category._id}
                                            description={post.description}
                                            title={post.title}
                                            image={post.principalImg}
                                            postId={post._id}
                                        />
                                    )
                                })}
                            </Container>
                        {/* {postsList && postsList.constructor === Array && postsList[0]?.count > 3 &&
                            <Button size="lg" margin="0 auto" fontSize="20px" display="flex" onClick={() => history.push(`/category/${category._id}`)}>Ver más</Button>
                        } */}
                    </Container>
                    <Divider width="80%" margin="0 auto" border="2px"/>
                </React.Fragment>
            )
        })}
        </>
    )
}