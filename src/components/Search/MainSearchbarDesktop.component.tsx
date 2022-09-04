import React, { useEffect, useMemo, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
    Container,
    Button,
    Box,
    Divider,
    Checkbox,
  } from '@chakra-ui/react'
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { TriangleDownIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'

import { BiTrash } from "react-icons/bi"
import { PriceSliderController } from '../../controllers/Search'
import { Link } from 'react-router-dom'
import PropertyTypeInterface from '../../interfaces/PropertyType'
import { CountryInterface } from '../../interfaces/Country'
import { useDispatch, useSelector } from 'react-redux'
import * as countryItemAction from '../../store/actions/countryItem.actions'
import * as locationAction from '../../store/actions/location.actions'
import DivisionInterface from '../../interfaces/Division'

interface MainSearchBarProps {
  country: string,
  propertyType: any,
  propertyTypeList: PropertyTypeInterface[],
  countryList: CountryInterface[],
  locationList: DivisionInterface[],
  areaList: DivisionInterface[],
  propertyTagList: any,
  handleFilter: (filterName: string, filterValue: number | number[] | string) => void,
  selectState: (id: number) => void,
  selectLocation: (id: number) => void,
  searchProperties: () => void
}

export interface AreaProp {
  count:         number;
  location_id:   number;
  location_name: string;
  parent_id:     number;
  parent_name:   string;
}


export const MainSearchbarDesktop = ({country, propertyType, propertyTagList, locationList,  searchProperties, propertyTypeList, countryList, areaList, handleFilter, selectLocation, selectState}: MainSearchBarProps)  => {

    const [countrySelected, setCountry] = useState<CountryInterface>();
    const dispatch = useDispatch()
    /* const countryItemReducer = useSelector((store: any) => store.countryItemReducer) */
    const locationReducer = useSelector((state: any) => state.locationReducer);


    useEffect(() => {
      /*  if (countrySelected?.id) */
         dispatch(countryItemAction.getById(14/* countrySelected?.id */))
         dispatch(locationAction.getByCountry(14 /* countrySelected?.id */))
     }, [countrySelected, dispatch]);

    /* const stateList = useMemo(() => {
    if (countryItemReducer.fetched) {
      console.log('states', countryItemReducer.data.states )
        return countryItemReducer.data.states;
    } else return [];
    }, [countryItemReducer.fetched, countryItemReducer.data]);   */

console.log(propertyType)
    return (
        <Box justifyContent="space-around" minWidth="100%" backgroundColor="white"  >
             <Box  paddingTop={"10px"} height={"60px"} position="relative" overflowY={"visible"} zIndex="9" backgroundColor={"#0074E8"} paddingX="50px" filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}>  
             <HStack justifyContent="space-between" height="80%" >
               
                <Box width="60%" height="100%" alignItems={"center"}  display="flex" flexDirection={"row"} justifyContent="space-between" marginLeft="4px">
                  <Menu>
                    <MenuButton  height={"30.17px"} width="150px" color="#5B5B5B" fontWeight="400" borderRadius={0} fontSize="13.18px" padding="7px" backgroundColor="white" as={Button} rightIcon={<TriangleDownIcon width="20px" color="#1D467C"/>}>
                      { propertyType.type? propertyType.type: "Tipo de propiedad" }
                    </MenuButton>
                    <MenuList maxH="300px" overflowY="auto" position="relative" zIndex="2">
                      {propertyTypeList?.map((propType: any, index: number) => {
                        return <MenuItem onClick={() => handleFilter("property_types", [propType.id])} key={index}>{propType.type} ({propType?.count})</MenuItem>
                      })}
                    </MenuList>
                </Menu>
               
                 
                   
                    </Box>
                    <Button onClick={searchProperties} height="33.19px" width="134px" filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} justifyContent="space-around" display="flex" margin="15px auto" fontSize="16px" fontWeight="500" color="white" backgroundColor="#FB9F34" borderRadius="45px" _hover={{bgGradient:"linear-gradient(180deg, #007BB8 0%, #1D467C 100%);"}} ><SearchIcon/>Buscar</Button>
                  </HStack>  
                </Box>
                {propertyTagList?.age?.length?
                    <HStack height="111px" justifyContent="space-around" width="80%">
                    <Menu>
                      <MenuButton filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}  width="248px" hieght="42px" overflow="hidden" color="white" fontWeight="700" position="relative" zIndex="1" borderRadius={"7px"} fontSize="14.59px" backgroundColor="#FB9F34" as={Button} rightIcon={<ChevronDownIcon color="white"/>} >
                        <SearchIcon/> Más filtros
                      </MenuButton>
                      <MenuList>
                        <Accordion allowToggle width="248px">
                         

                          <AccordionItem marginY="2" backgroundColor="white">
                            <AccordionButton paddingX="20px" >
                              <Box flex='1' textAlign='left'>
                                Ciudad
                              </Box>
                              <AccordionIcon color="#FB9F34"/>
                            </AccordionButton>
                              <MenuList maxH="300px" overflowY="auto">
                              {
                                locationReducer?.data[0]?.items.length > 0 ? locationReducer?.data[0]?.items.map((area: AreaProp) => {
                                  return (
                                    <AccordionPanel fontSize="13px" pb={4} key={area.location_id}>
                                      <MenuItem  onClick={() => handleFilter("location_id", area.location_id)}>{area.location_name}</MenuItem>
                                    </AccordionPanel>
                                  )  
                                }) : (
                                  <AccordionPanel fontSize="13px" pb={4}>
                                    <MenuItem>
                                      No hay resultados
                                    </MenuItem>
                                  </AccordionPanel>   
                                ) 
                              } 
                              </MenuList>
                          </AccordionItem>    

                          <AccordionItem marginY="2" backgroundColor="white">
                            <AccordionButton paddingX="20px">
                              <Box flex='1' textAlign='left'>
                                Características
                              </Box>
                              <AccordionIcon color="#FB9F34"/>
                            </AccordionButton>
                              <MenuList maxH="300px" overflowY="auto">
                                {
                                  propertyTagList.tags ? propertyTagList?.tags?.map((tag: any, index: number) =>{
                                    return (
                                      <AccordionPanel fontSize="13px" pb={4} key={index}>
                                        <MenuItem  onClick={() => handleFilter("tags", [tag.tag_id])}><Checkbox>{tag.tag_name}</Checkbox></MenuItem>
                                      </AccordionPanel>
                                    )  
                                  }) : (
                                    <AccordionPanel fontSize="13px" pb={4}>
                                      <MenuItem>No hay resultados</MenuItem>
                                    </AccordionPanel>
                                  )
                                }
                              </MenuList>
                          </AccordionItem>
                          <AccordionItem marginY="2" backgroundColor="white">
                            <AccordionButton paddingX="20px">
                              <Box flex='1' textAlign='left'>
                                Dormitorios
                              </Box>
                              <AccordionIcon color="#FB9F34"/>
                            </AccordionButton>
                              <MenuList maxH="300px" overflowY="auto">
                                {
                                  propertyTagList.suite_amount ? propertyTagList?.suite_amount?.map((suits: any, index: number) =>{
                                    return (
                                      <AccordionPanel fontSize="13px" pb={4} key={index}>
                                        <MenuItem  onClick={() => handleFilter("suite_amount", suits.amount)}>{suits.amount}</MenuItem>
                                      </AccordionPanel>
                                    )  
                                  }) : (
                                    <AccordionPanel fontSize="13px" pb={4}>
                                      <MenuItem>No hay resultados</MenuItem>
                                    </AccordionPanel>
                                  )
                                }
                              </MenuList>
                          </AccordionItem>
                          <AccordionItem marginY="2" backgroundColor="white">
                            <AccordionButton paddingX="20px">
                              <Box flex='1' textAlign='left'>
                                Baños
                              </Box>
                              <AccordionIcon color="#FB9F34"/>
                            </AccordionButton>
                              <MenuList maxH="300px" overflowY="auto">
                                {
                                  propertyTagList.bathroom_amount ? propertyTagList?.bathroom_amount?.map((bath: any, index: number) =>{
                                    return (
                                      <AccordionPanel fontSize="13px" pb={4} key={index}>
                                        <MenuItem  onClick={() => handleFilter("bathroom_amount", bath.amount)}>{bath.amount}</MenuItem>
                                      </AccordionPanel>
                                    )  
                                  }) : (
                                    <AccordionPanel fontSize="13px" pb={4}>
                                      <MenuItem>No hay resultados</MenuItem>
                                    </AccordionPanel>
                                  )
                                }
                              </MenuList>
                          </AccordionItem>
                          <AccordionItem marginY="2" backgroundColor="white">
                            <AccordionButton paddingX="20px">
                              <Box flex='1' textAlign='left'>
                                Superficie total
                              </Box>
                              <AccordionIcon color="#FB9F34"/>
                            </AccordionButton>
                              <MenuList maxH="300px" overflowY="auto">
                                {
                                  propertyTagList.total_surface ? propertyTagList?.total_surface?.map((surface: any, index: number) =>{
                                    return (
                                      <AccordionPanel fontSize="13px" pb={4} key={index}>
                                        <MenuItem  onClick={() => handleFilter("total_surface", [surface.range])}>{surface.range.replace(':', 'X')}</MenuItem>
                                      </AccordionPanel>
                                    )  
                                  }) : (
                                    <AccordionPanel fontSize="13px" pb={4}>
                                      <MenuItem>No hay resultados</MenuItem>
                                    </AccordionPanel>
                                  )
                                }
                              </MenuList>
                          </AccordionItem>
                          <AccordionItem marginY="2" backgroundColor="white">
                            <AccordionButton paddingX="20px">
                              <Box flex='1' textAlign='left'>
                                Superficie de terreno
                              </Box>
                              <AccordionIcon color="#FB9F34"/>
                            </AccordionButton>
                              <MenuList maxH="300px" overflowY="auto">
                                {
                                  propertyTagList.surface ? propertyTagList?.surface?.map((surface: any, index: number) =>{
                                    return (
                                      <AccordionPanel fontSize="13px" pb={4} key={index}>
                                        <MenuItem  onClick={() => handleFilter("surface", [surface.range])}>{surface.range.replace(':', 'X')}</MenuItem>
                                      </AccordionPanel>
                                    )  
                                  }) : (
                                    <AccordionPanel fontSize="13px" pb={4}>
                                      <MenuItem>No hay resultados</MenuItem>
                                    </AccordionPanel>
                                  )
                                }
                              </MenuList>
                          </AccordionItem>
                          <AccordionItem marginY="2" backgroundColor="white">
                            <AccordionButton paddingX="20px">
                              <Box flex='1' textAlign='left'>
                                Superficie cubierta
                              </Box>
                              <AccordionIcon color="#FB9F34"/>
                            </AccordionButton>
                              <MenuList maxH="300px" overflowY="auto">
                                {
                                  propertyTagList.roofed_surface ? propertyTagList?.roofed_surface?.map((surface: any, index: number) =>{
                                    return (
                                      <AccordionPanel fontSize="13px" pb={4} key={index}>
                                        <MenuItem  onClick={() => handleFilter("roofed_surface", [surface.range])}>{surface.range.replace(':', 'X')}</MenuItem>
                                      </AccordionPanel>
                                    )  
                                  }) : (
                                    <AccordionPanel fontSize="13px" pb={4}>
                                      <MenuItem>No hay resultados</MenuItem>
                                    </AccordionPanel>
                                  )
                                }
                              </MenuList>
                          </AccordionItem>
                        </Accordion> 
                        <Box display="flex" flexDirection="row" paddingX="20px">
                          <Button width="115px" height="32.82px" justifyContent="space-around" display="flex" margin="15px auto" fontSize="16px" fontWeight="500" color="white" backgroundColor="#1D467C" borderRadius="45px">Aplicar</Button>
                          <Button maxWidth="32.82px" height="32.82px" margin="15px auto" padding={0} backgroundColor="#E81D2C" borderRadius="50%"><BiTrash color="white" size="20" /></Button>
                        </Box>
                      </MenuList>
                    </Menu>
                    <PriceSliderController handleFilter={handleFilter}/>
                  
                    </HStack>:
                    <div/>}
                </Box>
    )
}









 {/* <Menu>
                  <MenuButton  color="#5B5B5B" fontWeight="400" borderRadius={0} fontSize="13px" padding="0" backgroundColor="white" as={Button} rightIcon={<TriangleDownIcon color="#1D467C"/>}>
                    { country }
                  </MenuButton>
                  <MenuList  maxH="300px" overflowY="auto">
                    {
                      countryList?.map((country: CountryInterface, index: number) => {
                        return <MenuItem 
                          key={index}
                          onClick={() => handleFilter("country", country.id)}
                        >
                          {country.name}
                        </MenuItem>
                      })
                    }
                  </MenuList>
                </Menu> */}


                 {/* <AccordionItem marginY="2" backgroundColor="white">
                            <AccordionButton>
                              <Box flex='1' textAlign='left'>
                                { countrySelected?.name ? countrySelected?.name : 'País' }
                              </Box>
                              <AccordionIcon color="#1D467C"/>
                            </AccordionButton>
                              <MenuList maxH="300px" overflowY="auto">
                                {
                                  countryList?.map((country: CountryInterface) => {
                                    return (
                                      <AccordionPanel fontSize="13px" pb={4}
                                      key={country.id} 
                                      >
                                        <MenuItem onClick={() => setCountry(country)}>
                                          {country.name}
                                        </MenuItem>
                                      </AccordionPanel>
                                    )
                                  })
                                }
                              </MenuList>
                          </AccordionItem>

                          <AccordionItem marginY="2" backgroundColor="white">
                            <AccordionButton>
                              <Box flex='1' textAlign='left'>
                                Estado
                              </Box>
                              <AccordionIcon color="#1D467C"/>
                            </AccordionButton>
                              <MenuList maxH="300px" overflowY="auto">

                                {
                                  stateList.length > 0 ? stateList?.map((state: DivisionInterface) => {
                                    return (
                                      <AccordionPanel fontSize="13px" pb={4} key={state.id} >
                                        <MenuItem onClick={() => selectState(state.id)}>
                                          {state.name}
                                        </MenuItem>
                                      </AccordionPanel>
                                    )
                                  }) : (
                                    <AccordionPanel fontSize="13px" pb={4}>
                                      <MenuItem>
                                        No hay resultados
                                      </MenuItem>
                                    </AccordionPanel>   
                                  ) 
                                }
                              </MenuList>
                          </AccordionItem>

                          <AccordionItem marginY="2" backgroundColor="white">
                            <AccordionButton>
                              <Box flex='1' textAlign='left'>
                                Área
                              </Box>
                              <AccordionIcon color="#1D467C"/>
                            </AccordionButton>
                              <MenuList maxH="300px" overflowY="auto">

                                {
                                  locationList.length > 0 ? locationList?.map((location: DivisionInterface) => {
                                    return (
                                      <AccordionPanel fontSize="13px" pb={4} key={location.id} >
                                          <MenuItem onClick={() => selectLocation(location.id)}>
                                            {location.name} 
                                          </MenuItem> 
                                      </AccordionPanel>
                                    )
                                  }) : (
                                    <AccordionPanel fontSize="13px" pb={4}>
                                      <MenuItem>
                                        No hay resultados
                                      </MenuItem>
                                    </AccordionPanel>   
                                  ) 
                                }
                              </MenuList>
                          </AccordionItem> */}