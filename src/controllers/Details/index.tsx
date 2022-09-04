import React from 'react'
import { Details as DetailsExport } from './Details.controller'
import { DetailsCarousel as DetailsCarouselExport } from './DetailsCarousel.controller'

export function DetailsController(props: any) {
	return <DetailsExport {...props} />
}

export function DetailsCarouselController(props: any) {
	return <DetailsCarouselExport {...props} />
}
