import { Box, Button, Center, Container, HStack, Image,  Text, Select, Input, Accordion, Divider, AccordionItem, Checkbox, MenuList, AccordionButton, AccordionPanel, VStack, AccordionIcon} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import rooms from '../../images/rooms.svg'
import proptype  from '../../images/proptype.svg'
import baths from '../../images/baths.svg'
import location from "../../images/location.png"
import beds from '../../images/beds.svg'
import mts from '../../images/mts.svg'
import{ Spinner } from "../Spinner/Spinner.component"
import cardinfo from '../../images/info.svg'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import {
    ListItem,
    UnorderedList,
  } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'
import PropertyInterface from '../../interfaces/Property'

interface CompareProps {
  compareList: PropertyInterface[],
  loading: boolean,
}

export const CompareDesktop = ({compareList, loading}: CompareProps) => {
  let mobile = window.innerWidth
  console.log(compareList)
  const [details, setDetails] = useState({
    Baños:false,
    Ubicación:false,
    Dormitorios:false,
    SupTotal:false,
    SupTer:false,
    SupCub:false
  })

  return (
    <>
    {loading ? <Center h="300px"><Spinner /></Center> : 
      <Container margin="0" minWidth="100%"  maxWidth="100vw" padding="0" backgroundColor={"#FFFFFF"}>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}  height="50px" background="radial-gradient(87.09% 248.88% at 2.35% 100%, #014198 0%, #0070E0 100%)" marginBottom="20px">
          {/* <Link to="/search">
            <ChevronLeftIcon  boxSize="30px" color="#FFFFFF"/></Link> */}
          <Text   justifySelf="center" display={"flex"} fontSize="17px" fontWeight="700" color="#FFFFFF">Estás comparando los siguientes productos</Text>
        </Box>
        <Container display="flex" flexDirection="column" margin="0"  alignItems="flex-start" minWidth="100%">
          <Container display="flex" minWidth="30%" margin="0"padding="0" alignItems="flex-start">
            <Box width="100%" justifyContent="flex-start" display={"flex"}>
              <Accordion allowToggle width="283.34px">
                <AccordionItem>
                  <AccordionButton justifyContent="space-between">
                    <Text fontSize="11px" noOfLines={1}>Agrega detalles al comparador</Text> 
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel width="100%" background="white" > 
                    <HStack justifyContent="space-between" width="100%"> 
                      <VStack alignItems="flex-start" width="100%">
                        <Box justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
                          <Text>Baños</Text><Checkbox onChange={(e:any)=>setDetails({...details, Baños: !details.Baños})}/>
                        </Box>
                        <Box justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
                          <Text>Ubicación</Text><Checkbox onChange={(e:any)=>setDetails({...details, Ubicación: !details.Ubicación})}/>
                        </Box>
                        <Box justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
                          <Text>Dormitorios</Text><Checkbox  onChange={(e:any)=>setDetails({...details, Dormitorios: !details.Dormitorios})}/>
                        </Box>
                        <Box justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
                          <Text>Superficie total</Text><Checkbox onChange={(e:any)=>setDetails({...details, SupTotal: !details.SupTotal})}/>
                        </Box>
                        <Box justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
                          <Text>Superficie del terreno</Text><Checkbox onChange={(e:any)=>setDetails({...details, SupTer: !details.SupTer})}/>
                        </Box>
                        <Box justifyContent="space-between" display="flex" flexDirection={"row"} width="100%">
                          <Text>Superficie cubierta</Text><Checkbox onChange={(e:any)=>setDetails({...details, SupCub: !details.SupCub})}/>
                        </Box>
                      </VStack>   
                    </HStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Container>
          
            <Container minWidth="min-content" display="flex" overflow={mobile < 750 ? "scroll": "unset"}  padding="0" alignItems="center"  >
              <Table variant="simple" colorScheme="blackAlpha" marginBottom={"60px"}>
                <Thead>
                  <Tr>
                  {compareList?.map((property: any) => {
                    return (
                      <Th alignItems={"center"}> 
                      <Box width="240px" display="flex" alignItems={"center"} flexDirection={"column"}>
                      
                      
                      <Text fontFamily={"Raleway"} fontSize="16px" textAlign="center" noOfLines={2} textTransform="none" fontWeight="800"  color="#181725">{property.publication_title}</Text>
                      {property?.operations?.length &&<Text fontFamily={"Raleway"}  marginY="10px" display="flex" fontSize="20.29px" textAlign="center" fontWeight="500" color="black" >{`$${property?.operations?.length && property.operations[0].prices[0].price} ${property?.operations?.length && property.operations[0].prices[0].currency}`}</Text>}
                      <Image margin="0 auto" height={"138px"} minWidth={"200px"}  src={property?.photos?.length ? property?.photos[0].thumb : ""}/>
                      <Link  to={`/details/${property.id}`}> <Button marginTop="10px"display="flex" textAlign={"center"} fontSize="14px" height="27.16px" width="166px" fontWeight="500" color="white" backgroundColor="#FB9F34" borderRadius="42.51px" >Ver detalles</Button></Link>
                      </Box>
                      </Th>
                    )
                    })
                  }
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                  {
                    compareList?.map((property: PropertyInterface) => {
                    return(
                      <Td>
                        <Box  width="240px" display="flex" flexDirection="column" alignItems="center">
                          <Text  marginBottom={"10px"} fontFamily="Montserrat" fontSize="26.51px" fontWeight="700">10% a 15%</Text>
                          <Text fontFamily="Montserrat" fontSize="20.19px" fontWeight="500">ROI</Text>
                        </Box>
                      </Td>)
                    })
                  } 
                  </Tr>

            

             

                {
                details.Dormitorios &&    
                <Tr>
                {compareList?.map((property: PropertyInterface) => {
                  return(
                    <Td>
                      <Box   width="240px" display="flex" flexDirection="column" alignItems="center">
                      <Image boxSize="60px" src={beds}/>
                        <Text fontFamily="Montserrat" fontSize="13px" fontWeight="600">{property.suite_amount} Dormitorios</Text>
                      </Box>
                    </Td>)
                  })
                }
                </Tr>
                }

              <Tr>
              {
                compareList?.map((property: PropertyInterface) => {
                  return(
                    <Td>
                      <Box   width="240px" display="flex" flexDirection="column" alignItems="center">
                      <Image boxSize="60px" src={proptype}/>
                        <Text marginTop="4px" fontFamily="Montserrat" fontSize="13px" fontWeight="600">{}Departamento</Text> {/*no anda el property.type.name */}
                      </Box>
                    </Td>
                  )})
              }
              </Tr>

              { 
              details.Baños &&  
              <Tr>
              { compareList?.map((property: PropertyInterface) => {
                return(
                  <Td>
                    <Box   width="240px" display="flex" flexDirection="column" alignItems="center">
                    <Image boxSize="60px" src={baths}/>
                      <Text marginTop="4px" fontFamily="Montserrat" fontSize="13px" fontWeight="600">{property.bathroom_amount} baños</Text>
                    </Box>
                  </Td>
                )})
              }
              </Tr>
              }

              {  
                details.SupTotal&&  
                <Tr>
                { compareList?.map((property: PropertyInterface) => {
                  return(
                    <Td>
                      <Box   width="240px" display="flex" flexDirection="column" alignItems="center">
                      <Image boxSize="60px" src={mts}/>
                        <Text marginTop="4px" fontFamily="Montserrat" fontSize="13px" fontWeight="600">{property.total_surface} M2</Text>
                      </Box>
                    </Td>
                  )})
                }
                </Tr>
              }
              {   details.SupCub&&  
              <Tr>
              { compareList?.map((property: PropertyInterface) => {
                return(
                  <Td>
                    <Box   width="240px" display="flex" flexDirection="column" alignItems="center">
                    <Image boxSize="60px" src={mts}/>
                      <Text marginTop="4px" fontFamily="Montserrat" fontSize="13px" fontWeight="600">{property.roofed_surface} M2</Text>
                    </Box>
                  </Td>
                )})
              }
              </Tr>
              }
              { details.SupTer&&  
              <Tr>
              { compareList?.map((property: PropertyInterface) => {
                return(
                  <Td>
                    <Box   width="240px" display="flex" flexDirection="column" alignItems="center">
                    <Image boxSize="60px" src={mts}/>
                      <Text marginTop="4px" fontFamily="Montserrat" fontSize="13px" fontWeight="600">{property.unroofed_surface} M2</Text>
                    </Box>
                  </Td>
                )})
              }

              </Tr>
              }

              { details.Ubicación&&  
              <Tr>
              { compareList?.map((property: PropertyInterface) => {
                return(
                  <Td>
                    <Box   width="240px" display="flex" flexDirection="column" alignItems="center">
                      <Image boxSize="60px" src={location}/>
                      <Text marginTop="4px" fontFamily="Montserrat" fontSize="13px" fontWeight="600" noOfLines={1}>{property.address}</Text>
                    </Box>
                  </Td>
                )})
              }
              </Tr>
              }
            </Tbody>
          </Table>
        </Container>  
      </Container>
          
      </Container>
      }
    </>
    )
}
