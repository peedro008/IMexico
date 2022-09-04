import { Box, Center, Container, Divider, HStack, Image,  Text, useDisclosure, VStack } from '@chakra-ui/react'
import GifDetailMobile from "../../images/GifDetailMobile.gif"
import TRIANGLEred from "../../images/TRIANGLEred.png"
import React, {useMemo, useState} from 'react'
import { Button } from '@chakra-ui/react'
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import {
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react'


import AGENDAR from "../../images/AGENDAR.png"
import share from '../../images/share.svg'
import rooms from '../../images/rooms.svg'
import baths from '../../images/baths.svg'
import beds from '../../images/beds.svg'
import mts from '../../images/mts.svg'
import gps from '../../images/gps.svg'
import PropertyInterface from '../../interfaces/Property'
import { Link } from 'react-router-dom'
import { PropCardController } from '../../controllers/PropCard'
import ScrollAnimation from 'react-animate-on-scroll'
import { CompareModal } from '../Modals/CompareModal'
import { ContactModal } from '../Modals/ContactModal'
import arenaDetails from "../../images/arenaDetails.png"
import { Spinner } from '../Spinner/Spinner.component'

interface DetailsProps {
  selectedProperty: any,
  loading: boolean,
  propertyList : PropertyInterface[],
  phonecallReducer: any
  phonecall:(name:string, email:string, phone:string, date:string, hour:string, reason:string )=>void,
}

export const Details = ({phonecall, selectedProperty, phonecallReducer, loading, propertyList}: DetailsProps) => {
    const [destacado, setDestacado] = useState(true)
    const [venta, setVenta] = useState(true)
    const [preventa, setPreventa] = useState(true)
    const [agendar, setAgendar] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { 
      isOpen: isOpenReportModal, 
      onOpen: onOpenReportModal, 
      onClose: onCloseReportModal 
  } = useDisclosure()
   
    let mobile = window.innerWidth
    const [property1, setProperty1] = useState<PropertyInterface>();
    const [property2, setProperty2] = useState<PropertyInterface>();
    const [property3, setProperty3] = useState<PropertyInterface>();
    const [property4, setProperty4] = useState<PropertyInterface>();
      
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

    


    const detailedAddress = useMemo(() => {
      return selectedProperty?.location?.full_location?.split(" | ");
    }, [selectedProperty]);

    const country = detailedAddress?.length && detailedAddress[0];
    const state = detailedAddress?.length && detailedAddress[1];
    const city = detailedAddress?.length && detailedAddress[2];
    const area = detailedAddress?.length && detailedAddress[3];

    return (
        <>
            {loading ? <Spinner/> : 
            
              <Box backgroundColor="white"  >
              <Box  flexDirection={"column"} width="100%" justifyContent="center" alignItems="center" display="flex">
                <Box   borderBottom="20px solid #C4C4C4" borderLeft="20px solid transparent" borderRight="20px solid transparent"  display="flex"  backgroundColor="white" boxShadow='inset 4.82112px 4.82112px 24.1056px rgba(0, 0, 0, 0.25)'>
                </Box>
              <Box  maxWidth="85vw" marginBottom="20px" paddingY="10px" flexDirection="column" boxShadow='inset 4.82112px 4.82112px 24.1056px rgba(0, 0, 0, 0.25)' display="flex"  borderRadius="16.37px" height="auto" width="95%" backgroundColor="#e6e6e6">
                <HStack display="flex" justifyContent="center" marginY="15px" >
                  { venta ? <Text  paddingX="9px" opacity="80%" fontSize="10px" fontWeight="700" color="white" backgroundColor="#1D467C" height="24px" width="auto" textAlign="center" paddingTop="5px">Disponible</Text> : null }
                  {/* { preventa ? <Text paddingX="9px"  opacity="80%" fontSize="10px" fontWeight="700" color="white" backgroundColor="#E81D2C" height="24px" width="auto" textAlign="center" paddingTop="5px">Listo para entregar</Text> : null }
                  { destacado ? <Text paddingX="9px"  opacity="80%" fontSize="10px" fontWeight="700" color="white" backgroundColor="#BD8F15" height="24px" width="auto" textAlign="center" paddingTop="5px">Entregado</Text> : null } */}
                </HStack>
                <Container maxWidth="95%" textAlign="center" >
                  <Text as="h3" fontWeight="400" fontFamily="Raleway" noOfLines={2} overflow={"hidden"} fontSize="22.61px"  color="#000000"  textAlign="center">{selectedProperty?.publication_title}</Text>
                  {selectedProperty?.operations&&<Text as="h3" fontSize="25.84px"  fontFamily="Raleway" fontWeight="700" color="#000000" textAlign="center">$ {selectedProperty?.operations?.length && selectedProperty?.operations[0]?.prices[0]?.price} {selectedProperty?.operations?.length && selectedProperty?.operations[0]?.prices[0]?.currency}</Text>}
                  <Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>
                </Container>
                
                <Text margin="3px" fontFamily="Montserrat" fontWeight="700" color="##000000" lineHeight="18.64px" fontSize="18.2px" textAlign="center">Roi 10% a 15%</Text>
                <Container maxWidth="95%"  >
                  <Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>
                  <Text paddingX="10px" fontFamily="Raleway" lineHeight="18.64px" justifyContent="center" fontWeight={400} display="flex" fontSize="16px" color="#181725"><Image paddingRight="5px" src={gps}  alt="Ubicación"/>{selectedProperty?.address}</Text>
                  <Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>
                  <Container  paddingX="1 rem" maxWidth="60%"  justifyContent="space-between" alignItems="center" margin="5px auto" minWidth="100%" display="flex" flexWrap="wrap">
                    <Container flexDirection="row" display="flex" justifyContent="space-between" >
                    {selectedProperty?.suite_amount ?<HStack><Image src={rooms}/><Text fontSize="15px">{selectedProperty?.suite_amount} Cuartos</Text></HStack> : null}
                        {selectedProperty?.bathroom_amount ? <HStack><Image src={baths}/><Text fontSize="15px">{selectedProperty?.bathroom_amount} Baños</Text></HStack> : null}
                        </Container>
                        <Container flexDirection="row" justifyContent="space-between" display="flex">
                        {selectedProperty?.suite_amount ? <HStack><Image src={beds}/><Text fontSize="15px">{selectedProperty?.suite_amount} Dormitorios</Text></HStack>: null}
                        {selectedProperty?.total_surface ?<HStack><Image src={mts}/><Text fontSize="15px">{selectedProperty?.total_surface} {selectedProperty?.surface_measurement}</Text></HStack>: null}
                        </Container>
                         </Container>
                         {selectedProperty?.total_surface ?<Divider  border="0.5px" borderColor={"#7A7A7A"} marginY="8px" backgroundColor="#7A7A7A"/>: null}
                    
            
                      
                  
                </Container>


                </Box>
                </Box>
                <Box backgroundColor="#E5E5E5" paddingY="10px">
                <Accordion allowToggle >
                    <AccordionItem margin="2" borderRadius={7} backgroundColor={"white"}>
                        <AccordionButton _expanded={{ bg: '#091F40', color: 'white' }}>
                          <Box flex='1' textAlign='left'>
                            Descripción
                          </Box>
                          <AccordionIcon color="#1D467C"/>
                        </AccordionButton>
                      <AccordionPanel fontSize="13px" pb={4}>
                        {selectedProperty?.description}
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem margin="2" borderRadius={7} backgroundColor="white">
                        <AccordionButton _expanded={{ bg: '#091F40', color: 'white' }}>
                          <Box flex='1' textAlign='left'>
                            Dirección
                          </Box>
                          <AccordionIcon color="#1D467C"/>
                        </AccordionButton>
                      <AccordionPanel pb={4}>
                        <HStack justifyContent="space-between">
                          <VStack alignItems="flex-start">
                          <Text fontSize="13px" color="#545454">Dirección: {selectedProperty?.address}</Text>
                          <Text fontSize="13px" color="#545454">Ciudad: {city}</Text>
                          <Text fontSize="13px" color="#545454">Área: {area}</Text>
                          </VStack>
                          <VStack alignItems="flex-start">
                          <Text fontSize="13px" color="#545454">Estado: {state}</Text>
                          <Text fontSize="13px" color="#545454">País: {country}</Text>
                          </VStack>
                        </HStack>
                        <Container boxSize="220px" margin="15px auto" display="flex" justifyContent="center" alignItems="center">
                        <div className="mapouter"><div className="gmap_canvas"><iframe width="220" height="220" id="gmap_canvas" src={`https://maps.google.com/maps?q=${selectedProperty?.geo_lat},${selectedProperty?.geo_long}&output=embed`} frameBorder="0" scrolling="no" title="map"></iframe></div></div>
                        </Container>
                        <Text fontSize="13px" color="#1D467C" textDecoration="underline" textAlign="center"><a href="https://maps.google.com/maps?q=calle%20sur%208%20Tulum">Abrir en Google Maps</a></Text>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem margin="2" borderRadius={7} backgroundColor="white">
                        <AccordionButton _expanded={{ bg: '#091F40', color: 'white' }}>
                          <Box flex='1' textAlign='left'>
                            Detalles
                          </Box>
                          <AccordionIcon color="#1D467C"/>
                        </AccordionButton>
                      <AccordionPanel pb={4}>
                      <VStack alignItems="flex-start">
                          <Text fontSize="13px" color="#545454"><strong>ID de la propiedad:</strong> {selectedProperty?.id}</Text>
                          <Text fontSize="13px" color="#545454"><strong>Precio:</strong> $ {selectedProperty?.operations?.length && selectedProperty?.operations[0]?.prices[0]?.price} {selectedProperty?.operations?.length && selectedProperty?.operations[0]?.prices[0]?.currency}</Text>
                          <Text fontSize="13px" color="#545454"><strong>Tamaño de la propiedad:</strong> {selectedProperty?.total_surface} {selectedProperty?.surface_measurement}</Text>
                          <Text fontSize="13px" color="#545454"><strong>Cuartos:</strong> {selectedProperty?.suite_amount}</Text>
                          <Text fontSize="13px" color="#545454"><strong>Dormitorios:</strong> {selectedProperty?.suite_amount}</Text>
                          <Text fontSize="13px" color="#545454"><strong>Baños:</strong> {selectedProperty?.bathroom_amount}</Text>
                          {/* <Text fontSize="13px" color="#545454"><strong>Tipo de estructura:</strong> No disponible</Text> */}
                          <Text fontSize="13px" color="#545454"><strong>No. de Pisos:</strong> {selectedProperty?.floors_amount}</Text>
                          </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem margin="2" borderRadius={7} backgroundColor="white">
                        <AccordionButton _expanded={{ bg: '#091F40', color: 'white' }}>
                          <Box flex='1' textAlign='left'>
                            Características
                          </Box>
                          <AccordionIcon color="#1D467C"/>
                        </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Text fontSize="13px" marginY="7px" fontWeight="700" color="#545454">Exterior</Text>
                        <UnorderedList>
                          {selectedProperty?.tags?.map((tag: any, index: number) => {
                            if (tag?.type === 1) {
                              return <ListItem key={index} fontSize="13px" color="#545454">{tag?.name}</ListItem>
                            } else return null;
                          })}
                        </UnorderedList>
                        <Text fontSize="13px" marginY="7px" fontWeight="700" color="#545454">General</Text>
                        <UnorderedList>
                          {selectedProperty?.tags?.map((tag: any, index: number) => {
                              if (tag?.type === 2) {
                                return <ListItem key={index} fontSize="13px" color="#545454">{tag?.name}</ListItem>
                              } else return null;
                          })}
                        </UnorderedList>
                        <Text fontSize="13px" marginY="7px" fontWeight="700" color="#545454">Fraccionamiento</Text>
                        <UnorderedList>
                          {selectedProperty?.tags?.map((tag: any, index: number) => {
                              if (tag?.type === 3) {
                                return <ListItem key={index} fontSize="13px" color="#545454">{tag?.name}</ListItem>
                              } else return null;
                          })}
                        </UnorderedList>
                        </AccordionPanel>
                    </AccordionItem>
              
                </Accordion>
                <Box borderRadius="0px 82.2098px 82.2098px 0px" display="flex" width="230px" marginTop="15px" height="95px" backgroundColor="white" justifyContent="flex-end">
                <ScrollAnimation  duration={1} animateIn="animate__bounceInLeft" >
                  
                  <Image  src={GifDetailMobile}/>
                    
                
                </ScrollAnimation>

                   
                </Box>
                <ScrollAnimation  duration={1} animateIn="animate__bounceInRight" >
                <Box display={"flex"} width={"max-content"} alignItems={"center"}  marginLeft="20px" flexDirection="column" >
                  <Image onClick={onOpenReportModal} width="29.23px" marginTop="10px"  src={TRIANGLEred}/>
                  <Image onClick={onOpenReportModal} display="flex"alignSelf={"flex-start"}  width="326px" marginTop="10px" src={AGENDAR}/>
                </Box>
                </ScrollAnimation>
                </Box>

                
               
                    
                     
            
            
                <Container height={"350px"} minWidth="100%" display="flex" paddingY="20px" padding="0" backgroundImage={arenaDetails} marginLeft="-3px"  backgroundSize="cover" flexDirection="column" marginBottom={"-4px"}>
                    <Text marginY={"20px"} textAlign="center" fontSize="17px" fontWeight="800" color="#1D467C">Tambien interesarte</Text>
                    
                
                   
                <Container minWidth="100%" display="flex" overflowX="scroll" padding="0"  flexDirection="column">
                  <Container  minWidth="100vw" padding={0}  display="flex" flexDirection="row">{loading ? <Center h="300px" w="100%"><Spinner /></Center> : propertyList.length>0 && propertyList?.map((property: any, index: number) => {
                    return (
                        <ScrollAnimation duration={2} animateIn="animate__fadeInUp">
                              <Container width="fit-content" height="fit-content" padding="0"><PropCardController property={property} selectedProperties={[property1, property2, property3, property4]} key={index} isCompareDisabled={isCompareDisabled} handleCompare={handleCompare} isCompare={onOpen} search />
                        </Container>
                        </ScrollAnimation>)})}
                  </Container> 
                  </Container>  
                    
                </Container>
                <CompareModal removeProperty={removeProperty} isOpen={isOpen} onClose={onClose} developmentList={[]} propertyList={[property1, property2, property3, property4]} clearAll={clearAll}/>
                <ContactModal phoneCallReducer={phonecallReducer} phonecall={phonecall} isOpen={isOpenReportModal}  onClose={onCloseReportModal}/>
              </Box>}
            
        </>
    )
}
 {/* <Link to={`/appointment/${selectedProperty.id}`}><Button width="100%" display="flex" margin="15px auto" fontSize="16px" fontWeight="700" color="white" backgroundColor="#1D467C" borderRadius="45px">Agendar cita</Button></Link> */}
       {/* <AccordionItem marginY="2" backgroundColor="white">
                        <AccordionButton _expanded={{ bg: '#091F40', color: 'white' }}>
                          <Box flex='1' textAlign='left'>
                            Plano de la propiedad
                          </Box>
                          <AccordionIcon color="#1D467C"/>
                        </AccordionButton>
                      <AccordionPanel pb={4}>
                       <Image src={croquis} Alt="Pano de la propiedad"/>
                      </AccordionPanel>
                    </AccordionItem> */}
                    {/* <AccordionItem marginY="2" backgroundColor="white">
                        <AccordionButton>
                          <Box flex='1' textAlign='left'>
                            Videos de la propiedad
                          </Box>
                          <AccordionIcon color="#1D467C"/>
                        </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Container display="flex" justifyContent="center">
                        <iframe width="320" height="170" src="https://www.youtube.com/embed/y9j-BL5ocW8" title="YouTube video player" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </Container>
                      </AccordionPanel>
                    </AccordionItem> */}
                       {/* <Text fontSize="13px" marginY="7px" fontWeight="700" color="#545454">Recreación</Text>
                        <UnorderedList>
                          <ListItem fontSize="13px" color="#545454">Alberca</ListItem>
                          <ListItem fontSize="13px" color="#545454">Gimnasio</ListItem>
                          <ListItem fontSize="13px" color="#545454">Jacuzzi</ListItem>
                          <ListItem fontSize="13px" color="#545454">Mascotas permitidas</ListItem>
                        </UnorderedList> */}
