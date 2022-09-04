import { Box, Image, Button, Text, VStack } from "@chakra-ui/react";
import { useHistory } from "react-router";
import React from "react";
import { Link } from "react-router-dom";

const PostCardHomeDesktop = (props: any) => {
    const history = useHistory();
	return (
		<Box bgColor="white" display="flex" border="1px solid #BBBBBB" borderRadius="20px" h="263px" minWidth="513px" position="relative" marginX="10px" padding="28px">
			<Image src={props.image} borderRadius="20px" width="180px" objectFit="cover"/>
                <VStack h="100%" w="100%" position="relative" justifyContent="space-around" alignItems="flex-start" textAlign="left" paddingX="20px">
                    <Link to={`/blog/category/${props.categoryId}`}>
                        <Text color="#1D467C" fontSize="15px" p="3px">{`#${props.category ? props.category.toUpperCase() : "CATEGORIA"}`}</Text>
                    </Link>
                        <Text fontSize="13px" fontWeight="bold" lineHeight="16px">
                            {props.title}
                        </Text>
                      <Text fontSize="10px" lineHeight="13px">{props.description}</Text>
                    <Button w="50%" fontSize="12px" bgColor="#1D467C" color="white" onClick={() => history.push(`/blog/post/${props.postId}`)}>Seguir leyendo</Button>
                </VStack>
		</Box>
	);
};

export default PostCardHomeDesktop;
