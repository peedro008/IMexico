import React from 'react'
import { Header } from '../../controllers/Header/Header.controller'
import { ResetPassController } from '../../controllers/Login'

export const ResetPass = (props: any) => {
  return (
    <>
    <Header/>
    <ResetPassController/>
    </>
  )
}