import { Image } from '@chakra-ui/image'
import { Box, HStack, Text,Container } from '@chakra-ui/layout'
import React, {useEffect, useMemo, useState} from 'react'

import call from '../../images/call.png'
import cardinfo from '../../images/info.svg'
import rooms from '../../images/rooms.png'

import mts from '../../images/mts.png'
import { Checkbox } from '@chakra-ui/checkbox'
import { Link } from 'react-router-dom'
import PropertyInterface from '../../interfaces/Property'
import { Divider, useDisclosure } from '@chakra-ui/react'
import { ContactModal } from '../Modals/ContactModal'

interface PropCardProps {
    property: PropertyInterface,
    key: number,
    search: boolean,
    isCompareDisabled: boolean,
    handleCompare: (checked: boolean, property: PropertyInterface) => void,
    isCompare: () => void,
    selectedProperties: PropertyInterface[],
    phonecallReducer: any
    phonecall:(name:string, email:string, phone:string, date:string, hour:string, reason:string )=>void,
}

export const PropCardDesktop = (props: PropCardProps) => {
    const { 
        isOpen: isOpenReportModal, 
        onOpen: onOpenReportModal, 
        onClose: onCloseReportModal 
    } = useDisclosure()
    let mobile = window.innerWidth

    
    
    const id = props.property.id;
    const title = props?.property?.publication_title;
    const image = props?.property?.photos[0]?.thumb;
    const price = props.property.operations && props?.property?.operations[0]?.prices[0];
    const surface = `${props?.property?.total_surface} ${props?.property?.surface_measurement}`;
    const suite_amount = props?.property?.suite_amount;
    const bathroomAmount = props?.property?.bathroom_amount;
    const tag1 = props?.property?.custom_tags[0];
    const tag2 = props?.property?.custom_tags[1];

    const isChecked = useMemo(() => {
        return !!(props.selectedProperties?.find((selectedProp: PropertyInterface) => { //check if property exists in compare list
            return selectedProp?.id === props.property.id;
        }))
    }, [props.property.id, props.selectedProperties]);

    return (
        <Box  height="302px" backgroundColor="white" width="194px" borderRadius="10px" shadow="2.71179px 2.71179px 4.51965px rgba(0, 0, 0, 0.2)" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" marginX="10px" marginBottom="10px"   _hover={{animation:"pulse 1s"}}>
        
            {/* {tag1 ?<Text height="29.75px" width="87.89px" position="absolute" marginLeft="111px" opacity="80%" marginTop="-317px" paddingTop="5px" textAlign="center" fontSize="12.4px" fontWeight="700" color="white" backgroundColor="#BD8F15" >{tag1.name}</Text> : null }
            {tag2 ? <Text height="29.75px" width="87.89px" position="absolute" marginLeft="-111px" opacity="80%" marginTop="-317px"  fontSize="12.4px" paddingTop="5px" textAlign="center" fontWeight="700" color="white" backgroundColor="#1D467C">{tag2.name}</Text> : null }
             */}
            <Link style={{width:"100%"}} to={`/details/${id}`}>
            <Image marginTop="12px"  height="100px" objectFit="cover" width="100%" src={image} alt="Imágen de la propiedad"/>
            </Link>
           <Text textAlign="center" width="80%"   noOfLines={2} fontSize={mobile < 750 ?"15.77px": "16px"} color="#181725">{title}</Text>
            <Text marginTop="-5px" fontSize={"18.7px"} fontWeight="700" color="black">{price &&`$  ${price.price} ${price.currency}`}</Text>
            
            
            <Container alignSelf="center" justifyContent="space-around" alignItems="center"  display="flex"  flexWrap="wrap">
            <Divider  borderColor="#A4A4A4" width={"100%"}/>
            <Text style={{ fontFamily:"Montserrat", fontWeight:700, color:"#000000", lineHeight:"18.78px", fontSize:"16.2px"}}>Roi 10% a 15%</Text>
            <Divider marginTop="1.2px" borderColor="#A4A4A4" width={"100%"}/>
            </Container>
  
            {suite_amount&&<Container  justifyContent="space-around" alignItems="center"  paddingX="8px" width="100%" display="flex">
               
                <HStack><Image src={rooms} color="red"  width="18px"/><Text fontSize="13.45px" color="#5B5B5B">{suite_amount} Cuartos</Text></HStack>
                
               <HStack><Image width="14px" color="red" src={mts}/><Text fontSize="13.45px" color="#5B5B5B">{surface.slice(0,3)}M2</Text></HStack>
            </Container>}
            <HStack paddingY="5px" >
                <Link to={`/details/${id}`} >
                    <Image width="40px" src={cardinfo} alt="Más info" marginRight="15px"/>
                </Link>
              
                <Image cursor="pointer" onClick={onOpenReportModal} width="40px" src={call} alt="Agregar al carrito"/>
                
            </HStack>
        
           <Box width={"100%"}>
           { props.search ? <Container borderBottomRadius="8px" padding="3px" backgroundColor={ !isChecked ? "#004A89" : "#091F40"} display="flex"  justifyContent="center" alignItems="center" marginBottom={"-1px"}>
                <Checkbox
                    color="white"
                    size="sm"
                    isDisabled={props.isCompareDisabled && !isChecked}
                    isChecked={isChecked}
                    onChange={(e) => {
                        props.handleCompare(e.target.checked, props.property);
                        props.isCompare();
                    }}
                >
                    <Text fontSize="12px" color="white">Comparar</Text>
                </Checkbox>
            </Container> : null} 
            <ContactModal phoneCallReducer={props.phonecallReducer} phonecall={props.phonecall} isOpen={isOpenReportModal}  onClose={onCloseReportModal}/>
        </Box>
        </Box>
    )
}
