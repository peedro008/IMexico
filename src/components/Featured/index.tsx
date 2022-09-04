import React from 'react'
import { Featured as FeaturedExport } from './Featured.component'
import { FeaturedDesktop as FeaturedDesktopExport } from './FeaturedDesktop.component'

export function FeaturedComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <FeaturedExport {...props} /> : <FeaturedDesktopExport {...props} />
}
