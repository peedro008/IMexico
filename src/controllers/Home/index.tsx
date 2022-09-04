import React from 'react'
import { Home as HomeExport } from './Home.controller'

export function HomeController(props: any) {
	return <HomeExport {...props} />
}
