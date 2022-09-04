import React from 'react'
import { AdminAgents as AdminAgentsExport } from './AdminAgents.controller'
import { AgentCard as AgentCardExport } from './AgentCard.controller'
import { AgentSchedule as AgentScheduleExport } from './AgentSchedule.controller'

export function AdminAgentsController(props: any) {
	return <AdminAgentsExport {...props} />
}

export function AgentCardController(props: any) {
	return <AgentCardExport {...props} />
}

export function AgentScheduleController(props: any) {
	return <AgentScheduleExport {...props} />
}