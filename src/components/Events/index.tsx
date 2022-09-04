import React from 'react';
import { EventsComponent as EventsComponentExport } from './Events.component';
import { EventsDesktopComponent as EventsDesktopComponentExport } from './EventsDesktop.component';

export function EventsComponent(props: any) {
  let mobile = window.innerWidth
  return mobile < 750 ? <EventsComponentExport {...props} /> : <EventsDesktopComponentExport {...props}/>;
}