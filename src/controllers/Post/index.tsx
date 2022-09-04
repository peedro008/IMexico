import React from 'react';
import { Post as PostExport } from './Post.controller'

export function PostController(props: any) {
  return <PostExport {...props} />;
}