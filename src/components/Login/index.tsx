import React from 'react'
import { Login as LoginExport } from './Login.component'
import { LoginDesktop as LoginDesktopExport } from './LoginDesktop.component'
import { ResetPass as ResetPassExport } from './ResetPass.component'
import { ResetPassDesktop as ResetPassDesktopExport } from './ResetPassDesktop.component'
import { NewPass as NewPassExport } from './NewPass.component'
import { NewPassDesktop as NewPassDesktopExport } from './NewPassDesktop.component'

export function LoginComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <LoginExport {...props} /> : <LoginDesktopExport {...props} />
}

export function ResetPassComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <ResetPassExport {...props} /> : <ResetPassDesktopExport {...props} />
}

export function NewPassComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <NewPassExport {...props} /> : <NewPassDesktopExport {...props} />
}
