import React from 'react'
import { AdminAgentsController } from '../../controllers/Agents'
import { HeaderController } from '../../controllers/Header'


export const AdminAgents = (props: any) => {
  return (
    <>
    <HeaderController/>
    <AdminAgentsController/>
    </>
  )
}