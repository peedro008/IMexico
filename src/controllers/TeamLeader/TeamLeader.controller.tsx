import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { TeamLeaderComponent } from "../../components/TeamLeader/index";
import * as propertyActions from "../../store/actions/property.actions";
import * as subAgentActions from "../../store/actions/subagent.actions";
export const  TeamLeader = () => {
    const { state } = useLocation();
    
    let leader = (state as any)
    const dispatch = useDispatch();
    const propertyReducer = useSelector((state: any) => state.propertyReducer);
    const subAgentReducer = useSelector((state: any) => state.subagentReducer);
    const loading = useMemo(() => propertyReducer.fetching, [propertyReducer.fetching]);
    useEffect(() => {
    
        dispatch(subAgentActions.getAll(leader.agent._id))
        dispatch(propertyActions.reintentar());
        dispatch(propertyActions.getMany(5, 0));
      }, [dispatch]);
    
    const propertyList = useMemo(() => {
        if (propertyReducer.fetched) {
          return propertyReducer.data[0]?.items;
        } else return [];
      }, [propertyReducer.fetched, propertyReducer.data])

      const subagentList = useMemo(() => {
        if (subAgentReducer.fetched) {
          return subAgentReducer.data[0]?.items;
        } else return [];
      }, [subAgentReducer.fetched, subAgentReducer.data])


    return <TeamLeaderComponent   propertyList={propertyList} loading={loading} subagentList={subagentList}/>
}