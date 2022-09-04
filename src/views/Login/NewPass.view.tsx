import React from 'react'
import { Header } from '../../controllers/Header/Header.controller'
import { NewPassController } from '../../controllers/Login'

export const NewPass = (props: any) => {
  return (
    <>
    <Header/>
    <NewPassController/>
    </>
  )
}