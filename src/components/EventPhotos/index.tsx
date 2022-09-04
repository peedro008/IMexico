import React from 'react'
import { EventPhotosDesktopComponent as EventPhotosDesktopComponentExport } from './EventsPhotosDesktop.component'
import { EventPhotosComponent as EventPhotosComponentExport } from './EventPhotos.component'
export function EventPhotosComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <EventPhotosComponentExport {...props} /> : <EventPhotosDesktopComponentExport {...props} />
}
