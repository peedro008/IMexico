import React from 'react';
import { Post as PostExport} from './Post.component'
import { PostDesktop as PostDesktopExport} from './PostDesktop.component'

export function PostComponent(props: any) {
  let mobile = window.innerWidth
  return mobile < 750 ? <PostExport {...props}/> : <PostDesktopExport {...props}/>;
}