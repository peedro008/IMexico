import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";
import { useHistory } from "react-router";
import React from "react";
import { Link } from "react-router-dom";

const PostCard = (props: any) => {
    const history = useHistory();
	return (
		<Box bgColor="white" border="1px solid #BBBBBB" borderRadius="12px" h="263px" w={props.big ? "303px" : "176px"} position="relative" marginX="5px">
			<Box
				h="50%"
				bg={`url("${props.image}") center`}
				bgSize="cover"
				borderRadius="12px 12px 0 0"
			></Box>
            <Box position="absolute" top="46%" left="10%" bgColor="white">
                <Link to={`/category/${props.categoryId}`}>
                    <Text color="#1D467C" fontSize={props.big ? "12px" : "7.45px"} p="3px">{`#${props.category ? props.category.toUpperCase() : "CATEGORIA"}`}</Text>
                </Link>
            </Box>
            <Center h="50%">
                <VStack h="80%" w={props.big ? "254px" : "129px"} position="relative">
                    <VStack h="70%" overflowY="auto">
                        <Text noOfLines={4} fontSize="13px" fontWeight="bold" lineHeight="16px">
                            {props.title}
                        </Text>
                        {props.big && <Text fontSize="10px" lineHeight="13px">{props.description}</Text>}
                    </VStack>
                    <Button w="100%" position="absolute" bgColor='#1D467C' alignSelf="center" color="white" left="0" bottom="0" fontSize="12px" onClick={() => history.push(`/blog/post/${props.postId}`)}>Seguir leyendo</Button>
                </VStack>
            </Center>
		</Box>
	);
};

export default PostCard;
