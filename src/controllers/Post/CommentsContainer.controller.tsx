import React, { useEffect, useMemo, useState } from 'react'
import { useDisclosure } from '@chakra-ui/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { CommentsContainer } from './../../components/Post/CommentsContainer'
import * as commentActions from "../../store/actions/comment.actions";
import { useParams } from 'react-router';
import NotLoggedModal from '../../components/Modals/NotLoggedModal';

const CommentsContainerController = (props: any) => {
    const { comments, formatDate } = props;

    const params: any = useParams();

    const [isAnonymous, setIsAnonymous] = useState(true);
    const [shouldFetch, setShouldFetch] = useState(false);
    const [value, setValue] = useState("");

    let handleInputChange = (e: any) => {
        let inputValue = e.target.value
        if (inputValue.length < 150) setValue(inputValue);
    }

    const userReducer = useSelector((state: any) => state.userReducer);
    const commentReducer = useSelector((state: any) => state.commentReducer);
    const dispatch = useDispatch();

    const isLogged = useMemo(() => userReducer.fetched, [userReducer.fetched]);
    const userName = useMemo(() => userReducer.data.user, [userReducer.data.user]);
    const loading = useMemo(() => commentReducer.fetching, [commentReducer.fetching]);

    const handleComment = (value: string) => {
        if (isLogged) {
            const object = {
                comment: value,
                user: userReducer.data._id,
                post: params.id,
                anonymous: isAnonymous,
                likes: 0,
                dislikes: 0,
            }
            dispatch(commentActions.setByPost(object));
            setShouldFetch(true);
        } else {
            onOpen();
        }
    }

    useEffect(() => {
        if (commentReducer.fetched && shouldFetch) {
            setShouldFetch(false);
            dispatch(commentActions.getManyByPostWithAuth(params.id, 0, 0));
            setValue("");
        }
    }, [commentReducer.fetched, shouldFetch, dispatch, params.id]);

    const propsToComponent = {
        comments,
        formatDate,
        handleComment,
        handleInputChange,
        isLogged,
        loading,
        setIsAnonymous,
        userName,
        value,
    }

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <NotLoggedModal isOpen={isOpen} onClose={onClose} />
            <CommentsContainer {...propsToComponent} />
        </>
    )
}

export default CommentsContainerController
