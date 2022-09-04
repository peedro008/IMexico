import React from 'react'
import { Header } from '../../controllers/Header/Header.controller'
import { ZoneSearchController } from '../../controllers/Search'

export const ZoneSearch = (props: any) => {
  return (
    <>
    <Header/>
    <ZoneSearchController/>
    </>
  )
}