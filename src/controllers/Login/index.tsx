import React from 'react'
import { Login as LoginExport } from './Login.controller'
import { ResetPass as ResetPassExport } from './ResetPass.controller'
import { NewPass as NewPassExport } from './NewPass.controller'

export function LoginController(props: any) {
	return <LoginExport {...props} />
}

export function ResetPassController(props: any) {
	return <ResetPassExport {...props} />
}

export function NewPassController(props: any) {
	return <NewPassExport {...props} />
}
