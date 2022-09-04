import React from 'react'
import { Login as LoginExport } from './Login.view'
import { ResetPass as ResetPassExport } from './ResetPass.view'
import { NewPass as NewPassExport } from './NewPass.view'


export function LoginView(props: any) {
	return <LoginExport {...props} />
}
export function ResetPassView(props: any) {
	return <ResetPassExport {...props} />
}

export function NewPassView(props: any) {
	return <NewPassExport {...props} />
}