import React from 'react'
import { Details as DetailsExport } from './Details.component'
import { DetailsDesktop as DetailsDesktopExport } from './DetailsDesktop.component'
import { DetailsCarousel as DetailsCarouselExport } from './DetailsCarousel.component'
import { DetailsCarouselDesktop as DetailsCarouselDesktop } from './DetailsCarouselDesktop.component'

export function DetailsComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <DetailsExport {...props} /> : <DetailsDesktopExport {...props} />
}

export function DetailsCarouselComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <DetailsCarouselExport {...props} /> : <DetailsCarouselDesktop {...props} />
}