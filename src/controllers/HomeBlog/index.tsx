import React from 'react';
import { Home as HomeExport } from './HomeBlog.controller'

export function HomeController(props: any) {
  return <HomeExport {...props} />;
}