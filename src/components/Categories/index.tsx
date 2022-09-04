import React from 'react';
import { Categories as CategoriesExport} from './Categories.component'
import { CategoryPosts as CategoryPostsExport} from './CategoryPosts.component'

export function CategoriesComponent(props: any) {
  return <CategoriesExport {...props} />;
}

export function CategoryPostsComponent(props: any) {
  return <CategoryPostsExport {...props} />;
}