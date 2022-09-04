import React, { useEffect, useMemo } from "react";
import { DetailsComponent } from "./../../components/Details";
import { useDispatch, useSelector } from "react-redux";
import * as propertyDetailsActions from "../../store/actions/propertyDetails.actions";
import * as developmentDetailsActions from "../../store/actions/developmentDetails.actions";
import * as propertyActions from "../../store/actions/property.actions";
import * as phonecallAction from "../../store/actions/phonecall.actions"
import { useParams } from "react-router";

export const Details = (props: any) => {
  
	const dispatch = useDispatch();
  const propertyDetailsReducer = useSelector((state: any) => state.propertyDetailsReducer);
  const developmentDetailsReducer = useSelector((state: any) => state.developmentDetailsReducer);
  const propertyReducer = useSelector((state: any) => state.propertyReducer);
  
  const phonecallReducer = useSelector((state:any) => state.phonecallReducer)
  const phonecall = (name:string, email:string, phone:string, date:string, hour:string, reason:string ) => {
    if(name!=="" && email!==""&& phone!==""&& date!==""&& hour!==""&& reason!==""){
            
      dispatch(phonecallAction.phonecall({name, email, phone, date, hour, reason}))
    }}
  const params: {id: string} = useParams();

	useEffect(() => {
    dispatch(developmentDetailsActions.reintentar());
    dispatch(developmentDetailsActions.getById(parseInt(params?.id)));
    
    dispatch(propertyDetailsActions.reintentar());
    dispatch(propertyDetailsActions.getById(parseInt(params?.id)));

    dispatch(propertyActions.reintentar());
    dispatch(propertyActions.getMany(3, 0));
  }, [params.id, dispatch]);

  const loading = useMemo(() => propertyDetailsReducer.fetching, [propertyDetailsReducer.fetching]);
  

  const selectedProperty = useMemo(() => {
    if (propertyDetailsReducer.fetched) {
      return propertyDetailsReducer.data;
    } else return {};
  }, [propertyDetailsReducer.fetched, propertyDetailsReducer.data])
  
  const selectedDevelopment = useMemo(() => {
    if (developmentDetailsReducer.fetched) {
      return developmentDetailsReducer.data;
    } else return {};
  }, [developmentDetailsReducer.fetched, developmentDetailsReducer.data])

  const propertyList = useMemo(() => {
    if (propertyReducer.fetched) {
      return propertyReducer.data[0]?.items;
    } else return [];
  }, [propertyReducer.fetched, propertyReducer.data])

	return <DetailsComponent phonecall={phonecall} propertyReducer={propertyReducer}  propertyList={propertyList} loading={loading} selectedProperty={selectedProperty.id?selectedProperty:selectedDevelopment} />;
};
