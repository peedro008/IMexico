import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { NewPassComponent } from '../../components/Login'
import * as newPasswordAction from "../../store/actions/reset.actions"

export const NewPass = (props: any) => {
  const { id } = useParams<{id:string}>()
  const resetReducer = useSelector((state:any) => state.resetReducer)
  const dispatch = useDispatch()
  const resetPass = (password:string) => {
    dispatch(newPasswordAction.reset({password}, id))
  }

  return (
    <NewPassComponent resetPass = {resetPass} resetReducer = {resetReducer}/>
  )
}
