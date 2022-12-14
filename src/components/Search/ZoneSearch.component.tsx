import { Container, Image, Text, Spinner, Center  } from '@chakra-ui/react'
import { PropCardController } from '../../controllers/PropCard'
import React, { useEffect, useMemo, useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { PriceSliderController } from '../../controllers/Search'
import zona from '../../images/zona.png'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
    Button,
  } from '@chakra-ui/react'
  import { TriangleDownIcon } from '@chakra-ui/icons'
import { CompareModal } from '../Modals/CompareModal'
import DivisionInterface from '../../interfaces/Division';
import { useDispatch, useSelector } from 'react-redux'
import * as countryItemAction from '../../store/actions/countryItem.actions'
import ScrollAnimation from 'react-animate-on-scroll';
import { NoResultsComponent } from '.'
import PropertyInterface from '../../interfaces/Property'



interface ZoneSearchProps {
  countryList: DivisionInterface[],
  selectState: (id: number) => void,
  locationList: DivisionInterface[],
  selectLocation: (id: number) => void,
  selectCountry: (id: number) => void,
  areaList: DivisionInterface[],
  handleFilter: (filterName: string, filterValue: number | number[] | string) => void,
  propertyList: any,
  loading: boolean,
}

interface country {
  id: number,
  iso_code: string,
  name: string,
  resource_uri: string,
}

export const ZoneSearch = ({loading, propertyList, countryList, selectState, locationList,selectCountry, selectLocation, areaList, handleFilter}: ZoneSearchProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [country, setCountry] = useState<country>();
    const dispatch = useDispatch()
    const countryItemReducer = useSelector((store: any) => store.countryItemReducer)
    const [property1, setProperty1] = useState<PropertyInterface>();
    const [property2, setProperty2] = useState<PropertyInterface>();
    const [property3, setProperty3] = useState<PropertyInterface>();
    const [property4, setProperty4] = useState<PropertyInterface>();

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


    useEffect(() => {
        if (country?.id)
          dispatch(countryItemAction.getById(country?.id))
      }, [country, dispatch]);

    const stateList = useMemo(() => {
    if (countryItemReducer.fetched) {
        return countryItemReducer.data.states;
    } else return [];
    }, [countryItemReducer.fetched, countryItemReducer.data]);  
    console.log("aaaaaaaaaaaaaaaaaa", country)
    return (
        <>
        <Container minWidth="100%" padding="0">
            <Text width="70%" margin="10px auto" fontSize="15px" fontWeight="700" lineHeight="20px" textAlign="center" color="#1D467C">Encontr?? tu lugar en cualquiera de nuestros pa??ses</Text>
            <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="220px" id="gmap_canvas" src={`https://maps.google.com/maps?q=${country?.name}&output=embed`} frameBorder="0" scrolling="no" title="map"></iframe></div></div>
        <Container>
        <Menu>
                <MenuButton fontSize="14px" borderRadius={0} color="white" width="100%" height="27px" marginY="10px" fontWeight="500" padding="0 120px" backgroundColor="#1D467C" as={Button} rightIcon={<TriangleDownIcon color="white"/>}>
                  Pa??s
                </MenuButton>
                <MenuList maxH="300px" overflowY="auto">
                  {countryList?.map((country: any) => {
                    return <MenuItem key={country.id} onClick={() => {setCountry(country)/*; handleFilter("country", [country.id])*/ }}>{country.name}</MenuItem>
                  })}
                </MenuList>
            </Menu>
            <HStack>
            <Menu>
                <MenuButton disabled={!stateList} fontSize="14px" borderRadius={0} color="white" width="100%" height="27px"  fontWeight="500" backgroundColor="#1D467C" as={Button} rightIcon={<TriangleDownIcon color="white"/>}>
                  Estado
                </MenuButton>
                <MenuList maxH="300px" overflowY="auto">
                  {stateList?.map((state: DivisionInterface) => {
                    return <MenuItem key={state.id} onClick={() => selectState(state.id)}>{state.name}</MenuItem>
                  })}
                </MenuList>
            </Menu>  
            
            <Menu>
                <MenuButton disabled={!locationList} fontSize="14px" borderRadius={0} color="white" width="100%" height="27px"  fontWeight="500" backgroundColor="#1D467C" as={Button} rightIcon={<TriangleDownIcon color="white"/>}>
                  ??rea
                </MenuButton>
                <MenuList maxH="300px" overflowY="auto">
                  {locationList?.map((location: DivisionInterface) => {
                    return <MenuItem key={location.id} onClick={() => selectLocation(location.id)}>{location.name}</MenuItem>
                  })}
                </MenuList>
            </Menu>
            
            <Menu>
                <MenuButton disabled={!areaList} fontSize="14px" borderRadius={0} color="white" width="100%" height="27px"  fontWeight="500" backgroundColor="#1D467C" as={Button} rightIcon={<TriangleDownIcon color="white"/>}>
                  Ciudad
                </MenuButton>
                <MenuList maxH="300px" overflowY="auto">
                  {areaList?.map((area: DivisionInterface) => {
                    return <MenuItem key={area.id} onClick={()=>  handleFilter("location_id", [area.id])}>{area.name}</MenuItem>
                  })}
                </MenuList>
            </Menu>
            </HStack>
            </Container>
            <Container minWidth="100%" backgroundColor="white" paddingY="5px">
              <PriceSliderController handleFilter={handleFilter} />
            </Container>
        <Container minWidth="100%" padding="0" justifyContent="center" display="flex" flexWrap="wrap">
            {loading ? <Center h="300px" w="100%"><Spinner /></Center> : propertyList && propertyList?.map((property: any, index: number) => {
                return (
                    <ScrollAnimation animateOnce animateIn="animate__flipInX">
                <Container width="fit-content" height="fit-content" padding="0"><PropCardController property={property} selectedProperties={[property1, property2, property3, property4]} key={index} isCompareDisabled={isCompareDisabled} handleCompare={handleCompare} isCompare={onOpen} search />
            </Container>
            </ScrollAnimation>)
            })}
            {!loading && propertyList?.length < 1 ? <NoResultsComponent/> : null}
            </Container>
        </Container>
        <CompareModal removeProperty={removeProperty} isOpen={isOpen} onClose={onClose} developmentList={[]} propertyList={[property1, property2, property3, property4]} clearAll={clearAll}  />
        </>
    )
}
