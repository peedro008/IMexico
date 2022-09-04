import React from 'react'
import { Services as ServicesExport } from './Services.component'
import { ServicesDesktop as ServicesDesktopExport } from './ServicesDesktop.component'

export function ServicesComponent(props: any) {
	let mobile = window.innerWidth
	return  mobile < 750 ? <ServicesExport {...props} />:<ServicesDesktopExport {...props} />
}
