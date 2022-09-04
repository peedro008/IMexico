import { Box, Button, Container, Image, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { EventsRegisterModal } from '../Modals/EventsRegisterModal'
import Slider from 'react-slick'
import eventImage4 from '../../images/event/event4.png'
import { FullscreenModal } from "../Modals/FullscreenModal";
import eventMobile4 from "../../images/event/eventMobile4.png"
interface EventsProps {
	eventsList: any[]
}
export const EventsDesktopComponent = (eventsList: EventsProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { 
		isOpen: isOpenFSModal, 
		onOpen: onOpenFSModal, 
		onClose: onCloseFSModal 
	} = useDisclosure()
    const [ src, setSrc ] = useState({})
    
    const handleFullscreen = (src:any) => {
        setSrc(src)
        onOpenFSModal()
    }
	return (
		<Container
			minWidth={'100%'}
			padding={0}
			display='flex'
			flexDirection='column'
			alignItems='center'
			paddingY={'15px'}>
			<Image objectPosition={'0 21%'} objectFit={'cover'} src={eventImage4} height='100%' width='100%'onClick={()=>handleFullscreen(eventMobile4)} />
			{/* <Button
				onClick={onOpen}
				marginTop='35px'
				display='flex'
				height='38.13px'
				width='258px'
				fontSize='16px'
				fontWeight='500'
				textAlign='center'
				filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))'
				color='white'
				backgroundColor='#E81D2C'
				borderRadius='61.7236px'>
				Registrarte aquí
			</Button> */}
			<Text fontSize='25px' fontWeight={700} marginTop='40px' marginBottom='20px' color='#5b5b5b'>
				Ediciones pasadas
			</Text>
			<Box
				display='flex'
				flexDirection={'row'}
				backgroundColor='white'
				minWidth='100%'
				height={'max-content'}
				justifyContent='space-between'
				paddingX='190px'
				paddingTop='40px'>
				<Box width="100%" display='flex' flexDirection={'column'} alignItems='center' justifyContent={"center"} >
					<Image
						onClick={()=>handleFullscreen(eventsList.eventsList[0]?.banner)}
						marginTop='15px'
						height={'356px'}
						width='367px'
						src={`${eventsList.eventsList[0]?.banner}`}
						objectFit={'cover'}
						objectPosition={'48%'}
					/>
					<Link to='/photos'>
						<Button
							marginY='35px'
							display='flex'
							height='37.98px'
							width='258px'
							fontSize='16px'
							fontWeight='500'
							textAlign='center'
							color='white'
							filter='drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))'
							backgroundColor='#FB9F34'
							borderRadius='33.82px'>
							Revive este evento
						</Button>
					</Link>
				</Box>
			
			</Box>

			<EventsRegisterModal isOpen={isOpen} onClose={onClose} />
			<FullscreenModal src={src} isOpen={isOpenFSModal} onClose={onCloseFSModal}  />
		</Container>
	)
}
