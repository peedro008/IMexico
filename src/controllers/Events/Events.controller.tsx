import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventsComponent } from "../../components/Events/index";
import * as eventsActions from "../../store/actions/event.actions"
export const  Events = () => {
    const dispatch = useDispatch()
    const eventsReducer = useSelector((state: any) => state.eventReducer);
    useEffect(() => {
        dispatch(eventsActions.getAll());
      }, [dispatch]);
      const eventsList = useMemo(() => {
        if (eventsReducer.fetched) {
          return eventsReducer.data;
        } else return [];
      }, [eventsReducer.fetched, eventsReducer.data]);
    return <EventsComponent eventsList={eventsList} eventsReducer={eventsReducer}/>
}