import React from 'react'
import { TermsComponent as TermsExport } from './Terms.component'
import { TermsDesktopComponent as TermsDesktopExport } from './TermsDesktop.component'


export function TermsComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <TermsExport {...props} /> : <TermsDesktopExport {...props} />
}
