import { Container, Divider, Text, Spinner } from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import chalita from "../../images/chalita.svg"
import PostCard from '../Post/PostCard'
import React, { useEffect, useMemo } from 'react'
import { CategoryBtns } from './CategoryBtns'
import {
    Pagination,
    usePagination,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
    PaginationContainer,
    PaginationPageGroup,
    PaginationSeparator,
} from "@ajna/pagination";
import { useParams } from 'react-router'

export const CategoryPosts = (props: any) => {
    const params: any = useParams();
    let mobile = window.innerWidth

    const handlePageChange = (nextPage: number) => {
        mobile > 750 ? props.changePage(6, (nextPage - 1) * 6) : props.changePage(2, (nextPage - 1) * 2);
        setCurrentPage(nextPage);
        document.getElementById("category-name")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const { pagesCount, currentPage, setCurrentPage, pages } = usePagination({
        total: props.postList.count,
        limits: { inner: 1, outer: 1 },
        initialState: { pageSize: mobile > 750 ? 6 : 2, currentPage: 1 }
    });

    const isDisabled = useMemo(() => {
        return pagesCount === 1;
    }, [pagesCount]);

    useEffect(() => {
        setCurrentPage(1);
    }, [params.id, setCurrentPage]);

    return (
        <>
            <Text mt={5} id="category-name" as="h2" display="flex" flexDirection="row" justifyContent="center" fontSize="20px" paddingTop="20px" fontWeight="700" alignItems="center">{props.selectedCategory?.name}</Text>
            <Divider width="80%" margin="30px auto 0" border="2px"/>
            <Container display="flex" maxWidth="100%" height="fit-content" flexDirection="column" justifyContent="space-around" alignItems="center" paddingY="20px">
                {props.loading ? <Spinner my="200px" color="#217537" /> : <Container display="flex" flexWrap="wrap" maxWidth="100%" height="fit-content" flexDirection={mobile > 750 ? "row" : "column"} justifyContent="space-around" alignItems="center" paddingY="20px">
                    {props.postList.items?.constructor === Array ? props.postList.items?.map((elem: any, index: number) => {
                        return  <Container maxW="40ch" padding="0" paddingBottom="20px" display="flex" justifyContent="center" margin="0px auto"><PostCard key={index} big title={elem.title} category={props.selectedCategory?.name} description={elem.description} image={elem.principalImg} postId={elem._id}/>
                            </Container>}) : null}
                </Container>}
                {!isDisabled && <Pagination
                    pagesCount={18}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                >
                    <PaginationContainer display="flex" alignItems="center" justifyContent="space-between" width={mobile < 750 ? "100%" : "80%"} py={4}>
                        <PaginationPrevious backgroundColor="transparent" color="#1D467C" disabled={currentPage === 1} fontSize={["11px", "16px"]} w={["80px", "100px"]}>
                            Anterior
                        </PaginationPrevious>
                        <PaginationPageGroup isInline align="center" separator={<PaginationSeparator color="black" isDisabled p={0} />}>
                            {pages.map((page: number) => (
                                <PaginationPage
                                    w="30px"
                                    height="30px"
                                    p="0"
                                    bg="transparent"
                                    color="#1D467C"
                                    border="1px solid #1D467C"
                                    borderRadius="50%"
                                    _hover={{
                                        bg: "#1D467C",
                                        color: "white"
                                    }}
                                    _current={{
                                        w: "30px",
                                        height: "30px",
                                        p: "0",
                                        bg: "#1D467C",
                                        color: "white",
                                        borderRadius: "50%",
                                        _hover: {
                                            bg: "#1D467C",
                                        },
                                    }}
                                    key={`pagination_page_${page}`}
                                    page={page}
                                />
                                ))}
                        </PaginationPageGroup>
                        <PaginationNext backgroundColor="transparent" color="#1D467C" fontSize={["11px", "16px"]} w={["80px", "100px"]}>
                            Siguiente
                        </PaginationNext>
                    </PaginationContainer>
                </Pagination>}
                <Divider borderColor="gray" />
                <Divider  border="2px"/>
                <CategoryBtns categoryList={props.categoryList} />
                <Divider  border="2px" display={mobile > 750 ? "none" : "flex"}/>
            </Container>
        </>
    )
}
