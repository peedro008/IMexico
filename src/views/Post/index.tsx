import React from 'react';
import { Post as PostExport } from './Post.view'

export function PostView(props: any) {
  return <PostExport {...props} />;
}