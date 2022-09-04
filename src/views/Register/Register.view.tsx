import React from 'react'
import { Header } from '../../controllers/Header/Header.controller'
import { RegisterController } from '../../controllers/Register'

export const Register = (props: any) => {
  return (
    <>
    <Header/>
    <RegisterController/>
    </>
  )
}