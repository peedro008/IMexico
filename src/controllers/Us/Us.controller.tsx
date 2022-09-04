import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UsComponent } from './../../components/Us'
import * as agentAction from "../../store/actions/agent.actions"

export const Us = (props: any) => {
  let agentReducer = useSelector((state: any) => state.agentReducer);
  const dispatch = useDispatch()
  useEffect(() => {
    
        dispatch(agentAction.getAll());
   
}, [dispatch]);

const agents = useMemo(() => {
  if(agentReducer.fetched && agentReducer.data !== []){
    return agentReducer.data
  }
  else return []
},[agentReducer.fetched, agentReducer.data])

  return (
    <UsComponent agentReducer={agentReducer} agents={agents} />
  )
}
