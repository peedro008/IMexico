import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DetailsCarouselComponent } from './../../components/Details'
import * as propertyDetailsActions from "../../store/actions/propertyDetails.actions";
import * as propertyActions from "../../store/actions/property.actions";
import * as developmentDetailsActions from "../../store/actions/developmentDetails.actions";
import { useParams } from 'react-router-dom';

export const DetailsCarousel = (props: any) => {
  const propertyDetailsReducer = useSelector((state: any) => state.propertyDetailsReducer)
	const dispatch = useDispatch();
  const propertyReducer = useSelector((state: any) => state.propertyReducer);
  const developmentDetailsReducer = useSelector((state: any) => state.developmentDetailsReducer);
  const params: {id: string} = useParams();

	useEffect(() => {
    dispatch(developmentDetailsActions.getById(parseInt(params?.id)));
    dispatch(propertyDetailsActions.reintentar());
    dispatch(propertyDetailsActions.getById(parseInt(params?.id)));
    dispatch(propertyActions.reintentar());
    dispatch(propertyActions.getMany(3, 0));
  }, [params.id, dispatch]);

  const loading = useMemo(() => propertyDetailsReducer.fetching, [propertyDetailsReducer.fetching]);

  const selectedDevelopment = useMemo(() => {
    if (developmentDetailsReducer.fetched) {
      return developmentDetailsReducer.data;
    } else return {};
  }, [developmentDetailsReducer.fetched, developmentDetailsReducer.data])

  const selectedProperty = useMemo(() => {
    if (propertyDetailsReducer.fetched) {
      return propertyDetailsReducer.data;
    } else return {};
  }, [propertyDetailsReducer.fetched, propertyDetailsReducer.data])

  const propertyList = useMemo(() => {
    if (propertyReducer.fetched) {
      return propertyReducer.data[0]?.items;
    } else return {};
  }, [propertyReducer.fetched, propertyReducer.data])
  
  const Dphotos = useMemo(() => {
    if (developmentDetailsReducer.fetched) {
      return developmentDetailsReducer?.data?.photos;
    } else return [];
  }, [developmentDetailsReducer.fetched, developmentDetailsReducer.data]);
  
  const photos = useMemo(() => {
    if (propertyDetailsReducer.fetched) {
      return propertyDetailsReducer?.data?.photos;
    } else return [];
  }, [propertyDetailsReducer.fetched, propertyDetailsReducer.data]);

  return (
    <DetailsCarouselComponent photos={params.id.length>5?photos:Dphotos} propertyList={propertyList} loading={loading} selectedProperty={params.id.length>5?selectedProperty:selectedDevelopment} />
  )
}