import { Center, Container, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { MayInterestPosts } from "./MayInterestPosts";
import { PostMainImage } from "./PostMainImage";
import { SharePost } from "./SharePost";
import { Image } from "@chakra-ui/image";
import "./Post.css"
import { Spinner } from "@chakra-ui/react";
import CommentsContainerController from "../../controllers/Post/CommentsContainer.controller";

export const Post = (props: any) => {
	let mobile = window.innerWidth
	const { author, category, creationDate, description, principalImg, title } = props.post;

	return (
		props.loading ? <Center h="200px"><Spinner color="green" /></Center> : (
		<>
			<PostMainImage image={principalImg} category={category} />
			<Container  padding="20px">
			<Text as="h6" fontSize={mobile < 750 ? "9px" : "17px"} color="#8E8E8E">{props.formatDate(creationDate)}</Text>
			<HStack>
				<Image borderRadius="50%" w="30px" h="30px" src={author?.profileImg} alt={author?.name}/>
				<Text display="flex" as="h5" fontSize={mobile < 750 ? "12px" : "23px"} color="#8E8E8E">Escrito por:
				{author?.instagram ? <a href={author?.instagram} target="_blank" rel="noreferrer">
					<Text marginLeft="3px" fontWeight="bold" textDecoration="underline">
						{author?.name}
					</Text>
				</a> :
					<Text marginLeft="3px" fontWeight="bold" textDecoration="underline">
						{author?.name}
					</Text>}
				</Text>
			</HStack>
			<Text paddingY="20px" as="h2" fontSize={mobile < 750 ? "22px" : "40px"} fontWeight="bold" lineHeight="26px" color="black">{title}</Text>
			<Text as="h4" fontSize={mobile < 750 ? "17px" : "23px"} paddingBottom="20px" fontWeight="500" lineHeight="21px">{description}</Text>
			<VStack spacing={5} id="post-body" alignItems="flex-start">
				{props.postBody.constructor === Array ? props.postBody.map((elem: string, index: number) => {
					return props.processText(elem, index);
				}) : <Text wordBreak="break-word">{props.postBody}</Text>}
			</VStack>
			</Container>
			<SharePost liked={props.liked} handleLike={props.handleLike} loadingLikes={props.loadingLikes} />
			<CommentsContainerController comments={props.comments} formatDate={props.formatDate} />
			<MayInterestPosts relatedPosts={props.relatedPosts} />
		</>)
	);
};
