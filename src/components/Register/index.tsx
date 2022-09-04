import React from 'react'
import { Register as RegisterExport } from './Register.component'
import { RegisterDesktop as RegisterDesktopExport } from './RegisterDesktop.component'

export function RegisterComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <RegisterExport {...props} /> : <RegisterDesktopExport {...props} />
}
