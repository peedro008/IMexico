import { Box, Image } from "@chakra-ui/react";
import React from "react";
import SPINERMOBILE from "../../images/SPINERMOBILE.gif"
export const Spinner = () => {
   return(
   <Box width="100vw" height="100vh"backgroundColor={"white"} position="absolute" zIndex={9} overflow="hidden" display="flex" alignItems={"center"} justifyContent="center">
        <Image  src={SPINERMOBILE}/>
    </Box>)
}