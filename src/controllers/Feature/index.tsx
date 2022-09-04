import React from 'react';
import { Feature as FeatureExport } from './Feature.controller'

export function FeatureController(props: any) {
  return <FeatureExport {...props} />;
}