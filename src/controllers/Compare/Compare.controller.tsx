import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams,  } from 'react-router-dom';
import { CompareComponent } from './../../components/Compare'
import * as propertyActions from '../../store/actions/property.actions';
import * as developmentActions from '../../store/actions/development.actions';
export const Compare = (props: any) => {
  console.log(window.location, "AAAAAAAAAAAAAAAAAAAAAAAAAASSS")
  const dispatch = useDispatch();
  const { search } = useLocation();
  const developmentReducer = useSelector((state: any) => state.developmentReducer);
  const propertyReducer = useSelector((state: any) => state.propertyReducer);
  const path = window.location.search.substring(1,4)

  

  useEffect(() => {
    const query = new URLSearchParams(search);

    let property1;
    let property2;
    let property3;
    let property4;
    
    let development1;
    let development2;
    let development3;
    let development4;
    
    if (query.get("property_1")){
      if (query.get("property_1"))
     {
      property1 = parseInt(query.get("property_1") || "");
    }

    if (query.get("property_2")) {
      property2 = parseInt(query.get("property_2") || "");
    }

    if (query.get("property_3")) {
      property3 = parseInt(query.get("property_3") || "");
    }

    if (query.get("property_4")) {
      property4 = parseInt(query.get("property_4") || "");
    }
    }
    else{
      if (query.get("development_1"))
      {
       development1 = parseInt(query.get("development_1") || "");
     }
 
     if (query.get("development_2")) {
       development2 = parseInt(query.get("development_2") || "");
     }
 
     if (query.get("development_3")) {
       development3 = parseInt(query.get("development_3") || "");
     }
 
     if (query.get("development_4")) {
       development4 = parseInt(query.get("development_4") || "");
     }
    }
    {
    const body: { properties: number[] } = { properties: [] };
    const Dbody: { developments: number[] } = { developments: [] };
    property1 && body.properties.push(property1);
    property2 && body.properties.push(property2);
    property3 && body.properties.push(property3);
    property4 && body.properties.push(property4);
    development1 && Dbody.developments.push(development1);
    development2 && Dbody.developments.push(development2);
    development3 && Dbody.developments.push(development3);
    development4 && Dbody.developments.push(development4);

  property1?
    dispatch(propertyActions.compareManyById(body))
   :
    dispatch(developmentActions.compareManyById(Dbody))
  }
    
  }, [search, dispatch]);

  const compareList = useMemo(() => {
     if (propertyReducer.fetched) {
      return propertyReducer.data;
    } else return []
    
  }, [propertyReducer.fetched, propertyReducer.data]);
  const DcompareList = useMemo(() => {
    if (developmentReducer.fetched) {
     return developmentReducer.data;
   } else return []
   
 }, [developmentReducer.fetched, developmentReducer.data]);

  const loading = useMemo(() => propertyReducer.fetching, [propertyReducer.fetching]);
  const Dloading = useMemo(() => propertyReducer.fetching, [propertyReducer.fetching]);
  return (
    <CompareComponent compareList={path=="dev"?DcompareList:compareList} loading={path=="dev"?Dloading:loading} {...props} />
  )
}

