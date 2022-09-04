import React, { useEffect } from 'react';
import { FooterController } from '../../controllers/Footer'
import { Header } from '../../controllers/Header/Header.controller'
import { DevelopmentController } from '../../controllers/Development';

export const Development = (props: any) => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return( 
    <>
    <Header/>
    <DevelopmentController {...props} />
    <FooterController/>
    </>
  )
};
