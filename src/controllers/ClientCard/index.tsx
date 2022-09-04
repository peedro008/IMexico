import React from 'react'
import { ClientCardComponent as ClientCardExport } from '../../components/ClientCard/ClientCard.component'
export function ClientCardController(props: any) {
	return <ClientCardExport {...props} />
}
