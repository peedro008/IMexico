import React from 'react'
import { AdminAgents as AdminAgentsExport } from './AdminAgents.view'
import { AgentSchedule as AgentScheduleExport } from './AgentSchedule.view'

export function AdminAgentsView(props: any) {
	return <AdminAgentsExport {...props} />
}

export function AgentScheduleView(props: any) {
	return <AgentScheduleExport {...props} />
}
