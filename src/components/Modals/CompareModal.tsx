import React, { useCallback, useEffect, useMemo } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Image,
    Text,
    HStack,
    VStack,
    Container,
    Box
  } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import PropertyInterface from '../../interfaces/Property'
import { useHistory } from 'react-router-dom'

interface CompareModalProps {
  propertyList: Array<PropertyInterface | undefined>,
  developmentList: Array<PropertyInterface | undefined>,
  isOpen: boolean,
  onClose: () => void,
  clearAll: () => void,
  removeProperty: (id: number) => void,
 
}

export const CompareModal = ({removeProperty, propertyList, isOpen, onClose, clearAll,developmentList}: CompareModalProps) => {
  let mobile = window.innerWidth
  const history = useHistory();
  let path = window.location
  let dev = path.pathname.substring(0,5)
  console.log(dev, "AAAAAAAAAAAAAAAAAAAAA")
  const goToCompare = useCallback((id1: number | undefined, id2: number | undefined, id3: number | undefined, id4: number | undefined) => {
    let direction = "/compare?"
    if (dev!=="/deve"){
    if (id1) {
      direction += `property_1=${id1}${id2 || id3 || id4 ? "&" : ""}`;
    }
    if (id2) {
      direction += `property_2=${id2}${id3 || id4 ? "&" : ""}`;
    }
    if (id3) {
      direction += `property_3=${id3}${id4 ? "&" : ""}`;
    }
    if (id4) {
      direction += `property_4=${id4}`;
    }}
    else{
      if (id1) {
        direction += `development_1=${id1}${id2 || id3 || id4 ? "&" : ""}`;
      }
      if (id2) {
        direction += `development_2=${id2}${id3 || id4 ? "&" : ""}`;
      }
      if (id3) {
        direction += `development_3=${id3}${id4 ? "&" : ""}`;
      }
      if (id4) {
        direction += `development_4=${id4}`;
      }
    }
 
    history.push(direction);
  }, [history]);

  const propertyQuantity = useMemo(() => {
    if(propertyList.length){
    return propertyList.reduce((acc: number, val: PropertyInterface | undefined) => val ? acc + 1 : acc, 0);
 }  
    else{
      return developmentList.reduce((acc: number, val: PropertyInterface | undefined) => val ? acc + 1 : acc, 0);
    }
  }, [propertyList]);

  useEffect(() => {
    
    if (propertyQuantity < 1) {
      onClose();
    }
  }, [propertyQuantity, onClose]);

    return (
      mobile > 750 ?
        <Box width="360px" position="fixed" bottom={"37%"} right={"0%"} display={isOpen ? "flex" : "none"} zIndex={"9"} >
        
        <Box borderRadius="15px 15px 0px 0px"  display={"flex"} flexDirection={"column"} width="100%">
          <Container paddingY="10px" bgGradient="linear-gradient(304.8deg, #08222F 8.45%, #1D467C 78.33%);" borderRadius="15px 15px 0px 0px">
              <HStack justifyContent="space-between">
                  <Text fontSize={mobile < 750 ? "9px" : "12px"} fontWeight="400" width="80%" color="white" lineHeight="16px" fontFamily="Montserrat">
                  Puedes comprar hasta 4 propiedades
                  </Text>
                  <Box  backgroundColor="white" borderRadius="50%" minHeight="30px" minWidth="30px">
                   <Text paddingBottom={"2px"} fontSize="20px"  fontWeight="700" color="#1D467C" textAlign="center" >{propertyQuantity}</Text>
               </Box>
              </HStack>
            </Container>
          <Container backgroundColor="white">
            <VStack paddingTop="10px">
            {developmentList?.map((development: PropertyInterface | undefined) => {
                return (
                  development && 
                  <HStack width="100%">
                    <Container display="flex" borderBottom="1px solid grey" paddingBottom="10px">
                      <Image src={development?.photos[0].thumb} w="71px" height="50px"/>
                      <VStack  paddingLeft="13px" width="100%" alignItems="flex-start" display="flex">
                            <Text  maxHeight={"20px"} fontSize={mobile < 750 ? "12.56px" : "12px"} noOfLines={2} textTransform="none" color="#181725">{development?.publication_title}</Text>
                            { development?.operations && <Text fontSize={mobile < 750 ? "14.46px" : "14px"} textTransform="none" fontWeight="700" color="black"  > {`$${development?.operations[0]?.prices[0]?.price} ${development?.operations[0]?.prices[0]?.currency}`}</Text>}
                      </VStack>
                    </Container>
                    <CloseIcon onClick={() => removeProperty(development?.id)} color="black" cursor="pointer" />
                </HStack>
                )
              })}
              {propertyList?.map((property: PropertyInterface | undefined) => {
                return (
                  property && 
                  <HStack width="100%">
                    <Container display="flex" borderBottom="1px solid grey" paddingBottom="10px">
                      <Image src={property?.photos[0].thumb} w="71px" height="50px"/>
                      <VStack  paddingLeft="13px" width="100%" alignItems="flex-start" display="flex">
                            <Text  maxHeight={"20px"} fontSize={mobile < 750 ? "12.56px" : "12px"} noOfLines={2} textTransform="none" color="#181725">{property?.publication_title}</Text>
                            { property?.operations && <Text fontSize={mobile < 750 ? "14.46px" : "14px"} textTransform="none" fontWeight="700" color="black"  > {`$${property?.operations[0]?.prices[0]?.price} ${property?.operations[0]?.prices[0]?.currency}`}</Text>}
                      </VStack>
                    </Container>
                    <CloseIcon onClick={() => removeProperty(property?.id)} color="black" cursor="pointer" />
                </HStack>
                )
              })}
            </VStack>
          </Container>
          <Container backgroundColor="white">
              <HStack margin="0 auto">
              <Button disabled={propertyQuantity < 2} onClick={() => propertyList.length?goToCompare(propertyList[0]?.id, propertyList[1]?.id, propertyList[2]?.id, propertyList[3]?.id):goToCompare(developmentList[0]?.id, developmentList[1]?.id, developmentList[2]?.id, developmentList[3]?.id)} display="flex" height="28px" width="132px" margin="10px auto" fontSize="13px" fontWeight="500" textAlign="center" border="2px solid #104B86" color="#104B86" backgroundColor="white" borderRadius="33px">Comparar</Button>
              <Button onClick={() => {
                clearAll();
                onClose();
                }} display="flex" height="28px" width="132px" margin="10px auto" fontSize="13px" fontWeight="500" textAlign="center" color="#1D467C" textDecoration="underline" backgroundColor="white" borderRadius="33px">Borrar todo</Button>
              </HStack>
          </Container>
        </Box>
      </Box>
      :
  <Box width="100%" position="fixed" bottom={"3%"} left={"0"} display={isOpen ? "flex" : "none"} zIndex={"9"} >
        
        <Box borderRadius="15px 15px 0px 0px"  display={"flex"} flexDirection={"column"} width="100%">
          <Container paddingY="10px" bgGradient="linear-gradient(304.8deg, #08222F 8.45%, #1D467C 78.33%);" borderRadius="15px 15px 0px 0px">
              <HStack justifyContent="space-between">
                  <Text fontSize={mobile < 750 ? "9px" : "12px"} fontWeight="400" width="80%" color="white" lineHeight="16px" fontFamily="Montserrat">
                  Puedes comprar hasta 4 propiedades
                  </Text>
                  <Box  backgroundColor="white" borderRadius="50%" minHeight="30px" minWidth="30px">
                   <Text paddingBottom={"2px"} fontSize="20px"  fontWeight="700" color="#1D467C" textAlign="center" >{propertyQuantity}</Text>
               </Box>
              </HStack>
            </Container>
          <Container backgroundColor="white">
            <VStack paddingTop="10px">
              {propertyList?.map((property: PropertyInterface | undefined) => {
                return (
                  property && 
                  <HStack width="100%">
                    <Container display="flex" borderBottom="1px solid grey" paddingBottom="10px">
                      <Image src={property?.photos[0].thumb} w="71px" height="50px"/>
                      <VStack  paddingLeft="13px" width="100%" alignItems="flex-start" display="flex">
                            <Text  maxHeight={"20px"} fontSize={mobile < 750 ? "12.56px" : "12px"} noOfLines={2} textTransform="none" color="#181725">{property?.publication_title}</Text>
                            { property?.operations && <Text fontSize={mobile < 750 ? "14.46px" : "14px"} textTransform="none" fontWeight="700" color="black"  > {`$${property?.operations[0]?.prices[0]?.price} ${property?.operations[0]?.prices[0]?.currency}`}</Text>}
                      </VStack>
                    </Container>
                    <CloseIcon onClick={() => removeProperty(property?.id)} color="black" cursor="pointer" />
                </HStack>
                )
              })}
            </VStack>
          </Container>
          <Container backgroundColor="white">
              <HStack margin="0 auto">
              <Button disabled={propertyQuantity < 2} onClick={() => propertyList.length? goToCompare(propertyList[0]?.id, propertyList[1]?.id, propertyList[2]?.id, propertyList[3]?.id): goToCompare(developmentList[0]?.id, developmentList[1]?.id, developmentList[2]?.id, developmentList[3]?.id) } display="flex" height="28px" width="132px" margin="10px auto" fontSize="13px" fontWeight="500" textAlign="center" border="2px solid #104B86" color="#104B86" backgroundColor="white" borderRadius="33px">Comparar</Button>
              <Button onClick={() => {
                clearAll();
                onClose();
                }} display="flex" height="28px" width="132px" margin="10px auto" fontSize="13px" fontWeight="500" textAlign="center" color="#1D467C" textDecoration="underline" backgroundColor="white" borderRadius="33px">Borrar todo</Button>
              </HStack>
          </Container>
        </Box>
      </Box>
    )
}
