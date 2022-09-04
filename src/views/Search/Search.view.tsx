import React, { useEffect } from 'react'
import { FooterController } from '../../controllers/Footer'
import { Header } from '../../controllers/Header/Header.controller'
import { SearchController } from '../../controllers/Search'

export const Search = (props: any) => {
  
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
    <>
    <Header/>
    <SearchController/>
    <FooterController/>
    </>
  )
}