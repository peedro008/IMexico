import React from 'react';
import { Home as HomeExport } from './HomeBlog.component'

export function HomeComponent(props: any) {
  return <HomeExport {...props} />;
}