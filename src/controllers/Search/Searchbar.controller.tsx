import React, { useCallback, useEffect, useMemo } from 'react'
import { SearchbarComponent } from './../../components/Search'
import * as countryActions from '../../store/actions/country.actions'
import * as propertyTypeActions from '../../store/actions/propertyType.actions'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import  * as locationAction  from '../../store/actions/location.actions';

export const Searchbar = (props: any) => {
  const dispatch = useDispatch();
  const countryReducer = useSelector((state: any) => state.countryReducer);
  const propertyTypeReducer = useSelector((state: any) => state.propertyTypeReducer);
  const locationReducer = useSelector((state: any) => state.locationReducer);

  const history = useHistory();

  useEffect(() => {
    /* dispatch(countryActions.getAll()); */
/*     dispatch(propertyTypeActions.getAll()); */
    dispatch(propertyTypeActions.getByCountry(14))
    dispatch(locationAction.getByCountry(14))
  }, [dispatch]);


  /* const countryList = useMemo(() => {
    if (countryReducer.fetched) {
      return countryReducer.data[0]?.items;
    } else return [];
  }, [countryReducer.fetched, countryReducer.data]); */

  const propertyTypeList = useMemo(() => {
    if (propertyTypeReducer.fetched) {
    
      return propertyTypeReducer.data[0]?.items;
    } else return [] || propertyTypeReducer.data;
  }, [propertyTypeReducer.fetched, propertyTypeReducer.data]);

  const locationList = useMemo(() => {
    if (locationReducer.fetched) {
     
      return locationReducer.data;
    } else return [];
  }, [locationReducer.fetched, locationReducer.data])


  const search = (countryId: number, propertyTypeId: number, zoneId: number) => {
    history.push(/* country=${countryId} */`/search?location_id=${zoneId}&property_types=[${propertyTypeId}]`);
  };

  return (
    <SearchbarComponent /* countryList={countryList} */ propertyTypeList={propertyTypeList} search={search}  locationList={ locationList } />
  )
}
