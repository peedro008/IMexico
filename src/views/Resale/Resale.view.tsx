import React, { useEffect } from 'react';
import { FooterController } from '../../controllers/Footer'
import { Header } from '../../controllers/Header/Header.controller'
import { ResaleController } from '../../controllers/Resale';

export const Resale = (props: any) => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return( 
    <>
    <Header/>
    <ResaleController {...props} />
    <FooterController/>
    </>
  )
};
