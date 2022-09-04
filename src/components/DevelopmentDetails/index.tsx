import React from 'react'
import { DevelopmentDetails as DevelopmentDetailsExport } from './DevelopmentDetails.component';
import { DevelopmentDetailsDesktop as DevelopmentDetailsDesktopExport } from "./DevelopmentDetailsDesktop.component"

export function DevelopmentDetailsComponent(props: any) {
	let mobile = window.innerWidth
	
	return (mobile<750? <DevelopmentDetailsExport {...props} /> : <DevelopmentDetailsDesktopExport {...props} />)
}