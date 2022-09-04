import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import * as developmentDetailsActions from "../../store/actions/developmentDetails.actions";
import { DevelopmentDetailsComponent } from '../../components/DevelopmentDetails'
export const DevelopmentDetails = (props: any) => {
  const { state } = useLocation();
    const params: {id: string} = useParams();
    const developmentDetailsReducer = useSelector((state: any) => state.developmentDetailsReducer);
	const dispatch = useDispatch();
	useEffect(() => {
    dispatch(developmentDetailsActions.reintentar());
    dispatch(developmentDetailsActions.getById(parseInt(params?.id)));
    
 
  }, [params.id, dispatch]);

  const selectedDevelopment = useMemo(() => {
    if (developmentDetailsReducer.fetched) {
      return developmentDetailsReducer.data;
    } else return {};
  }, [developmentDetailsReducer.fetched, developmentDetailsReducer.data])
  const loading = useMemo(() => developmentDetailsReducer.fetching, [developmentDetailsReducer.fetching]);
  return (
    <DevelopmentDetailsComponent selectedDevelopment={selectedDevelopment} state={state} loading={loading}/>
  )
}
