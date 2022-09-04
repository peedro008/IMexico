import React, { useEffect } from 'react'

import { HeaderController } from '../../controllers/Header'
import { FooterController } from '../../controllers/Footer'
import { DetailsCarouselController, DetailsController } from './../../controllers/Details'

export const Details = (props: any) => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])

  return (
    <>
    <HeaderController/>
    <DetailsCarouselController />
    <DetailsController/>
    <FooterController/>
    </>
  )
}