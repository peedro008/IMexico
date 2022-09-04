import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as categoryActions from '../../store/actions/category.actions';
import * as postActions from '../../store/actions/post.actions';
import { CategoryPostsComponent } from './../../components/Categories'

export const CategoryPosts = (props: any) => {
    const categoryReducer = useSelector((state: any) => state.categoryReducer);
    const postReducer = useSelector((state: any) => state.postReducer);
    const params: any = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params.categoryId]);

    const selectedCategory = useMemo(() => {
        if (categoryReducer.fetched) {
            return categoryReducer.data.find((category: any) => category._id === params.categoryId)
        }
    }, [categoryReducer.fetched, categoryReducer.data, params.categoryId])

    const categoryList = useMemo(() => {
        if (selectedCategory) {
            return categoryReducer.data.filter((category: any) => category._id !== selectedCategory._id);
        }
    }, [categoryReducer.data, selectedCategory])

    useEffect(() => {
        if (!categoryReducer.fetched) {
            dispatch(categoryActions.getAll());
        } else if (selectedCategory) {
            dispatch(postActions.reintentar());
            let mobile = window.innerWidth;
            mobile > 750 ?
                dispatch(postActions.getByCategoryWithAuth(selectedCategory._id, 6, 0)) :
                dispatch(postActions.getByCategoryWithAuth(selectedCategory._id, 2, 0));
        }
    }, [categoryReducer.fetched, dispatch, selectedCategory]);

    const changePage = (limit: number, skip: number) => {
        dispatch(postActions.reintentar());
        dispatch(postActions.getByCategoryWithAuth(params.categoryId, limit, skip));
    };

    const postList = useMemo(() => {
        if (postReducer.fetched && postReducer.data[0]?.items?.length) {
            return postReducer.data[0];
        } else return [];
    }, [postReducer.fetched, postReducer.data])

    const loading = useMemo(() => {
        return postReducer.fetching;
    }, [postReducer.fetching]);

    return (
        <CategoryPostsComponent selectedCategory={selectedCategory} postList={postList} categoryList={categoryList} changePage={changePage} loading={loading} />
    )
}