import React from 'react'
import { PropCardDesktop as PropCardDesktopExport } from './PropCardDesktop.component'
import { PropCard as PropCardExport } from './PropCard.component'
export function PropCardComponent(props: any) {
	let mobile = window.innerWidth
	return mobile > 750 ? <PropCardDesktopExport {...props} /> : <PropCardExport {...props}/>
}