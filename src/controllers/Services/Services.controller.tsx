import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ServicesComponent } from '../../components/Services'
import * as phonecallAction from "../../store/actions/phonecall.actions"



export const Services = (props: any) => {
  const dispatch = useDispatch()

  const phonecallReducer = useSelector((state:any) => state.phonecallReducer)


  
  const phonecall = (name:string, email:string, phone:string, date:string, hour:string, reason:string ) => {
    if(name!=="" && email!==""&& phone!==""&& date!==""&& hour!==""&& reason!==""){
            
      dispatch(phonecallAction.phonecall({name, email, phone, date, hour, reason}))
    }}
    



   const Call = useMemo(() => {
    if(phonecallReducer.fetched && phonecallReducer.data !== []){
      return phonecallReducer.data
    }
    else return []
  },[phonecallReducer.fetched, phonecallReducer.data])



 
  return (
    <ServicesComponent callInfo={Call} phonecall={phonecall} phonecallReducer={phonecallReducer}  />
  )
}
