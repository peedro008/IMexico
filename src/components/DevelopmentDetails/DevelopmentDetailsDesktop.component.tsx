import {  Container, Text, HStack, Image, Menu, MenuButton, MenuList, MenuItem, Button, Box, Divider, Spinner, Center, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import gpsRed from '../../images/gpsRed.svg'
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
export const DevelopmentDetailsDesktop = (props: any) => {
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
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
    console.log(props)
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
<>
<Box backgroundColor="#FFFFFF" paddingTop={"20px"}>
     <Box display={"flex"}>
                <Box   paddingLeft={"118px"} minHeight={"500px"} paddingTop="50px" display="flex" flexDirection={"row"}>
               
                <Box marginBottom="20px" paddingY="10px" paddingBottom="20px" flexDirection="column" boxShadow='inset 4.821115016937256px 4.821115016937256px 24.105573654174805px 0px #0000004e' display="flex"  borderRadius="16.37px" height="max-content" minHeight={"250px"} width="310px" backgroundColor="#e6e6e6 ">
               
                <Container  maxWidth="95%" textAlign="center" display="flex" flexDirection={"column"} justifyContent="space-between" >
                 <Text fontSize={"25px"} fontWeight="700" color="#1D467C">{title}</Text>
                 <Text fontSize={"17px"} fontWeight="400" color="#1D467C">{subTitle}</Text>
                  <Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>
                  <Text paddingX="7.6px" fontSize={"15px"} fontWeight="400"  display="flex" flexDirection={"row"}><Image paddingX="5px" src={gpsRed}  alt="Ubicación"/>{address}</Text>
                  <Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>
                  <Text paddingX="15px" textAlign={"left"} fontSize={"15px"} fontWeight="700" >{description}</Text>
                  {description?<Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>:<></>}
                  <Text paddingX="15px" textAlign={"left"} fontSize={"15px"} fontWeight="700" >Propiedades en construcción: {numProp}</Text>
                  <Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>
                  <Text paddingX="15px" textAlign={"left"} fontSize={"15px"} fontWeight="700" >Finalizará su construcción:</Text>
                  <Text paddingX="15px" textAlign={"left"} fontSize={"15px"} fontWeight="500" >{CD}</Text>
                 
                </Container>
                


                </Box> 
               
                <Box marginTop="60px" marginLeft={"-8px"} transform="rotate(270deg)" width="25px" height="25px" borderTop="20px solid #C4C4C4" borderLeft="20px solid transparent" borderRight="20px solid transparent"  display="flex"  >
                
                </Box>  
                        
                </Box>
                <div style={{minWidth:"300px"}}>
           
                <Slider {...settings}>
            {props?.state?.photos.map((photo: any, index: number) => {
                        return <Image paddingLeft={"15px"} height={"480px"} objectFit="cover"  key={index}  src={photo.image} alt={photo.description} />
                    })}
            </Slider>
                
                 {/* <Carousel 
                    value={value}
                    onChange={onChange}
                    plugins={[
                        'centered',
                        'infinite',
                        {
                         resolve: slidesToShowPlugin,
                         options: {
                          numberOfSlides: 1,
                         },
                       },
                   
                     ]}> 
                    {photos?.map((photo: any, index: number) => {
                        return <Box marginX="15px"><Image height={"480px"} width={"auto"}  key={index}  src={photo.image} alt={photo.description} /></Box>
                    })}
                </Carousel> */}
            </div>
            
            
            </Box>
            <Box  display="flex" alignItems={"flex-end"} flexDirection="column">
            <Accordion allowToggle maxW={"765px"} >
                      <AccordionItem marginY="2" backgroundColor="white" >
                          <AccordionButton width="765px" _expanded={{ bg: '#091F40', color: 'white',}}>
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
            <Box width="100%" display="flex" flexDirection={"column"} paddingX="10%" marginBottom={"20px"}>
            <Text fontSize={"19px"} fontWeight="500" color="#545454">Propiedades</Text>
            <Divider width={"100%"} color="#7A7A7A" backgroundColor="#7A7A7A" border="1px solid #7A7A7A"/>
            </Box>
            <Container minWidth="100%" paddingX="8%" justifyContent="center" display="flex" flexWrap="wrap">
             {props?.loading ? <Center h="300px" w="100%"><Spinner /></Center> : props?.selectedDevelopment?.objects && props?.selectedDevelopment?.objects.map((property: any, index: number) => {
                 
                  return (
                      <ScrollAnimation key={index}animateOnce animateIn="animate__flipInX">
                          <Container width="fit-content" height="fit-content"  padding="10px"><PropCardController property={property} selectedProperties={[property1, property2, property3, property4]} key={index} isCompareDisabled={isCompareDisabled} handleCompare={handleCompare} isCompare={onOpen} search={true} />
                          </Container>
                      </ScrollAnimation>)
              })} </Container>
</Box>

<CompareModal removeProperty={removeProperty} isOpen={isOpen} onClose={onClose} developmentList={[]} propertyList={[property1, property2, property3, property4]} clearAll={clearAll}/>
                </>
    )
}