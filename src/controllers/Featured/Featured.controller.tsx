import React, { useEffect, useMemo } from 'react'
import { FeaturedComponent } from './../../components/Featured'
import { useDispatch, useSelector } from 'react-redux';
import * as propertyActions from '../../store/actions/property.actions';
import * as developmentDetailsActions from "../../store/actions/developmentDetails.actions"
import * as DevelopmentActions from '../../store/actions/development.actions'
export const Featured = (props: any) => {
  const dispatch = useDispatch();
  const propertyReducer = useSelector((state: any) => state.propertyReducer);
  const developmentReducer = useSelector((state: any) => state.developmentReducer);
  const dev = props?.dev

  
  useEffect(() => {
    dev?
    dispatch(DevelopmentActions.getAll())

    :
    
    dispatch(propertyActions.getMany(10, 0));
   
  }, [dispatch]);

  const title = props.title


  const propertyList = useMemo(() => {
    if (developmentReducer.fetched && developmentReducer.data?.length) {
      return developmentReducer.data[0].items;
    } else return [];
  }, [developmentReducer.fetched, developmentReducer.data]);
  const featureList = useMemo(() => {
    
  
    
    if (propertyReducer.fetched) {
      return propertyReducer.data[0]?.items;
    } else return []
  } , [propertyReducer.fetched, propertyReducer.data]);

  
  const loading = useMemo(() => {
    return propertyReducer.fetching;
  }, [propertyReducer.fetching]);

  const loading1 = useMemo(() => {
    return developmentReducer.fetching;
  }, [developmentReducer.fetching]);

  return (
    <FeaturedComponent featureList={dev?propertyList:featureList} loading={dev?loading1:loading} title={title} dev={dev}/>
  )
}
