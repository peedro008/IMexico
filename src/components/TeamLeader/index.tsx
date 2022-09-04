import React from "react";
import { TeamLeaderComponent as TeamLeaderExport } from "./TeamLeader.component";
import { TeamLeaderDesktopComponent as TeamLeaderDesktopExport } from "./TeamLeaderDesktop.component";

export function TeamLeaderComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <TeamLeaderExport {...props} /> : <TeamLeaderDesktopExport {...props} />
}