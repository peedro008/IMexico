import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginComponent } from '../../components/Login'
import * as loginAction from "../../store/actions/login.actions"

export const Login = (props: any) => {
  const dispatch = useDispatch()
  const loginReducer = useSelector((state:any) => state.loginReducer)
  const loginUser = (user:string, password:string) => {
      if(user!=="" && password!==""){
              
        dispatch(loginAction.login({user, password}))
    }
  }
  
  const user = useMemo(() => {
    if(loginReducer.fetched && loginReducer.data !== []){
      return loginReducer.data
    }
    else return []
  },[loginReducer.fetched, loginReducer.data])
 

  
  return (
    <LoginComponent userInfo = {user} loginUser = {loginUser} loginReducer={loginReducer}/>
  )
}
