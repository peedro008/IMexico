import React from 'react'
import { ReserveController } from '../../controllers/Reserve'
import { HeaderController } from '../../controllers/Header'
import { FooterController } from '../../controllers/Footer'
export const Reserve = (props: any) => {
  return (
    <>
    <HeaderController/>
    <ReserveController />
    <FooterController/>
    </>
  )
}
