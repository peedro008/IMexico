import React, { useEffect, useMemo, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
    Button,
    Divider
  } from '@chakra-ui/react'
import { TriangleDownIcon, SearchIcon } from '@chakra-ui/icons'
import * as propertyTypeActions from '../../store/actions/propertyType.actions'
import { useDispatch, useSelector } from 'react-redux'
import { AreaProp } from './MainSearchbarDesktop.component';

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
  countryList: country[],
  propertyTypeList: propertyType[],
  locationList: any,
  search: (countryId: number, propertyType: number, zoneId: number) => void,
}

export const Searchbar = ({countryList, locationList, propertyTypeList, search}: SearchbarProps) => {
/*   const dispatch = useDispatch(); */

/*   const [country, setCountry] = useState<country>(); */
  const [propertyType, setPropertyType] = useState<propertyType>();
  const [location, setLocation] = useState<AreaProp>();
  //load new property types when country changes
  /* useEffect(() => {
      if (country?.id)
      dispatch(propertyTypeActions.getByCountry(14))
  }, [country, dispatch]); */
 
  let mobile = window.innerWidth
    return (
        <HStack backgroundColor="#F2F2F2" paddingX={mobile < 750 ? "10px" : "0"} borderRadius="8px" paddingY={mobile < 750 ? "0px" : "10px"} borderBottomLeftRadius={0} width={mobile < 750 ? "300px" : "650px"} justifyContent="space-around">
            {/* <Menu>
                <MenuButton  fontSize={mobile < 750 ? "11px" : "22px"} fontWeight="500" padding="0" backgroundColor="#F2F2F2" as={Button} rightIcon={<TriangleDownIcon color="#1D467C"/>}>
                  {country?.name || "País"}
                </MenuButton>
                <MenuList maxH="300px" overflowY="auto">
                  {countryList?.map((country: any) => {
                    return <MenuItem key={country.id} onClick={() => setCountry(country)}>{country.name}</MenuItem>
                  })}
                </MenuList>
            </Menu>  */}


            <Menu>
                <MenuButton  fontSize={mobile < 750 ? "11px" : "22px"} fontWeight="500" padding="0" backgroundColor="#F2F2F2" as={Button} rightIcon={<TriangleDownIcon color="#1D467C"/>}>
                  {location?.location_name || "Zona"}
                </MenuButton>
                <MenuList maxH="300px" overflowY="auto">
                {
                  locationList[0]?.items.length > 0 ? locationList[0]?.items.map((area: any) => {
                    return (
                      <MenuItem  onClick={() => setLocation(area)}>{area?.location_name}</MenuItem>
                    )  
                  }) : (
                    <MenuItem>
                      No hay resultados
                    </MenuItem>
                  ) 
                } 
                </MenuList>
            </Menu> 
          
            
            <Menu>
                <MenuButton fontSize={mobile < 750 ? "11px" : "22px"} padding="0" fontWeight="500" backgroundColor="#F2F2F2" as={Button} rightIcon={<TriangleDownIcon color="#1D467C"/>}>
                  {propertyType?.type || "Tipo de propiedad"}
                </MenuButton>
                <MenuList maxH="300px" overflowY="auto">
                  { 
                    propertyTypeList.length > 0 ? propertyTypeList?.map((propertyType: any) => {
                      return <MenuItem key={propertyType.id} onClick={() => setPropertyType(propertyType)}>{propertyType.type ? propertyType.type : propertyType.name } </MenuItem>
                    }) :  <MenuItem>No hay resultados</MenuItem>
                  }
                </MenuList>
            </Menu>
            <Button padding="0" margin="0" disabled={(!location)?true:false} onClick={() =>/*  country &&  */ location && search(/* country.id */ 14, propertyType? propertyType.id:2, location?.location_id)}>
              <SearchIcon color="white"  backgroundColor="#1D467C" boxSize={mobile < 750 ? "30px" : "45px"} padding="8px" borderRadius="8px"/>
            </Button>
        </HStack>
    )
}
