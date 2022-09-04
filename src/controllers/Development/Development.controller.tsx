import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { DevelopmentComponent } from '../../components/Development/Development.component';

import * as DevelopmentActions from '../../store/actions/development.actions'
import * as propertyActions from '../../store/actions/property.actions'

export const Development = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const propertyReducer = useSelector((state: any) => state.propertyReducer);
  const developmentReducer = useSelector((state: any) => state.developmentReducer);
  const query = new URLSearchParams(search);

  useEffect(() => {
    searchProperties()
  }, []); 

  const searchProperties = () => {
    dispatch(propertyActions.reintentar());
    dispatch(DevelopmentActions.getAll()); 
  }
  const propertyList1 = useMemo(() => {
    if (propertyReducer.fetched) {
      return propertyReducer.data[0]?.items;
    } else return [];
  }, [propertyReducer.fetched, propertyReducer.data])

  const propertyList = useMemo(() => {
    if (developmentReducer.fetched && developmentReducer.data?.length) {
      return developmentReducer.data[0].items;
    } else return [];
  }, [developmentReducer.fetched, developmentReducer.data]);

  const loading = useMemo(() => developmentReducer.fetching, [developmentReducer.fetching]);

  return <DevelopmentComponent propertyList={propertyList} loading={loading} searchProperties={searchProperties} />;
};
