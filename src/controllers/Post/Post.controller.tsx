import React, { useEffect, useMemo, useState } from 'react'
import { useDisclosure } from '@chakra-ui/hooks';
import { Text, Center, Image, VStack, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PostComponent } from './../../components/Post'
import * as postActions from "../../store/actions/post.actions";
import * as relatedPostsActions from "../../store/actions/relatedPosts.actions";
import * as commentActions from "../../store/actions/comment.actions";
import * as likeActions from "../../store/actions/like.actions";
import * as userActions from "../../store/actions/user.actions"
import NotLoggedModal from '../../components/Modals/NotLoggedModal';

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export const Post = (props: any) => {
    const postReducer = useSelector((state: any) => state.postReducer);
    const relatedPostsReducer = useSelector((state: any) => state.relatedPostsReducer);
    const commentReducer = useSelector((state: any) => state.commentReducer);
    const likeReducer = useSelector((state: any) => state.likeReducer);
    const userReducer = useSelector((state: any) => state.userReducer);
    const params: any = useParams();
    const dispatch = useDispatch();

    const [liked, setLiked] = useState(false);
    const [shouldFetch, setShouldFetch] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(postActions.getByIdWithAuth(params.postId));
        dispatch(relatedPostsActions.getMany(params.postId, 3, 0));
        dispatch(commentActions.getManyByPostWithAuth(params.postId, 0, 0));
        dispatch(likeActions.getAll());

        if(localStorage.getItem('session_user') !== null) {
            dispatch(userActions.get(localStorage.getItem('session_user')!))
        };

    }, [dispatch, params.postId]);

    const isLogged = useMemo(() => {
        if(userReducer?.fetched){
            return userReducer.fetched
        } else{
            return false
        }
    }, [userReducer]);

    const loadingLikes = useMemo(() => likeReducer?.fetching, [likeReducer.fetching]);

    const postBody = useMemo(() => {
        if (postReducer.fetched && postReducer.data.constructor !== Array) {
            let initialBody = postReducer.data.body;
            return initialBody.replaceAll("</p>", "").split("<p>");
        } else return "";
    }, [postReducer.fetched, postReducer.data]);

    const postLike = useMemo(() => {
        if (likeReducer.fetched && postReducer.fetched && postReducer.data.constructor !== Array && likeReducer.data.length && isLogged)
            return likeReducer?.data?.find((like: any) => like.post === postReducer.data._id && like.user === userReducer.data._id);
    }, [likeReducer.data, likeReducer.fetched, isLogged, userReducer.data._id, postReducer.data._id, postReducer.data.constructor, postReducer.fetched]);

    const handleLike = () => {
        if (isLogged) {
            if (postLike) {
                dispatch(likeActions.deleteById(postLike._id));
                setLiked(false);
                setShouldFetch(true);
            } else {
                const object = {
                    post: params.id,
                    user: userReducer.data._id,
                    isDislike: false,
                }
                dispatch(likeActions.setByCommentOrPost(object));
                setLiked(true);
                setShouldFetch(true);
            }
        } else onOpen();
    }

    useEffect(() => {
        if (postLike && !liked) {
            setLiked(true);
        } else if (!postLike)
            setLiked(false);
    }, [postLike, liked]);

    useEffect(() => {
        if (likeReducer.fetched && !likeReducer.fetching && shouldFetch) {
            setShouldFetch(false);
            dispatch(likeActions.getAll());
        }
    }, [likeReducer.fetched, likeReducer.fetching, shouldFetch, dispatch]);

    const loading = useMemo(() => {
        return postReducer?.fetching || relatedPostsReducer?.fetching;
    }, [postReducer?.fetching, relatedPostsReducer?.fetching]);

    const formatDate = (date: string) => {
        const dateObject = new Date(date);
        return `${dateObject.getDate()} de ${MONTHS[dateObject.getMonth()]} de ${dateObject.getFullYear()}`;
    }

    // auxiliar functions
    const replaceLinks = (elem: string, index: number) => {
        if (elem.includes("[") && elem.includes("]")) { //if it's a link
            const removedTags: string = elem.replace(/(<\/?(?:a)[^>]*>)|<[^>]+>/, '');
            const originalSubstring = removedTags.substring(removedTags.indexOf("["), removedTags.indexOf(")") + 1);
            const text = originalSubstring.substring(originalSubstring.indexOf("[") + 1, originalSubstring.indexOf("]"));
            const url = originalSubstring.substring(originalSubstring.indexOf("(") + 1, originalSubstring.indexOf(")"));

            const result = `<a href="${url}" target="_blank" rel="noreferrer" key=${index}>${text}</a>`
            elem = elem.replace(originalSubstring, result);
            if (elem.includes("[") && elem.includes("]")) elem = replaceLinks(elem, index);
        }

        return elem;
    }

    const replaceImage = (elem: string, index: number) => {
        const removedTags = elem.replace( /(<([^>]+)>)/ig, '');
        const dataArray = removedTags.replace("[image]", "").split(")");
        const imageUrl = dataArray[0].replace("(", "");
        const imageEpigraph = dataArray[1].replace("(", "");
        return (
            <Center w="100%" key={index}>
                <VStack bgColor="#1D467C" fontSize={["10", "14"]}>
                    <Image src={imageUrl} w="100%" />
                    {imageEpigraph && <Text mx="17px !important" my="10px !important">{imageEpigraph}</Text>}
                </VStack>
            </Center>
        )
    }

    const replaceYoutube = (elem: string, index: number) => {
        const videoUrl = elem.replace("[youtube](", "").replace(")", "").replace("watch?v=", "embed/");
            return (
                <Box w="100%" h="0" position="relative" pb="56.25%">
                    <iframe
                        key={index}
                        src={videoUrl}
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Box>
            )
    }

    //actual function
    const processText = (text: string, index: number) => {
        if (text.includes("[image]")) { //if it's an image
            return replaceImage(text, index);
        } else if (text.includes("[youtube]")) {
            return replaceYoutube(text, index)
        } else {
            let mobile = window.innerWidth;
            text = replaceLinks(text, index);
            return <Text
                        key={index}
                        dangerouslySetInnerHTML={{__html: text}}
                        as="p"
                        fontSize={mobile < 750 ? "14px" : "20px"}
                        wordBreak="break-word"
                        lineHeight={mobile < 750 ? "21px" : "30px"}
                        fontWeight="400" color="#585858"
                    />
        }
    }

    const propsToComponent = {
        comments: commentReducer.data,
        formatDate,
        handleLike,
        liked,
        loading,
        loadingLikes,
        post: postReducer.data,
        postBody,
        processText,
        relatedPosts: relatedPostsReducer.data,
        ...props
    }

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <NotLoggedModal isOpen={isOpen} onClose={onClose} />
            <PostComponent {...propsToComponent} />
        </>
    )
}
