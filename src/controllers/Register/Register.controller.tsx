import React, { useMemo } from 'react'
import { RegisterComponent } from './../../components/Register'
import { useDispatch, useSelector } from 'react-redux'
import * as registerAction from "../../store/actions/register.actions"

export const Register = (props: any) => {
  const dispatch = useDispatch()
  const registerReducer = useSelector((state:any) => state.registerReducer)
  const registerUser = (user:string,  password:string, email:string) => {
    if(user!=="" && password!=="" && email!==""){
            
        dispatch(registerAction.register({user, password, email}))
      }
    }

    const user = useMemo(() => {
      if(registerReducer.fetched && registerReducer.data !== []){
        return registerReducer.data
      }
      else return []
    },[registerReducer.fetched, registerReducer.data])
   
    

  return (
    <RegisterComponent userInfo = {user} registerUser = {registerUser} registerReducer={registerReducer}/>
  )
}
