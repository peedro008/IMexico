import React, { useEffect, useMemo, useState } from 'react'
import { useDisclosure } from '@chakra-ui/hooks';
import { useDispatch, useSelector } from 'react-redux';
import CommentComponent from './../../components/Post/Comment'
import * as likeActions from "../../store/actions/like.actions";
import NotLoggedModal from '../../components/Modals/NotLoggedModal';

const CommentsContainerController = (props: any) => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const [shouldFetch, setShouldFetch] = useState(false)

    const likeReducer = useSelector((state: any) => state.likeReducer);
    const userReducer = useSelector((state: any) => state.userReducer);
    const dispatch = useDispatch();

    const isLogged = useMemo(() => {
        return userReducer.fetched
    }, [userReducer.fetched]);

    const commentLike = useMemo(() => {
        if (likeReducer.fetched && likeReducer.data.length && isLogged)
            return likeReducer?.data?.find((like: any) => like.comment === props.comment._id && like.user === userReducer.data._id);
    }, [likeReducer.data, likeReducer.fetched, props.comment._id, isLogged, userReducer.data._id]);

    useEffect(() => {
        if (commentLike) {
            commentLike.isDislike ? setDisliked(true) : setLiked(true);
        }
    }, [commentLike]);

    useEffect(() => {
        if (!isLogged) {
            setLiked(false);
            setDisliked(false);
        }
    }, [isLogged]);

    const handleLike = (state: string) => {
        if (isLogged) {
            if (commentLike) {
                if ((state === "like" && liked) || (state === "dislike" && disliked)) {
                    dispatch(likeActions.deleteById(commentLike._id));
                    setShouldFetch(true);
                    state === "like" ? setLiked(false) : setDisliked(false);
                } else {
                    const auxLike = {...commentLike};
                    auxLike.isDislike = state === "dislike";
                    dispatch(likeActions.updateById(commentLike._id, auxLike));
                    if (state === "like") {
                        setLiked(true);
                        setDisliked(false);
                    } else {
                        setDisliked(true);
                        setLiked(false);
                    }
                    setShouldFetch(true);
                }

            } else {
                const object = {
                    comment: props.comment._id,
                    user: userReducer.data._id,
                    isDislike: state === "dislike",
                }
                dispatch(likeActions.setByCommentOrPost(object));
                state === "like" ? setLiked(true) : setDisliked(true);
                setShouldFetch(true);
            }
        } else onOpen();

    }

    const loadingLikes = useMemo(() => likeReducer.fetching, [likeReducer.fetching]);

    useEffect(() => {
        if (likeReducer.fetched && !likeReducer.fetching && shouldFetch) {
            setShouldFetch(false);
            dispatch(likeActions.getAll());
        }
    }, [likeReducer.fetched, likeReducer.fetching, shouldFetch, dispatch]);

    const propsToComponent = {
        liked,
        disliked,
        handleLike,
        loadingLikes,
        ...props
    }

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <NotLoggedModal isOpen={isOpen} onClose={onClose} />
            <CommentComponent {...propsToComponent} />
        </>
    )
}

export default CommentsContainerController
