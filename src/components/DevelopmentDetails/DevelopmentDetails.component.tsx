import {  Container, Text, HStack, Image, Menu, MenuButton, MenuList, MenuItem, Button, Box, Divider, Spinner, Center, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Palmera from "../../images/Palmera.png"
import gps from '../../images/gps.svg'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import ScrollAnimation from 'react-animate-on-scroll';
import PropertyInterface from '../../interfaces/Property';
import { PropCardController } from '../../controllers/PropCard';
import { CompareModal } from '../Modals/CompareModal';
export const DevelopmentDetails = (props: any) => {
     const [property1, setProperty1] = useState<PropertyInterface>();
    const [property2, setProperty2] = useState<PropertyInterface>();
    const [property3, setProperty3] = useState<PropertyInterface>();
    const [property4, setProperty4] = useState<PropertyInterface>();
    const { isOpen, onOpen, onClose } = useDisclosure()  
  
    const clearAll = () => {
        setProperty1(undefined);
        setProperty2(undefined);
        setProperty3(undefined);
        setProperty4(undefined);
    }

    const removeProperty = (id: number) => {
        if (property1?.id === id) {
            setProperty1(undefined);
        } else if (property2?.id === id) {
            setProperty2(undefined);
        } else if (property3?.id === id) {
            setProperty3(undefined);
        } else if (property4?.id === id) {
            setProperty4(undefined);
        }
    }
    const isCompareDisabled = useMemo(() => {
        return !!(property1 && property2 && property3 && property4)
    }, [property1, property2, property3, property4]);
    const handleCompare = (checked: boolean, property: PropertyInterface) => {
        if (checked) { // if checkbox is checked
            if (!property1) {
                setProperty1(property);
            } else if (!property2) {
                setProperty2(property);
            } else if (!property3) {
                setProperty3(property);
            } else if (!property4) {
                setProperty4(property);
            }
        } else {
            if (property1 === property) {
                setProperty1(undefined);
            } else if (property2 === property) {
                setProperty2(undefined);
            } else if (property3 === property) {
                setProperty3(undefined);
            } else if (property4 === property) {
                setProperty4(undefined);
            }
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: false,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,

      };
      const address = props?.state?.address;
      const id = props.state?.id;
      const title = props?.state?.name;
      const subTitle = props?.state?.publication_title;
      const description = props?.state?.fake_address;
      const fullDescription = props?.state?.description;
      const numProp = props?.selectedDevelopment?.meta?.total_count;
      const CD = props?.state?.construction_date;
      return(
          <Box backgroundColor="#FFFFFF" >
          <div style={{paddingTop:"20px"}}>
                <Slider {...settings}>
                    
            {props?.state?.photos.map((photo: any, index: number) => {
                        return <Image paddingX="5px" objectFit={"cover"} minHeight="250px" maxHeight="250px" key={index}  src={photo.image} alt={photo.description} />
                   })}
            </Slider></div>
            <Box  flexDirection={"column"} width="100%" justifyContent="center" alignItems="center" display="flex">
                <Box   borderBottom="20px solid #C4C4C4" borderLeft="20px solid transparent" borderRight="20px solid transparent"  display="flex"  backgroundColor="white" boxShadow='inset 4.82112px 4.82112px 24.1056px rgba(0, 0, 0, 0.25)'>
                </Box>
              <Box  maxWidth="80vw" marginBottom="20px" paddingY="10px" flexDirection="column" boxShadow='inset 4.82112px 4.82112px 24.1056px rgba(0, 0, 0, 0.25)' display="flex"  borderRadius="16.37px" height="auto" width="95%" backgroundColor="#e6e6e6">
              <Container paddingY="10px" maxWidth="95%" textAlign="center"  >
                 <Text fontSize={"25px"} fontWeight="700" color="#1D467C">{title}</Text>
                 <Text fontSize={"17px"} fontWeight="400" color="#1D467C">{subTitle}</Text>
                  <Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>
                  <Text paddingX="7.6px" fontSize={"15px"} fontWeight="500" display="flex" flexDirection={"row"} ><Image paddingRight="5px" src={gps} color="red" alt="Ubicación"/>{address}</Text>
                  <Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>
                  <Text paddingX="15px" textAlign={"left"} fontSize={"15px"} fontWeight="700" >{description}</Text>
                  
                  {description?<Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>:<></>}
                  <Text paddingX="15px" textAlign={"left"} fontSize={"15px"} fontWeight="700" >Propiedades en construcción: {numProp}</Text>
                  <Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>
                  <Text paddingX="15px" textAlign={"left"} fontSize={"15px"} fontWeight="700" >Finalizará su construcción:</Text>
                  <Text paddingX="15px" textAlign={"left"} fontSize={"15px"} fontWeight="500" >{CD}</Text>
                  
                </Container>
              </Box>
              </Box>
              <Box  display="flex" alignItems={"center"} flexDirection="column">
            <Accordion allowToggle  width="85%" >
                      <AccordionItem marginY="2" backgroundColor="white" >
                          <AccordionButton _expanded={{ bg: '#091F40', color: 'white',}}>
                            <Box flex='1' textAlign='left'>
                              Descripción
                            </Box>
                            <AccordionIcon color="#1D467C"/>
                          </AccordionButton>
                        <AccordionPanel  fontSize="13px" pb={4}>
                          {fullDescription}
                        </AccordionPanel>
                      </AccordionItem>
            </Accordion>
            </Box>
            <Box width="100%" display="flex" flexDirection={"column"} paddingX="8%" paddingY={"20px"}>
            <Text fontSize={"19px"} fontWeight="500" color="#545454">Propiedades</Text>
            <Divider width={"100%"} color="#000000" backgroundColor="#000000" border="1px solid #000000"/>
            </Box>
            <Box>
            <Container minWidth="100%"  justifyContent="center" display="flex" flexWrap="wrap">
             {props?.loading ? <Center h="300px" w="100%"><Spinner /></Center> : props?.selectedDevelopment?.objects && props?.selectedDevelopment?.objects.map((property: any, index: number) => {
                 
                  return (
                      <ScrollAnimation key={index}animateOnce animateIn="animate__flipInX">
                          <Container width="fit-content" height="fit-content"  padding="5px"><PropCardController property={property} selectedProperties={[property1, property2, property3, property4]} key={index} isCompareDisabled={isCompareDisabled} handleCompare={handleCompare} isCompare={onOpen} search={true} />
                          </Container>
                      </ScrollAnimation>)
              })} </Container>
              <Image src={Palmera} position="relative" left="0" bottom={0}/></Box>
              <CompareModal removeProperty={removeProperty} isOpen={isOpen} onClose={onClose} developmentList={[]} propertyList={[property1, property2, property3, property4]} clearAll={clearAll}/>
          </Box>
    )
}