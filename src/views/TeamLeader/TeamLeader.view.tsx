import React, { useEffect } from 'react'
import { TeamLeader as TeamLeaderExport} from '../../controllers/TeamLeader/TeamLeader.controller'
import { FooterController } from '../../controllers/Footer'
import { HeaderController } from '../../controllers/Header'
export const TeamLeader = (props: any) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <HeaderController/>
    <TeamLeaderExport />
    <FooterController/>
    </>
  )
}
