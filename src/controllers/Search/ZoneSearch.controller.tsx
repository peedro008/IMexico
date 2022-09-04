import React, { useMemo, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ZoneSearchComponent } from './../../components/Search'
import * as countryActions from '../../store/actions/country.actions'
import * as stateActions from '../../store/actions/state.actions'
import * as locationActions from '../../store/actions/location.actions'
import * as propertyActions from '../../store/actions/property.actions'
import { useHistory,useLocation } from 'react-router-dom';

export const ZoneSearch = (props: any) => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const history = useHistory();
  const countryReducer = useSelector((state: any) => state.countryReducer);
  const stateReducer = useSelector((state: any) => state.stateReducer);
  const locationReducer = useSelector((state: any) => state.locationReducer);
  const propertyReducer = useSelector((state: any) => state.propertyReducer);
    
  useEffect(() => {
      
    dispatch(propertyActions.reintentar());
      const query = new URLSearchParams(search);
      dispatch(countryActions.getAll())
      if (/* query.get("country") */ query.get("location_id") && query.get("property_types")) {
        const country = parseInt(query.get("country") || "");
        const propertyTypeList = JSON.parse(query.get("property_types") || "");
        const currency = query.get("currency") || "";
        const priceFrom = parseInt(query.get("price_from") || "");
        const locationId = JSON.parse(query.get("location_id") || "[]");
        dispatch(propertyActions.getManyByQuery(country, locationId,  propertyTypeList, priceFrom, undefined, currency));
      }
    }, [search, dispatch]);

  

  const countryList = useMemo(() => {
    if (countryReducer.fetched && countryReducer.data?.length) {
      return countryReducer.data[0]?.items;
    }
  }, [countryReducer.fetched, countryReducer.data]);
 
  const propertyList = useMemo(() => {
    if (propertyReducer.fetched && propertyReducer.data?.length) {
      return propertyReducer.data[0]?.items;
    }
  }, [propertyReducer.fetched, propertyReducer.data]);

  const locationList = useMemo(() => {
    if (stateReducer.fetched) {
      return stateReducer.data.divisions;
    } else return [];
  }, [stateReducer.fetched, stateReducer.data]);

  const handleFilter = useCallback((filterName: string, filterValue: number | number[] | string) => {
    const query = new URLSearchParams(search);

    query.set(filterName, JSON.stringify(filterValue));

    history.push("/zonesearch?" + query.toString());
  }, [search, history]);

  const areaList = useMemo(() => {
    if (locationReducer.fetched) {
      return locationReducer.data.divisions;
    } else return [];
  }, [locationReducer.fetched, locationReducer.data]);

  const selectState = useCallback((stateId: number) => {
    dispatch(stateActions.reintentar());
    dispatch(stateActions.getById(stateId));
  }, [dispatch]);

  const selectLocation = useCallback((locationId: number) => {
    dispatch(locationActions.reintentar());
    dispatch(locationActions.getById(locationId));
  }, [dispatch]);

  const loading = useMemo(() => propertyReducer.fetching, [propertyReducer.fetching]);

  return (
    <ZoneSearchComponent loading={loading} propertyList={propertyList} countryList={countryList} handleFilter={handleFilter} selectState={selectState} locationList={locationList} selectLocation={selectLocation} areaList={areaList} />
  )
}