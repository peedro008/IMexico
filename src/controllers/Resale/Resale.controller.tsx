import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ResaleComponent } from '../../components/Resale/Resale.component';

import * as propertyActions from '../../store/actions/property.actions'

export const Resale = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const propertyReducer = useSelector((state: any) => state.propertyReducer);
  const query = new URLSearchParams(search);

  useEffect(() => {
    searchProperties()
  }, []); 

  const searchProperties = () => {
    dispatch(propertyActions.reintentar());
    if (/* query.get("country") */ query.get("location_id") || query.get("property_types")) {
      const country = parseInt(query.get("country") || "");
      const propertyTypeList = JSON.parse(query.get("property_types") || "");
      const currency = query.get("currency") || "";
      const priceFrom = parseInt(query.get("price_from") || "");
      const bathroomAmount = parseInt(query.get('bathroom_amount') || "" )
      const suiteAmount = parseInt(query.get('suite_amount') || "" )
      const tagsList = JSON.parse(query.get("tags") || "[5]");
      const locationId = JSON.parse(query.get("location_id") || "[]");
      dispatch(propertyActions.getManyByQuery(country, locationId, propertyTypeList, priceFrom, undefined, currency, bathroomAmount, suiteAmount, tagsList));
    } 
  }

  const propertyList = useMemo(() => {
    if (propertyReducer.fetched && propertyReducer.data?.length) {
      return propertyReducer.data[0].items;
    } else return [];
  }, [propertyReducer.fetched, propertyReducer.data]);

  const loading = useMemo(() => propertyReducer.fetching, [propertyReducer.fetching]);

  return <ResaleComponent propertyList={propertyList} loading={loading} searchProperties={searchProperties} />;
};
