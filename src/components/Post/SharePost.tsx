import { Image } from '@chakra-ui/image'
import { Container, HStack, Text } from '@chakra-ui/layout'
import React, {useState} from 'react'
import facecolor from "../../images/facecolor.svg"
import instcolor from "../../images/instcolor.svg"
import twtcolor from "../../images/twtcolor.svg"
import youtubecolor from "../../images/youtubecolor.svg"
import likepost from "../../images/likepost.svg"
import likedpost from "../../images/likedpost.svg"
import share from "../../images/share.svg"
import { ShareModal } from '../Modals/ShareModal'

export const SharePost = (props: any) => {
    const [shareOpen, setShareOpen] = useState(false);
    let mobile = window.innerWidth
    return (
        <>
        <Container display="flex" marginY="50px" justifyContent="flex-end">
            {mobile < 750 ? <Container>
                <Text fontSize="10px" color="#585858">Seguinos en nuestras redes sociales</Text>
                <HStack>
                    <a href="https://www.facebook.com/imexico.realestate" target="_blank" rel="noreferrer">
                        <Image boxSize="25px" src={facecolor}/>
                    </a>
                    <a href="https://www.instagram.com/imexico.realestate" target="_blank" rel="noreferrer">
                        <Image boxSize="25px" src={instcolor}/>
                    </a>
                    <a href="https://twitter.com/imexicore" target="_blank" rel="noreferrer">
                        <Image boxSize="25px" src={twtcolor}/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCFSMo37utXcCmk_joGOWeJg" target="_blank" rel="noreferrer">
                        <Image boxSize="25px" src={youtubecolor}/>
                    </a>
                </HStack>
            </Container> : null}
            <HStack paddingRight={mobile < 750 ? "30px" : "0"}>
                <Image src={ !props.liked ? likepost : likedpost} onClick={props.loadingLikes ? undefined : props.handleLike} />
                <Image src={share} onClick={() => setShareOpen(true)}/>
            </HStack>
        </Container>
        <ShareModal shareOpen={shareOpen} onClose={() => setShareOpen(false)}/>
    </>
    )
}
