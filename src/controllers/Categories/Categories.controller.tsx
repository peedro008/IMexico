import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesComponent } from './../../components/Categories'
import * as categoryActions from "../../store/actions/category.actions";

export const Categories = (props: any) => {
    const categoryReducer = useSelector((state: any) => state.categoryReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(categoryActions.reintentar());
        dispatch(categoryActions.getAll());
    }, [dispatch]);

    return (
        <CategoriesComponent categoryList={categoryReducer?.data} fetching={categoryReducer?.fetching} fetched={categoryReducer?.fetched}/>
    )
}
