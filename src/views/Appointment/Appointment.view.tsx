import React from 'react'
import { AppointmentController } from '../../controllers/Appointment'
import { HeaderController } from '../../controllers/Header'


export const Appointment = (props: any) => {
  return (
    <>
    <HeaderController/>
    <AppointmentController/>
    </>
  )
}