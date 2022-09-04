import React, { useEffect } from 'react';
import { FooterController } from '../../controllers/Footer'
import { Header } from '../../controllers/Header/Header.controller'
import { DevelopmentDetailsController } from '../../controllers/DevelopmentDetails';

export const DevelopmentDetails = (props: any) => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return( 
    <>
    <Header/>
    <DevelopmentDetailsController {...props} />
    <FooterController/>
    </>
  )
};
