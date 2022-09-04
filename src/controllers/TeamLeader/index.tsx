import React from 'react'
import { TeamLeader as TeamLeaderExport } from './TeamLeader.controller'


export function DetailsController(props: any) {
	return <TeamLeaderExport {...props} />
}