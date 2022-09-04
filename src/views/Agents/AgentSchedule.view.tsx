import React from 'react'
import { AgentScheduleController } from '../../controllers/Agents'
import { HeaderController } from '../../controllers/Header'


export const AgentSchedule = (props: any) => {
  return (
    <>
    <HeaderController/>
    <AgentScheduleController/>
    </>
  )
}