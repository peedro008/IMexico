import React from 'react'
import { UsController } from '../../controllers/Us'
import { HeaderController } from '../../controllers/Header'

import { FooterController } from '../../controllers/Footer'

export const Us = (props: any) => {
  return (
    <>
    <HeaderController/>
    <UsController/>
    <FooterController/>
    </>
  )
}