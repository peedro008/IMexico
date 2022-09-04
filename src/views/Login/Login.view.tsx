import React, { useEffect } from 'react'
import { Header } from '../../controllers/Header/Header.controller'
import { LoginController } from '../../controllers/Login'

export const Login = (props: any) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Header/>
    <LoginController/>
    </>
  )
}