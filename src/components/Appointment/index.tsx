import React from 'react'
import { Appointment as AppointmentExport } from './Appointment.component'
import { AppointmentCard as AppointmentCardExport } from './AppointmentCard.component'

export function AppointmentComponent(props: any) {
	return <AppointmentExport {...props} />
}

export function AppointmentCardComponent(props: any) {
	return <AppointmentCardExport {...props} />
}
