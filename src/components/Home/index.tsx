import React from 'react'
import { Home as HomeExport } from './Home.component'
import { HomeDesktop as HomeDesktopExport } from './HomeDesktop.component'

export function HomeComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <HomeExport {...props} /> : <HomeDesktopExport {...props} />
}
