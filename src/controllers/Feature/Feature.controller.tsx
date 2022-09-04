import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FeatureComponent } from './../../components/Feature'
import * as featureActions from '../../store/actions/feature.actions';
import { useParams } from 'react-router-dom';

export const Feature = (props: any) => {
    let featureReducer = useSelector((state: any) => state.featureReducer);
    let categoryReducer = useSelector((state: any) => state.categoryReducer);
    const dispatch = useDispatch();
    const params: any = useParams();

    useEffect(() => {
        if (params.id) {
            dispatch(featureActions.getByCategoryId(params.id));
        } else dispatch(featureActions.get());
    }, [dispatch, params.id]);

    const category = useMemo(() => {
        if (categoryReducer.fetched && featureReducer.fetched)
            return categoryReducer.data.find((category: any) => category._id === featureReducer.data.category)?.name
    }, [featureReducer.data, featureReducer.fetched, categoryReducer.data, categoryReducer.fetched])

    return (
        <FeatureComponent feature={featureReducer.data} category={category} categoryId={featureReducer.data?.category} loading={featureReducer.fetching} fetched={featureReducer.fetched} {...props}/>
    )
}
