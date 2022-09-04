import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HomeComponent } from './../../components/Home'
import * as phonecallAction from "../../store/actions/phonecall.actions"
import * as configurationAction from "../../store/actions/configuration.actions"
import * as satisfiedCustomersAction from "../../store/actions/satisfiedCustomers.actions"

export const Home = (props: any) => {
  const dispatch = useDispatch()

  const phonecallReducer = useSelector((state:any) => state.phonecallReducer)
  const configurationReducer = useSelector((state:any) => state.configurationReducer)
  const satisfiedCustomersReducer = useSelector((state:any) => state.satisfiedCustomersReducer)
  
  const phonecall = (name:string, email:string, phone:string, reason:string ) => {
    if(name!=="" && email!==""&& phone!=="" && reason!==""){
            
      dispatch(phonecallAction.phonecall({name, email, phone, reason}))
    }}
    const Configuration = ( ) => {
      dispatch(configurationAction.configuration())
    }
    const Satisfied = ( ) => {
      dispatch(satisfiedCustomersAction.getAll())
    }
    useEffect(()=>{
      Configuration()
      Satisfied()
    }, [])

    const satisfiedCustomersList = useMemo(() => {
      if(satisfiedCustomersReducer.fetched && satisfiedCustomersReducer.data !== []){
        return satisfiedCustomersReducer.data
      }
      else return []
    },[satisfiedCustomersReducer.fetched, satisfiedCustomersReducer.data])
   const Call = useMemo(() => {
    if(phonecallReducer.fetched && phonecallReducer.data !== []){
      return phonecallReducer.data
    }
    else return []
  },[phonecallReducer.fetched, phonecallReducer.data])
  const Config = useMemo(() => {
    if(configurationReducer.fetched && configurationReducer.data !== []){
      return configurationReducer.data
    }
    else return []
  },[configurationReducer.fetched, configurationReducer.data])


 
  return (
    <HomeComponent callInfo={Call} phonecall={phonecall} phonecallReducer={phonecallReducer} Config={Config} configurationReducer={configurationReducer} satisfiedCustomersList={satisfiedCustomersList}/>
  )
}
