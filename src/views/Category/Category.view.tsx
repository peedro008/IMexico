import React from 'react'
import { Header } from '../../controllers/Header/Header.controller'
import { Feature } from '../../controllers/Feature/Feature.controller'
import { Footer } from '../../controllers/Footer/Footer.controller'
import {  Divider } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { CategoryBtns } from '../../components/Categories/CategoryBtns'
import { CategoryPostsController as CategoryPosts } from '../../controllers/Categories'
import { Center, Spinner } from '@chakra-ui/react'
import { useHistory } from 'react-router'

export const Category = (props: any) => {
    const history = useHistory();
    return (
        <>
        <Header/>
        <Feature />
        <CategoryPosts selectedCategory={props.selectedCategory}/>
        {props.fetching ? <Center h="100px"><Spinner color="green" /></Center> : <CategoryBtns categoryList={props.categoryList} />}
        <Button  fontSize="20px" margin="0 auto" display="flex" marginY="20px" onClick={history.goBack}>Volver</Button>
        <Footer/>
        </>
    )
}
