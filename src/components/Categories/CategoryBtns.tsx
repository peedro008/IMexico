import React from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useHistory } from "react-router";

export const CategoryBtns = (props: any) => {
	let mobile = window.innerWidth;
    const history = useHistory();
	return (
		<Stack
			display="flex"
			flexWrap="wrap"
			justifyContent="space-evenly"
			flexDirection="row"
			width={mobile > 750 ? "90%" : "100%"}
			alignItems="center"
			paddingY="20px"
			margin="0 auto"
		>
			{props.categoryList?.length > 0 ? props.categoryList?.map((elem: any, index: number) => {
				return (
					<Box
						key={index}
                        cursor="pointer"
						width={mobile < 750 ?"64px" : "185px"}
						height="60px"
                        margin="0 !important"
						borderRadius="10px"
						backgroundColor="#1D467C"
						display="flex"
						flexDirection={mobile < 750 ? "column" : "row"}
						alignItems="center"
						justifyContent="center"
                        onClick={() => history.push(`/blog/category/${elem._id}`)}
					>
						<Image src={elem.image} maxW="26px" maxH="26px" />
						<Text fontSize={mobile > 750 ? "20px" : "10px"} padding={mobile > 750 ? "5px" : "0px"} textAlign="center" color="#FFFDFD">
							{elem.name}
						</Text>
					</Box>
				);
			}) : null}
		</Stack>
	);
};
