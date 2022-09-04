import { Center, Divider, Spinner } from '@chakra-ui/react'
import React from 'react'
import { CategoryBtns } from './CategoryBtns'
import { CategoryCarrousel } from './CategoryCarrousel'
import { CategoryCarrouselDesktop } from './CategoryCarrouselDesktop'

export const Categories = (props: any) => {
    let mobile = window.innerWidth
    return (
        <>
        {props.fetching ? <Center h="100px"><Spinner color="green" /></Center> : <CategoryBtns categoryList={props.categoryList} />}
        <Divider width="80%" margin="0 auto" border="2px"/>
        {props.fetched && (mobile < 750 ? <CategoryCarrousel categoryList={props.categoryList}/> : <CategoryCarrouselDesktop categoryList={props.categoryList}/>)}
        </>
    )
}
