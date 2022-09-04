import React from 'react'
import { Us as UsExport } from './Us.component'
import { UsDesktop as UsDesktopExport } from './UsDesktop.component'

export function UsComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <UsExport {...props} /> : <UsDesktopExport {...props} />
}
