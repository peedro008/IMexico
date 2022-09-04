import React, { useCallback, useEffect, useMemo } from 'react'
import { MainSearchbarComponent } from './../../components/Search'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useHistory, useRouteMatch } from 'react-router';
import * as propertyTypeActions from '../../store/actions/propertyType.actions';
import * as countryActions from '../../store/actions/country.actions';
import * as locationActions from '../../store/actions/location.actions';
import * as stateActions from '../../store/actions/state.actions';
import * as propertyTagActions from '../../store/actions/propertyTag.actions';
import { CountryInterface } from '../../interfaces/Country';
import PropertyTypeInterface from '../../interfaces/PropertyType';


export const MainSearchbar = (props: any) => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const history = useHistory();
  const match = useRouteMatch()
  const propertyTypeReducer = useSelector((state: any) => state.propertyTypeReducer);
  const countryReducer = useSelector((state: any) => state.countryReducer);
  const stateReducer = useSelector((state: any) => state.stateReducer);
  const locationReducer = useSelector((state: any) => state.locationReducer);
  const propertyTagReducer = useSelector((state: any) => state.propertyTagReducer);

 /*  useEffect(() => {
    dispatch(countryActions.reintentar());
    dispatch(countryActions.getAll());
  }, [dispatch]); */

  useEffect(() => {
    dispatch(propertyTypeActions.reintentar());
    const query = new URLSearchParams(search);

    if (query.get("country")) {
      const country = parseInt(query.get("country") || "");
      dispatch(propertyTypeActions.getByCountry(country));
    } else {
      dispatch(propertyTypeActions.getByCountry(14));
    }

    if (query.get("location_id") &&  query.get('property_types')) {
      const location = parseInt(query.get("location_id") || "");
      const propertyType = JSON.parse(query.get("property_types") || "")[0]

      console.log(location, propertyType)
      dispatch(propertyTagActions.getAll(location, propertyType))
    } 

  }, [dispatch, search]);

  const handleFilter = useCallback((filterName: string, filterValue: number | number[] | string) => {
    const query = new URLSearchParams(search);

    query.set(filterName, JSON.stringify(filterValue));

    history.push(`${match.url}?` + query.toString());
  }, [search, history]);

  const propertyTypeList = useMemo(() => {
    if (propertyTypeReducer.fetched && propertyTypeReducer.data?.length) {
      return propertyTypeReducer.data[0].items;
    } else return [];
  }, [propertyTypeReducer.fetched, propertyTypeReducer.data]);

  const countryList = useMemo(() => {
    if (countryReducer.fetched && countryReducer.data?.length) {
      return countryReducer.data[0].items;
    } else return [];
  }, [countryReducer.fetched, countryReducer.data]);

  const country = useMemo(() => {
    const query = new URLSearchParams(search);

    if (query.get("country")) {
      const countryParam = parseInt(query.get("country") || "");
      let countryList =  countryReducer.data[0]?.items?.filter((country: CountryInterface) => country.id === countryParam)
      return countryList?.length ? countryList[0]?.name : "País"
    } else {
      return "País";
    }
  }, [countryReducer.data, search])

  const propertyType = useMemo(() => {
    const query = new URLSearchParams(search);

    if (query.get("property_types")) {
      const propertyTypeParam = JSON.parse(query.get("property_types") || "")[0]
      let propertyTypeList =  propertyTypeReducer.data[0]?.items?.filter((propertyType: PropertyTypeInterface) => propertyType.id === propertyTypeParam)
      return propertyTypeList?.length ? propertyTypeList[0]: "Tipo de propiedad"
    } else {
      return "Tipo de propiedad";
    }
  }, [propertyTypeReducer.data, search])

  const locationList = useMemo(() => {
    if (stateReducer.fetched) {
      return stateReducer.data.divisions;
    } else return [];
  }, [stateReducer.fetched, stateReducer.data]);

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

  const propertyTagList = useMemo(() => {
    if (propertyTagReducer.fetched && propertyTagReducer.data?.length) {
      return propertyTagReducer.data[0].items;
    } else return [];
  }, [propertyTagReducer.fetched, propertyTagReducer.data]);

  return (
    <MainSearchbarComponent
      propertyTypeList={propertyTypeList}
      countryList={countryList}
      country={ country }
      propertyType={ propertyType }
      locationList={ locationList }
      propertyTagList = { propertyTagList }
      areaList ={ areaList }
      handleFilter={handleFilter}
      selectLocation={ selectLocation }
      selectState={ selectState }
      searchProperties={ props.searchProperties }
    />
  )
}
