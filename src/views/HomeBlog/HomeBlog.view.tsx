import React from 'react'

import { HomeController } from './../../controllers/HomeBlog'
import { Header } from '../../controllers/Header/Header.controller'
import { Feature } from '../../controllers/Feature/Feature.controller'
import { Categories } from '../../controllers/Categories/Categories.controller'
import { Footer } from '../../controllers/Footer/Footer.controller'

export const Home = (props: any) => {
  return (
    <>
    <Header/>
    <Feature />
    <Categories/>
    <Footer/>
    <HomeController />
    </>
  )
}
