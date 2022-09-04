import React from 'react';
import { Categories as CategoriesExport } from './Categories.controller'
import { CategoryPosts as CategoryPostsExport } from './CategoryPosts.controller'

export function CategoriesController(props: any) {
  return <CategoriesExport {...props} />;
}

export function CategoryPostsController(props: any) {
  return <CategoryPostsExport {...props} />;
}