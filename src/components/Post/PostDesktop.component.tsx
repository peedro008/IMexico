import { Center, Container, Divider, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { MayInterestPosts } from "./MayInterestPosts";
import { PostMainImage } from "./PostMainImage";
import { SharePost } from "./SharePost";
import { Image } from "@chakra-ui/image";
import "./Post.css"
import { Spinner } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react"
import facecolor from "../../images/facecolor.svg"
import instcolor from "../../images/instcolor.svg"
import twtcolor from "../../images/twtcolor.svg"
import youtubecolor from "../../images/youtubecolor.svg"
import CommentsContainerController from "../../controllers/Post/CommentsContainer.controller";

export const PostDesktop = (props: any) => {
	const { author, category, creationDate, description, principalImg, title } = props.post;

	return (
		props.loading ? <Center h="200px"><Spinner color="green" /></Center> : (
		<>
			<PostMainImage image={principalImg} category={category} />
            <Grid
                templateColumns="repeat(4, 1fr)"
            >
            <GridItem colSpan={3}>
			<Container  padding="20px">
			<Text as="h6" fontSize="17px" color="#8E8E8E">{props.formatDate(creationDate)}</Text>
			<HStack><Image borderRadius="50%" w="40px" h="40px" src={author?.profileImg} alt={author?.name}/>
			{author?.instagram ? 
				<Text display="flex" as="h5" fontSize="23px" color="#8E8E8E">Escrito por:
					<a href={author?.instagram} target="_blank" rel="noreferrer">
						<Text marginLeft="3px" textDecoration="underline">{author?.name}</Text>
					</a>
				</Text>
				:	<Text display="flex" as="h5" fontSize="23px" color="#8E8E8E">Escrito por:
						<Text marginLeft="3px" textDecoration="underline">{author?.name}</Text>
					</Text>}
			</HStack>
			<Text paddingY="20px" as="h2" fontSize="40px" fontWeight="bold" lineHeight="45px" color="black">{title}</Text>
			<Text as="h4" fontSize="23px" paddingBottom="20px" fontWeight="500" lineHeight="21px">{description}</Text>
			<VStack spacing={5} id="post-body" alignItems="flex-start">
				{props.postBody.constructor === Array ? props.postBody.map((elem: string, index: number) => {
					return props.processText(elem, index);
				}) : <Text wordBreak="break-word">{props.postBody}</Text>}
			</VStack>
			</Container>
			<SharePost liked={props.liked} handleLike={props.handleLike} error={props.error} />
			<CommentsContainerController comments={props.comments} formatDate={props.formatDate} />
            </GridItem>
            <GridItem colSpan={1} padding="40px">
            <Container minWidth="100%">
                <Text fontSize="17px" color="#585858" textAlign="center" margin="0 auto">Seguinos en nuestras redes sociales</Text>
                <HStack minWidth="100%"  justifyContent="space-around" marginTop="20px">
                    <a href="https://www.facebook.com/imexico.realestate" target="_blank" rel="noreferrer">
                        <Image boxSize="35px" src={facecolor}/>
                    </a>
                    <a href="https://www.instagram.com/imexico.realestate" target="_blank" rel="noreferrer">
                        <Image boxSize="35px" src={instcolor}/>
                    </a>
                    <a href="https://twitter.com/imexicore" target="_blank" rel="noreferrer">
                        <Image boxSize="35px" src={twtcolor}/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCFSMo37utXcCmk_joGOWeJg" target="_blank" rel="noreferrer">
                        <Image boxSize="35px" src={youtubecolor}/>
                    </a>
                </HStack>
                <Divider marginY="30px"/>
            </Container>
			<MayInterestPosts relatedPosts={props.relatedPosts} />
            </GridItem>
            </Grid>
		</>)
	);
};
