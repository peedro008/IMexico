import React, { useEffect } from 'react'

import { CompareController } from '../../controllers/Compare'
import { HeaderController } from '../../controllers/Header'
import { FooterController } from '../../controllers/Footer'


export const Compare = (props: any) => {
  
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
    <>
    <HeaderController/>
    <CompareController/>
    <FooterController/>
    </>
  )
}