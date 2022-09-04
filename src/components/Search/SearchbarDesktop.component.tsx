import React, { useEffect, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
    Button,
    Box,
    Checkbox
  } from '@chakra-ui/react'
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { TriangleDownIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
/* import { AreaProp } from './MainSearchbarDesktop.component' */
import PropertyTypeInterface from '../../interfaces/PropertyType'
import { CountryInterface } from '../../interfaces/Country'
import DivisionInterface from '../../interfaces/Division'
import { useDispatch, useSelector } from 'react-redux'
import * as countryItemAction from '../../store/actions/countryItem.actions'
import * as locationAction from '../../store/actions/location.actions'
import { isTemplateSpan } from 'typescript'
import { useParams } from 'react-router-dom'

interface MainSearchBarProps {
  
}

export interface AreaProp {
  count:         number;
  location_id:   number;
  location_name: string;
  parent_id:     number;
  parent_name:   string;
}
interface country {
  id: number,
  iso_code: string,
  name: string,
  resource_uri: string,
}

interface propertyType {
  id: number,
  type: string,
}
interface SearchbarProps {
 /*  countryList: country[], */
  /* propertyTypeList: propertyType[], */
  country: string,
  propertyType: PropertyTypeInterface,
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

export const SearchbarDesktop = ({country,  propertyType, propertyTagList, locationList,  searchProperties, propertyTypeList, countryList, areaList, handleFilter, selectLocation, selectState}:SearchbarProps) => {
  
  const [location, setLocation] = useState<AreaProp>();

  const [countrySelected, setCountry] = useState<CountryInterface>();
  const dispatch = useDispatch()
  /* const countryItemReducer = useSelector((store: any) => store.countryItemReducer) */
  const locationReducer = useSelector((state: any) => state.locationReducer);


  useEffect(() => {
    /*  if (countrySelected?.id) */
       dispatch(countryItemAction.getById(14/* countrySelected?.id */))
       dispatch(locationAction.getByCountry(14 /* countrySelected?.id */))
   }, [countrySelected, dispatch]);

   

    return (
      <HStack justifyContent="space-around"  backgroundColor={"#0074E8"}  marginY="10px" height="60px">
       {/*  <Menu>
          <MenuButton  color="#5B5B5B" fontWeight="400" borderRadius={0} fontSize="13px" paddingX="20px" height="30.17px" backgroundColor="white" as={Button} rightIcon={<TriangleDownIcon color="#1D467C"/>}>
            País
          </MenuButton>
          <MenuList>
            <MenuItem>País 1</MenuItem>
            <MenuItem>País 2</MenuItem>
            <MenuItem>País 3</MenuItem>
            <MenuItem>País 4</MenuItem>
          </MenuList>
        </Menu> */}
        <Box width="60%" height="100%" display="flex" justifyContent="space-between" alignItems="center" >
        <Menu>
          <MenuButton width="166px" color="#5B5B5B" fontWeight="400" borderRadius={0} fontSize="13px"  height="30.17px" backgroundColor="white" as={Button} rightIcon={<TriangleDownIcon color="#1D467C"/>}>
          { propertyType.type  || "Tipo de propiedad"}
          </MenuButton>
          <MenuList>
            {
              propertyTypeList.length > 0 ? propertyTypeList?.map((propType: PropertyTypeInterface) => {
                console.log({ propType })
                return <MenuItem onClick={() => handleFilter("property_types", [propType.id])} key={propType.id}>{propType?.type}</MenuItem>
              }) : <MenuItem> No hay resultados</MenuItem>
            }
          </MenuList>
        </Menu>
        {/* <Menu>
          <MenuButton width="150px" color="#5B5B5B" fontWeight="400" borderRadius={0} fontSize="13px" paddingX="20px" height="30.17px" backgroundColor="white" as={Button} rightIcon={<TriangleDownIcon color="#1D467C"/>}>
            Venta
          </MenuButton>
          <MenuList>
            <MenuItem>Venta</MenuItem>
            <MenuItem>Preventa</MenuItem>
          </MenuList>
        </Menu>      */}
        {/* <Menu>
            <MenuButton width="150px" color="#5B5B5B" fontWeight="400" borderRadius={0} fontSize="13px"  paddingX="20px" height="30.17px" backgroundColor="white" as={Button} rightIcon={<TriangleDownIcon color="#1D467C"/>}>
              Moneda
            </MenuButton>
            <MenuList>
              <MenuItem>USD</MenuItem>
              <MenuItem>MXN</MenuItem>
            </MenuList>
        </Menu>
        <Menu> 
            <MenuButton width="166px" color="#5B5B5B" fontWeight="400" borderRadius={0} fontSize="13px" height="30.17px" backgroundColor="white" as={Button} rightIcon={<TriangleDownIcon color="#1D467C"/>}>
              Unidad de medida
            </MenuButton>
            <MenuList>
              <MenuItem>Cuadrados en metros - m2</MenuItem>
              <MenuItem>Cuadrados en pies - ft2</MenuItem>
              <MenuItem>Acres - ac</MenuItem>
              <MenuItem>Cuadrados yardas - yd2</MenuItem>
              <MenuItem>Hectáreas - ha</MenuItem>
            </MenuList>
        </Menu>*/}</Box>
        <Menu>
                    <MenuButton display="flex" zIndex={0} filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} justifyContent={"flex-start"} width="189px" hieght="32.08px"  color="white" fontWeight="700" borderRadius={"7px"} fontSize="14.59px" backgroundColor="#FB9F34" as={Button} rightIcon={<ChevronDownIcon color="white"/>} >
                        <SearchIcon/> Más filtros
                      </MenuButton>
          <MenuList>
            <Accordion allowToggle >
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

              <AccordionItem marginY="2" backgroundColor="white">
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Ciudad
                  </Box>
                  <AccordionIcon color="#1D467C"/>
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

              {
                      propertyTagList.tags &&  <AccordionItem marginY="2" backgroundColor="white">
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Características
                  </Box>
                  <AccordionIcon color="#1D467C"/>
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
              </AccordionItem>}
              {
                propertyTagList.suite_amount && <AccordionItem marginY="2" backgroundColor="white">
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Dormitorios
                  </Box>
                  <AccordionIcon color="#1D467C"/>
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
              </AccordionItem>}
              {
                      propertyTagList.bathroom_amount&&   <AccordionItem marginY="2" backgroundColor="white">
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Baños
                  </Box>
                  <AccordionIcon color="#1D467C"/>
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
              </AccordionItem>}
              {
                propertyTagList.total_surface &&<AccordionItem marginY="2" backgroundColor="white">
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Superficie total
                  </Box>
                  <AccordionIcon color="#1D467C"/>
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
              </AccordionItem>}
              {
                propertyTagList.surface&&  <AccordionItem marginY="2" backgroundColor="white">
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Superficie de terreno
                  </Box>
                  <AccordionIcon color="#1D467C"/>
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
              </AccordionItem>}
              {
                      propertyTagList.roofed_surface   && <AccordionItem marginY="2" backgroundColor="white">
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Superficie cubierta
                  </Box>
                  <AccordionIcon color="#1D467C"/>
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
              </AccordionItem>}
            </Accordion> 
            <Button width="120px" justifyContent="space-around" display="flex" margin="15px auto" fontSize="16px" fontWeight="500" color="white" backgroundColor="#1D467C" borderRadius="45px">Aplicar filtros</Button>
          </MenuList>
        </Menu>
        <Button  onClick={searchProperties} 
        filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"} width="134px" height="33.19px" justifyContent="space-around" display="flex" margin="15px auto" fontSize="16px" fontWeight="500" color="white" backgroundColor="#FB9F34" borderRadius="42.51px" _hover={{bgGradient:"linear-gradient(180deg, #007BB8 0%, #1D467C 100%);"}}  ><SearchIcon/>Buscar</Button>
      </HStack>
    )
}