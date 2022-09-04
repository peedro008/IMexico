import React from 'react'
import { AdminAgents as AdminAgentsExport } from './AdminAgents.component'
import { AgentCard as AgentCardExport } from './AgentCard.component'
import { AgentSchedule as AgentScheduleExport } from './AgentSchedule.component'

export function AdminAgentsComponent(props: any) {
	return <AdminAgentsExport {...props} />
}

export function AgentCardComponent(props: any) {
	return <AgentCardExport {...props} />
}

export function AgentScheduleComponent(props: any) {
	return <AgentScheduleExport {...props} />
}
