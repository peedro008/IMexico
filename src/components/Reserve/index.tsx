import React from 'react'
import { ReserveComponent as ReserveExport } from './Reserve.component'
import { ReserveDesktopComponent as ReserveDesktopExport } from './ReserveDesktop.component'

export function ReserveComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <ReserveExport {...props} /> : <ReserveDesktopExport {...props}/>
}