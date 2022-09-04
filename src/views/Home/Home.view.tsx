import React from 'react'
import { HeaderController } from '../../controllers/Header'

import { HomeController } from './../../controllers/Home'
import { FooterController } from '../../controllers/Footer'
export const Home = (props: any) => {
  return (
    <>
    <HeaderController/>
    <HomeController />
    <FooterController/>
    </>
  )
}
