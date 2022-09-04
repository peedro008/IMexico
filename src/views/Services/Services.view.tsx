import React from 'react'
import { Header } from '../../controllers/Header/Header.controller'
import { ServicesController } from '../../controllers/Services/index'
import { Footer } from '../../controllers/Footer/Footer.controller'

export const Services = (props: any) => {
  return (
    <>
    <Header/>
    <ServicesController />
    <Footer/>
    </>
  )
}