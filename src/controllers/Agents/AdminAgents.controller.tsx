import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AdminAgentsComponent } from './../../components/Agents'
import * as agentActions from '../../store/actions/agent.actions'

export const AdminAgents = (props: any) => {
  const dispatch = useDispatch();

  const agentReducer = useSelector((state: any) => state.agentReducer);

  useEffect(() => {
    dispatch(agentActions.getAll());
  }, [dispatch]);

  const agentList = useMemo(() => {
    if (agentReducer.fetched) {
      return agentReducer.data;
    } else return [];
  }, [agentReducer.fetched, agentReducer.data]);

  return (
    <AdminAgentsComponent agentList={agentList} />
  )
}
