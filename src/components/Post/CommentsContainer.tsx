import { Button } from '@chakra-ui/button';
import { Center, Container, Divider, Text } from '@chakra-ui/layout';
import { Select, Spinner } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';
import CommentController from '../../controllers/Post/Comment.controller';

export const CommentsContainer = (props: any) => {

    const { comments, error, formatDate, handleComment, handleInputChange, isLogged, loading, setIsAnonymous, userName, value } = props;

    const handleSelect = (e: any) => {
        if (e.target.value === "userName") {
            setIsAnonymous(false);
        } else setIsAnonymous(true);
    }

    let mobile = window.innerWidth
    return (
        <Container>
            <Container>
                <Text as="h6" color="black" fontSize={mobile < 750 ? "10px" : "17px"}>{`${comments.length} COMENTARIOS`}</Text>
                <Textarea
                    value={value}
                    onChange={handleInputChange}
                    placeholder="Dejanos tu comentario"
                    size="md"
                    borderRadius="none"
                />
                <Container minWidth="100%" padding="0" display="flex" flexDirection={mobile < 750 ? "column" : "row"} justifyContent="space-between">
                    {isLogged && <Select placeholder="Comentar como:" width={mobile < 750 ? "100%" : "70%"} size="sm" borderRadius="7px" marginTop="15px" color="#79940D" borderColor="#79940D" onChange={handleSelect}>
                        <option value="userName">{userName}</option>
                        <option value="nn">Anónimo</option>
                    </Select>}
                    <Button margin="20px auto" display="flex" onClick={() => handleComment(value)} disabled={value === ""}>Comentar</Button>
                    {error && <Text color="red" fontSize="12px" paddingBottom="10px" >{error}</Text>}
                </Container>
            </Container>
            <Divider/>
            {loading ? <Center h="250px"><Spinner color="green" /></Center> : <Container maxWidth="100%" padding="0" maxHeight="250px" overflowY="scroll">
            {comments.constructor === Array && comments.map((comment: any, index: number) => {
                return (
                    <CommentController key={index} comment={comment} formatDate={formatDate} />
                )
            })}
            </Container>}
        </Container>
    )
}
