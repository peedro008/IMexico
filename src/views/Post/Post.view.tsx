import React from 'react'
import { Header } from '../../controllers/Header/Header.controller'
import { Footer } from '../../controllers/Footer/Footer.controller'
import { PostController } from '../../controllers/Post'

export const Post = () => {
    return (
        <>
        <Header/>
            <PostController/>
        <Footer/>
        </>
    )
}