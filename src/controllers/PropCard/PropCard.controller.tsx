import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PropCardComponent } from '../../components/PropCard'
import * as phonecallAction from "../../store/actions/phonecall.actions"
export const PropCard = (props: any) => {
  const dispatch = useDispatch();
  const phonecallReducer = useSelector((state:any) => state.phonecallReducer)
  const phonecall = (name:string, email:string, phone:string, date:string, hour:string, reason:string ) => {
    if(name!=="" && email!==""&& phone!==""&& date!==""&& hour!==""&& reason!==""){
            
      dispatch(phonecallAction.phonecall({name, email, phone, date, hour, reason}))
    }}
  return (
    <PropCardComponent {...props} />
  )
}