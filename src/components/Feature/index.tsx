import React from 'react';
import { Feature as FeatureExport } from './Feature.component'
import { FeatureDesktop as FeatureDesktopExport } from './FeatureDesktop.component'

export function FeatureComponent(props: any) {
  let mobile = window.innerWidth
  return mobile < 750 ? <FeatureExport {...props} /> : <FeatureDesktopExport {...props}/>;
}