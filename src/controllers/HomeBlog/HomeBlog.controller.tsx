import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as postActions from "../../store/actions/post.actions";

import { HomeComponent } from './../../components/HomeBlog'

export const Home = (props: any) => {
  let categoryReducer = useSelector((state: any) => state.categoryReducer);
  const dispatch = useDispatch();
  const [shouldFetchPosts, setShouldFetchPosts] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (categoryReducer.fetched && shouldFetchPosts) {
      dispatch(postActions.reintentar());
      for (let category of categoryReducer.data) {
        dispatch(postActions.getByCategoryWithAuth(category._id, 3, 0));
      }
      setShouldFetchPosts(false);
    };
  }, [categoryReducer, shouldFetchPosts, dispatch]);

  return (
    <HomeComponent />
  )
}
