import { Box, Divider, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import gps from '../../images/gps.svg'
export const DevelopmentCardComponent = (props:any) => {
    let mobile = window.innerWidth
    
    const image = props?.property?.photos[3]?.thumb;
    const id = props.property.id;
    const title = props?.property?.name;
    const subTitle = props?.property?.publication_title;
    const description = props?.property?.fake_address;
    const numProp = props?.property?.construction_status;
    const CD = props?.state?.construction_date;
    const address = props?.property?.address;
    console.log(props)
    return(
        <>
        
        {mobile<750?
        <Link style={{width:"100%"}}  
            to={{
                pathname: `/devdetails/${id}`,
                state: props?.property
              }} ><Box paddingBottom={"22px"} justifyContent={"space-between"} boxShadow={"2px 2px 2px rgba(0, 0, 0, 0.25)"} borderRadius="7px" display="flex" flexDirection={"column"} alignItems="center" width="260px" height="370px" backgroundColor={"#FFFFFF"}>
            
            <Image src={image} minWidth={"100%"} maxHeight="170px" marginTop="13px" objectFit={"cover"}/>
            <Text paddingX="19px" fontSize={"17px"} color="#104B86" fontWeight={700}>{title}</Text>
            <Text paddingX="19px"  fontSize={"15px"} color="#104B86" fontWeight={500}>{subTitle}</Text>
            
            <Divider  color="#D3D3D3" backgroundColor="#D3D3D3" border="1px solid #D3D3D3" width="90%"/>
            {description!==""?
            <Text paddingX="19px" display="flex" flexDirection={"row"} fontSize={"15px"} color="#333333" fontWeight={600}>{description}</Text>
           
            :
            <Text paddingX="19px"  display="flex" flexDirection={"row"} fontSize={"15px"} color="#333333" fontWeight={600}><Image paddingRight="8px" src={gps}  alt="Ubicación"/>{address}</Text>
            }
         


        </Box></Link>:
<Link style={{width:"max-content"}}  to={{
                pathname: `/devdetails/${id}`,
                state: props?.property
              }} >
        <Box  width={"968px"} height="203px" display="flex" flexDirection={"row"} justifyContent="space-between" backgroundColor={"#FFFFFF"} boxShadow={"2px 2px 2px rgba(0, 0, 0, 0.25)"} borderRadius="7px">
             <Box backgroundImage={image} width={"395px"} height="100%" borderRadius="7px 0 0 7px" backgroundSize="contain" backgroundPosition={"center"} backgroundRepeat={"no-repeat"} />
            
             <Box paddingBottom={"12px"} width="59%" display="flex" flexDirection={"column"} justifyContent="space-between" paddingY="20px" paddingX="10px">
             <Text paddingX="19px" fontSize={"23px"} color="#104B86" fontWeight={700}>{title}</Text>
            <Text paddingX="19px"  fontSize={"17px"} color="#104B86" fontWeight={500}>{subTitle}</Text>
            
            <Divider  color="#D3D3D3" backgroundColor="#D3D3D3" border="1px solid #D3D3D3" width="90%"/>
            {description!==""?
            <Text paddingX="19px" fontSize={"17px"} color="#333333" fontWeight={600}>{description}</Text>
            :
            <Text display="flex" flexDirection={"row"} paddingX="19px" fontSize={"17px"} color="#333333" fontWeight={600}><Image paddingRight="8px" src={gps}  alt="Ubicación"/>{address}</Text>}
            
             </Box>
        </Box></Link>}
        
        </>
    )
}