import React from 'react'
import { PropCard as PropCardExport } from './PropCard.controller'

export function PropCardController(props: any) {
	return <PropCardExport {...props} />
}
