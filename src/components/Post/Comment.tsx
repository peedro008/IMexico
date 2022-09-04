import { Container, HStack, Text, Image } from '@chakra-ui/react'
import React from 'react'
import likefalse from "../../images/likefalse.svg"
import liketrue from "../../images/liketrue.svg"
import dislikefalse from "../../images/dislikefalse.svg"
import disliketrue from "../../images/disliketrue.svg"

const Comment = (props: any) => {
    const { comment, disliked, handleLike, liked, loadingLikes } = props;

    return (
        <Container>
            <HStack>
                <Text as="h6" color="#585858" fontSize="9px" fontWeight="900">{!comment.anonymous ? comment.user.user : "Anónimo"}</Text>
                <Text as="h6" color="#585858" fontSize="9px" fontWeight="400">{props.formatDate(comment.creationDate)}</Text>
            </HStack>
            <Text padding="10px" as="p" fontSize="14px" lineHeight="21px" color="black">{comment.comment}</Text>
            <HStack paddingY="20px">
                <Image _disabled={loadingLikes} src={liked ? liketrue : likefalse} onClick={loadingLikes ? undefined : () => handleLike("like")} cursor="pointer" />
                <Image _disabled={loadingLikes} src={disliked ? disliketrue : dislikefalse} onClick={loadingLikes ? undefined : () => handleLike("dislike")} cursor="pointer" />
            </HStack>
        </Container>
    )
}

export default Comment
