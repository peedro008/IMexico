import React from 'react'
import { Compare as CompareExport } from './Compare.component'
import { CompareDesktop as CompareDesktopExport } from './CompareDesktop.component'

export function CompareComponent(props: any) {
	let mobile = window.innerWidth
	
	return (mobile<750? <CompareExport {...props} /> : <CompareDesktopExport {...props} />)
}