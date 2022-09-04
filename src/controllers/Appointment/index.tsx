import React from 'react'
import { Appointment as AppointmentExport } from './Appointment.controller'
import { AppointmentCard as AppointmentCardExport } from './AppointmentCard.controller'

export function AppointmentController(props: any) {
	return <AppointmentExport {...props} />
}

export function AppointmentCardController(props: any) {
	return <AppointmentCardExport {...props} />
}
