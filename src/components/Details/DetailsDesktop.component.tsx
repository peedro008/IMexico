import { Box, Center, Container, Divider, HStack, Image,  Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, {useMemo, useState} from 'react'
import cuadrados2VDesk from "../../images/cuadrados2VDesk.png"
import TRIANGLEred from "../../images/TRIANGLEred.png"
import sand from "../../images/sand.png"
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
import Palmera from "../../images/Palmera.png"
import PropertyInterface from '../../interfaces/Property'
import AGENDARdesk from "../../images/AGENDARdesk.png"
import { ContactModal } from '../Modals/ContactModal'
import ScrollAnimation from 'react-animate-on-scroll'
import GifDetailMobile from "../../images/GifDetailMobile.gif"
import { PropCardController } from '../../controllers/PropCard'
import { CompareModal } from '../Modals/CompareModal'
import { Spinner } from '../Spinner/Spinner.component'


interface DetailsProps {
  selectedProperty: any,
  loading: boolean,
  propertyReducer: any,
  propertyList : PropertyInterface[],
  phonecallReducer: any,
  phonecall:(name:string, email:string, phone:string, date:string, hour:string, reason:string )=>void,
}

export const DetailsDesktop = ({phonecall, phonecallReducer, propertyReducer, selectedProperty, loading, propertyList}: DetailsProps) => {
    const [destacado, setDestacado] = useState(true)
    const [venta, setVenta] = useState(false)
    const [preventa, setPreventa] = useState(true)
    const { 
      isOpen: isOpenReportModal, 
      onOpen: onOpenReportModal, 
      onClose: onCloseReportModal 
  } = useDisclosure()

    const detailedAddress = useMemo(() => {
      return selectedProperty?.location?.full_location?.split(" | ");
    }, [selectedProperty]);
  console.log(selectedProperty)
    const country = detailedAddress?.length && detailedAddress[0];
    const state = detailedAddress?.length && detailedAddress[1];
    const city = detailedAddress?.length && detailedAddress[2];
    const area = detailedAddress?.length && detailedAddress[3];
    const [property1, setProperty1] = useState<PropertyInterface>();
    const [property2, setProperty2] = useState<PropertyInterface>();
    const [property3, setProperty3] = useState<PropertyInterface>();
    const [property4, setProperty4] = useState<PropertyInterface>();
    const [agendar, setAgendar] = useState(false)

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

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            {loading ?  <Spinner/> : <Container minWidth={"100%"} padding={0}>
         
                <Box display="flex" flexDirection={"row"}>
                <Container  padding={0} >
                  <Box borderRadius="0px 82.2098px 82.2098px 0px" display="flex" width="251px" height="94px" justifyContent="flex-end" marginTop="71px" backgroundColor={"white"}>
                    <ScrollAnimation  duration={1} animateIn="animate__bounceInLeft" >
                      <Image   src={GifDetailMobile}/>
                    </ScrollAnimation>
                  </Box>
                  
                  <ScrollAnimation  duration={2} animateIn="animate__fadeInUp" >
                <Box display={"flex"} width={"199px"} marginY="20px" alignItems="center" flexDirection={"column"} marginLeft="110px"  >
                  <Image  width="29.23px"  src={TRIANGLEred}/>
                  <Box justifyContent={"center"} display="flex"   width="199px" marginTop="10px" backgroundImage={AGENDARdesk} filter="drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))" backgroundSize="cover" minHeight={"199px"}>
                    <Box _hover={{cursor:"pointer"}} color="white" onClick={onOpenReportModal} textAlign={"center"} display="flex" justifyContent={"center"} fontWeight="700" alignItems="center" fontSize="13px" marginTop="136px" borderWidth={"2px"} borderColor="white" background="radial-gradient(87.09% 248.88% at 2.35% 100%, #154383 0%, #2954A1 100%)" borderRadius={"45.1965px"} height="32px" width="157px">Agendar cita</Box>
                  </Box>

                </Box></ScrollAnimation>
                
                </Container>
                <Container minWidth="80%" padding="10px 120px">
                  <Accordion allowToggle >
                      <AccordionItem marginY="2" backgroundColor="white">
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
                      <AccordionItem marginY="2" backgroundColor="white">
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
                            {/* <Text fontSize="13px" color="#545454">CP: 77760</Text> */}
                            <Text fontSize="13px" color="#545454">País: {country}</Text>
                            </VStack>
                          </HStack>
                          <Container boxSize="220px" margin="15px auto" display="flex" justifyContent="center" alignItems="center">
                          <div className="mapouter"><div className="gmap_canvas"><iframe width="220" height="220" id="gmap_canvas" src={`https://maps.google.com/maps?q=${selectedProperty?.geo_lat},${selectedProperty?.geo_long}&output=embed`} frameBorder="0" scrolling="no" title="map"></iframe></div></div>
                          </Container>
                          
                        </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem marginY="2" backgroundColor="white">
                            <AccordionButton _expanded={{ bg: '#091F40', color: 'white' }}>
                              <Box flex='1' textAlign='left'>
                                Detalles
                              </Box>
                              <AccordionIcon color="#1D467C"/>
                            </AccordionButton>
                        <AccordionPanel pb={4}>
                        <VStack alignItems="flex-start">
                            <Text fontSize="13px" color="#545454"><strong>ID de la propiedad:</strong> {selectedProperty?.id}</Text>
                            {selectedProperty.operations&&<Text fontSize="13px" color="#545454"><strong>Precio:</strong> $ {selectedProperty?.operations?.length && selectedProperty?.operations[0]?.prices[0]?.price} {selectedProperty?.operations?.length && selectedProperty?.operations[0]?.prices[0]?.currency}</Text>}
                            <Text fontSize="13px" color="#545454"><strong>Tamaño de la propiedad:</strong> {selectedProperty?.total_surface} {selectedProperty?.surface_measurement}</Text>
                            <Text fontSize="13px" color="#545454"><strong>Cuartos:</strong> {selectedProperty?.suite_amount}</Text>
                            <Text fontSize="13px" color="#545454"><strong>Dormitorios:</strong> {selectedProperty?.suite_amount}</Text>
                            <Text fontSize="13px" color="#545454"><strong>Baños:</strong> {selectedProperty?.bathroom_amount}</Text>
                            {/* <Text fontSize="13px" color="#545454"><strong>Tipo de estructura:</strong> No disponible</Text> */}
                            <Text fontSize="13px" color="#545454"><strong>No. de Pisos:</strong> {selectedProperty?.floors_amount}</Text>
                            </VStack>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem marginY="2" backgroundColor="white">
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
                          {/* <Text fontSize="13px" marginY="7px" fontWeight="700" color="#545454">Recreación</Text>
                          <UnorderedList>
                            <ListItem fontSize="13px" color="#545454">Alberca</ListItem>
                            <ListItem fontSize="13px" color="#545454">Gimnasio</ListItem>
                            <ListItem fontSize="13px" color="#545454">Jacuzzi</ListItem>
                            <ListItem fontSize="13px" color="#545454">Mascotas permitidas</ListItem>
                          </UnorderedList> */}
                        </AccordionPanel>
                      </AccordionItem>
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
                          <AccordionButton _expanded={{ bg: '#091F40', color: 'white' }}>
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
                  </Accordion>
                  </Container>
                </Box>
                
                <Box height={"464px"} width="100%" backgroundImage={sand} backgroundSize="cover" display="flex" flexDirection={"column"}  alignItems={"center"}>
                
                <Text fontSize={"20px"} fontWeight={800} color="#1D467C" textAlign={"center"} marginTop="30px">También puede interesarte</Text>
                
                 <Box display="flex" flexDirection={"row"} alignItems="center" height="100%">
                   {propertyReducer?.fetching ? <Center h="300px" w="100%"><Spinner /></Center> : 
                   propertyList && propertyList?.slice(0, 3)?.map((property: any, index: number) => {
                    return (
                        <ScrollAnimation duration={2} animateIn="animate__fadeInUp">
                          <PropCardController property={property} selectedProperties={[property1, property2, property3, property4]} key={index} isCompareDisabled={isCompareDisabled} handleCompare={handleCompare} isCompare={onOpen} search />
                        </ScrollAnimation>
                    )
                })
              
                } </Box>
                 
                </Box>
                <ContactModal phoneCallReducer={phonecallReducer} phonecall={phonecall} isOpen={isOpenReportModal}  onClose={onCloseReportModal}/>
                <CompareModal removeProperty={removeProperty} isOpen={isOpen} onClose={onClose} developmentList={[]} propertyList={[property1, property2, property3, property4]} clearAll={clearAll}  />
            </Container>}
        </>
    )
}
